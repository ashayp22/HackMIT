from flask import Flask, jsonify
from flask import abort
from flask import make_response
import json
import requests
import json
import requests
import json
from datetime import datetime
import xlrd
from random import randint
from backend.twitter import *
import asyncio
import requests
import json
from bs4 import BeautifulSoup
from collections import Counter
from stop_words import get_stop_words
import requests
from stop_words import get_stop_words
import random


TOKEN = 'pk_c127b96a2806454e912666398b0de325'

# RANDOM:
# http://localhost:5000/todo/api/v1.0/data

# 2 PARAMS:
# http://localhost:5000/todo/api/v1.0/data/2020-09-15/twtr




def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
def get_articles(company_name, date):
    x = requests.get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=Financial&q=' + company_name +'&begin_date='+ date+'&end_date='+str(datetime.date(datetime.now()))+'&api-key=vA4veDbzOGiQffPxBUYMq1EEX0YJT7X7').json()
    # print(x.content)
    json_response = x
    url = json_response['response']['docs'][0]['web_url']

    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')

    results = soup.find(id='story')
    # print(results.prettify())
    job_elems = results.find_all('section', class_='meteredContent css-1r7ky0e')

    articles = job_elems[0]('p', class_='css-158dogj evys1bk0')
    total_words = []
    for i in range(len(articles)):
        total_words.append(articles[i].text)
    return (total_words)

def get_frq_words(total_words):
    stop_words = get_stop_words('en')
    fin_string = ""
    for i in range(len(total_words)):
        fin_string+=total_words[i] + " "

    split_it = fin_string.split()
    Counter1 = Counter(split_it)
    most_occur = Counter1.most_common(100)
    most_occur_final = []
    for i in range(len(most_occur)):
        if most_occur[i][0] not in stop_words:
            most_occur_final.append(most_occur[i])

            # UNCOMMENT THESE LINES IF YOU ARE GETTING WEIRD CHARACTERS FOR WORDS

            # if "\'" not in most_occur[i][0]:
            #
            #     most_occur_final.append(most_occur[i])
            # elif  "\"" not in most_occur[i][0]:
            #
            #     most_occur_final.append(most_occur[i])
            # elif "\\" not in most_occur[i][0]:
            #     most_occur_final.append(most_occur[i])
            # elif "—" not in most_occur[i][0]:
            #     most_occur_final.append(most_occur[i])
            # elif "—" not in most_occur[i][0]:
            #     most_occur_final.append(most_occur[i])




    return most_occur_final




def calculate_ratios(ticker, date):
    ratios_per_time = {}
    ratios = requests.get("https://financialmodelingprep.com/api/v3/ratios/" + ticker, params={"apikey":"3031a148ba0503934e38b9ee6224a4cd"}).json()
    for ratio in ratios:
        for key in ratio.keys():
            if key not in ratios_per_time:
                ratios_per_time[key] = [ratio[key]]
            else:
                ratios_per_time[key].append(ratio[key])

    bs = requests.get('https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/' + ticker,params={"apikey":"3031a148ba0503934e38b9ee6224a4cd"}).json()["financials"]
    income_statement = requests.get('https://financialmodelingprep.com/api/v3/financials/income-statement/' + ticker,params={"apikey":"3031a148ba0503934e38b9ee6224a4cd"}).json()["financials"]
    cash_flows = requests.get('https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/' + ticker,params={"apikey":"3031a148ba0503934e38b9ee6224a4cd"}).json()["financials"]
    today = datetime.today().strftime("%Y-%m-%d")
    five_years_before = (datetime.today() - timedelta(days=365 * 5)).strftime("%Y-%m-%d")
    dividend_calendar = requests.get('https://financialmodelingprep.com/api/v3/stock_dividend_calendar',params={"apikey":"3031a148ba0503934e38b9ee6224a4cd","from":five_years_before,"to":today}).json()
    dividends = {}
    for dividend in dividend_calendar:
        if dividend["symbol"] == ticker:
            dividends[dividend["date"]] = dividend["adjDividend"]
    earnings = {}
    for i in income_statement:
        earnings[i["date"]] = i["Net Income"]
    vertical_analysis = {"grossProfit": {
        income_statement[0]["date"]: float(income_statement[0]["Gross Profit"]) / float(income_statement[0]["Revenue"]),
        income_statement[1]["date"]: float(income_statement[1]["Gross Profit"]) / float(
            income_statement[1]["Revenue"])}, "operatingExpenses": {
        income_statement[0]["date"]: float(income_statement[0]["Operating Expenses"]) / float(
            income_statement[0]["Revenue"]),
        income_statement[1]["date"]: float(income_statement[1]["Operating Expenses"]) / float(
            income_statement[1]["Revenue"])}, "netIncome": {
        income_statement[0]["date"]: float(income_statement[0]["Net Income"]) / float(income_statement[1]["Revenue"]),
        income_statement[1]["date"]: float(income_statement[1]["Operating Expenses"]) / float(
            income_statement[1]["Revenue"])}}
    horizontal_analysis = {
        "cash": {"difference": float(bs[0]["Cash and cash equivalents"]) - float(bs[1]["Cash and cash equivalents"]),
                 "percentChange": (float(bs[0]["Cash and cash equivalents"]) - float(
                     bs[1]["Cash and cash equivalents"])) / (float(bs[0]["Cash and cash equivalents"]))}}
    try:
        horizontal_analysis["inventory"] = {"difference": float(bs[0]["Inventories"]) - float(bs[1]["Inventories"]),"percentChange": (float(bs[0]["Inventories"])- float(bs[1]["Inventories"]))/(float(bs[0]["Inventories"]))}
    except ZeroDivisionError:
        pass

    # for i in range(len(list(dividends.keys)), 0, -1):
    #     if if_date_is_higher(list(dividends.keys)[i], date) == True:



    horizontal_analysis["liabilities"] = {"difference": float(bs[0]["Total current liabilities"])- float(bs[1]["Total current liabilities"]),"percentChange": (float(bs[0]["Total current liabilities"])- float(bs[1]["Total current liabilities"]))/(float(bs[0]["Total current liabilities"]))}
    return {"ratios":ratios, "balanceSheet":bs,"incomeStatement":income_statement, "ratiosPerTime":ratios_per_time,"horizontalAnalysis":horizontal_analysis, "verticalAnalysis":vertical_analysis,
            "dividendsOverTime":list(dividends.values()), "dividendDates":dividends.keys(),"earningsOverTime":list(earnings.values()),"earningsDates":earnings.keys()}



def if_date_is_higher(data_date, user_date): # format = year/month/day YYYY-MM-DD
    if (int)(data_date[0:4]) > (int)(user_date[0:4]):
        return True
    elif (int)(data_date[0:4]) == (int)(user_date[0:4]):
        if (int)(data_date[6:7]) > (int)(user_date[6:7]):
            return True
        elif (int)(data_date[6:7]) == (int)(user_date[6:7]):
            if (int)(data_date[9:10]) > (int)(user_date[9:10]):
                return True
    return False


def getChartData(ticker, date):
    url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart"

    querystring = {"region": "US", "interval": "1d", "symbol": ticker, "range": "5y"}

    headers = {
        'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com",
        'x-rapidapi-key': "de029da414mshfd983737e8556f6p16e5edjsna3da35c5e605"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)



    json_response = response.content

    my_json = json.loads(json_response)


    dates_0 = my_json['chart']['result'][0]['timestamp']
    opens_0 = my_json['chart']['result'][0]['indicators']['quote'][0]['open']
    volumes_0 = my_json['chart']['result'][0]['indicators']['quote'][0]['volume']
    highs_0 = my_json['chart']['result'][0]['indicators']['quote'][0]['high']
    lows_0 = my_json['chart']['result'][0]['indicators']['quote'][0]['low']
    final_dates = []
    final_volumes = []
    final_opens = []
    final_highs = []
    final_lows = []
    for i in range(len(dates_0)):

        acDate = str(datetime.fromtimestamp(dates_0[i]).date())

        if if_date_is_higher(acDate, date):
            break;
        final_dates.append(str(datetime.fromtimestamp(dates_0[i]).date()))
        final_volumes.append(volumes_0[i])
        final_opens.append(opens_0[i])
        final_highs.append(highs_0[i])
        final_lows.append(lows_0[i])




    return final_opens, final_highs, final_lows, final_volumes, final_dates


app = Flask(__name__)

# BEFORE REFERENCING THE API< RUN THIS FILE.
#YOU HAVE TO HAVE THE IEX.py FILE IN THE SAME FOLDER AS THIS ONE

# run on your computer, and see json output: type this:
# curl -v  http://localhost:5000/todo/api/v1.0/data/2020-09-15/twtr



@app.route('/todo/api/v1.0/data/<string:date>/<string:ticker>', methods=['GET'])
def get_data(ticker, date): # returns the high, low, volume, dates  <------- GRAPHABLE -----and ticker, sector, company name,
    [opens, highs, lows, volumes, dates] =  getChartData(ticker, date)

    wb = xlrd.open_workbook("stocks.xlsx")
    sheet = wb.sheet_by_index(0)

    company_name = ""
    sector = ""
    ticker = ""
    for i in range(6, sheet.nrows, 1):

        if sheet.cell_value(i, 1) == ticker:
            company_name = sheet.cell_value(i, 0)
            sector = sheet.cell_value(i, 5)
            ticker = sheet.cell_value(i, 1)

    data = {}
    vehical_data = {"data": [data]}


    name = 'volume'
    data[name] = volumes
    data['open'] = opens
    data['high'] = highs
    data['low'] = lows
    data['dates'] = dates
    data['ticker'] = ticker
    data['sector'] = sector
    data['company-name'] = company_name




    x =jsonify(vehical_data)
    return build_actual_response(x)




@app.route('/todo/api/v1.0/tickers', methods=['GET'])
def get_ticker_data(): # returns tickers with corresponding company names a nd sectors <----------- 3 ARRAYS about 600 in size each
    wb = xlrd.open_workbook("stocks.xlsx")
    sheet = wb.sheet_by_index(0)




    data = {}
    vehical_data = {"data": [data]}
    tickers = []
    company_names = []
    sectors = []


    for i in range(5, sheet.nrows):

        company_names.append(sheet.cell_value(i, 0))
        tickers.append(sheet.cell_value(i,1))
        sectors.append(sheet.cell_value(i, 5))




    data['ticker'] = tickers
    data['name'] = company_names
    data['sector'] = sectors

    x = jsonify(vehical_data)

    return build_actual_response(x)




@app.route('/todo/api/v1.0/news/<string:date>/<string:ticker>', methods=['GET'])
def get_news(ticker, date): # returns a word cloud with words corresponding to frequency based on ticker and date inputed
    wb = xlrd.open_workbook("stocks.xlsx")
    sheet = wb.sheet_by_index(0)



    company_name = ""
    sector = ""
    for i in range(5, sheet.nrows, 1):

        if sheet.cell_value(i, 1) == ticker.upper():

            company_name = sheet.cell_value(i, 0)
            sector = sheet.cell_value(i, 5)

    freq = get_frq_words(get_articles(company_name, date))

    data = {}
    vehical_data = {"data": [data]}

    data['news-words'] = freq


    x = jsonify(vehical_data)

    return build_actual_response(x)


@app.route('/todo/api/v1.0/twitter/<string:date>/<string:ticker>', methods=['GET'])
def get_twitter1(ticker, date): # This is not final yet
    wb = xlrd.open_workbook("stocks.xlsx")
    sheet = wb.sheet_by_index(0)



    company_name = ""
    sector = ""
    for i in range(5, sheet.nrows, 1):

        if sheet.cell_value(i, 1) == ticker.upper():
            company_name = sheet.cell_value(i, 0)
            sector = sheet.cell_value(i, 5)

    twitts = analyze_tweets(ticker)

    data = {}
    vehical_data = {"data": [data]}

    data['twitter'] = twitts

    x = jsonify(vehical_data)

    return build_actual_response(x)


@app.route('/todo/api/v1.0/random', methods=['GET'])
def send_random(): # send a reandom ticker with corresponding company name and sector, as well as random date
    wb = xlrd.open_workbook("stocks.xlsx")  # CHANGE THIS!!!!!!!
    sheet = wb.sheet_by_index(0)
    ticker = (sheet.cell_value(randint(5, (sheet.nrows)), 1))

    date = (str)(datetime.fromtimestamp(int(randint(1512108000, 1600491600))).date()) # between 2017 and now

    company_name = ""
    sector = ""
    for i in range(5,sheet.nrows,1):

        if sheet.cell_value(i,1) == ticker.upper():
            company_name = sheet.cell_value(i,0)
            sector = sheet.cell_value(i, 5)

    data = {}
    vehical_data = {"data": [data]}

    data['name'] = company_name
    data['sector'] = sector
    data['date'] = date
    data['ticker'] = ticker

    x = jsonify(vehical_data)


    return build_actual_response(x)




@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)




if __name__ == '__main__':
    app.run(debug=True)

    # the default if for building web app because this is a vanilla flask, so its trying to return in http content, it is return in type html.

