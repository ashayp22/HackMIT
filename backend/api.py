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
from twitter import *


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


def calculate_ratios(ticker):
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
    vertical_analysis = {}
    vertical_analysis["grossProfit"] = {income_statement[0]["date"]: float(income_statement[0]["Gross Profit"])/float(income_statement[0]["Revenue"]),income_statement[1]["date"]: float(income_statement[1]["Gross Profit"])/float(income_statement[1]["Revenue"])}
    vertical_analysis["operatingExpenses"] = {income_statement[0]["date"]: float(income_statement[0]["Operating Expenses"]) / float(income_statement[0]["Revenue"]), income_statement[1]["date"]: float(income_statement[1]["Operating Expenses"]) / float(income_statement[1]["Revenue"])}
    vertical_analysis["netIncome"] = {income_statement[0]["date"]: float(income_statement[0]["Net Income"]) / float(income_statement[1]["Revenue"]),income_statement[1]["date"]: float(income_statement[1]["Operating Expenses"]) / float(income_statement[1]["Revenue"])}
    horizontal_analysis = {}
    horizontal_analysis["cash"] = {"difference": float(bs[0]["Cash and cash equivalents"])- float(bs[1]["Cash and cash equivalents"]),"percentChange": (float(bs[0]["Cash and cash equivalents"])- float(bs[1]["Cash and cash equivalents"]))/(float(bs[0]["Cash and cash equivalents"]))}
    horizontal_analysis["inventory"] = {"difference": float(bs[0]["Inventories"])- float(bs[1]["Inventories"]),"percentChange": (float(bs[0]["Inventories"])- float(bs[1]["Inventories"]))/(float(bs[0]["Inventories"]))}
    horizontal_analysis["liabilities"] = {"difference": float(bs[0]["Total current liabilities"])- float(bs[1]["Total current liabilities"]),"percentChange": (float(bs[0]["Total current liabilities"])- float(bs[1]["Total current liabilities"]))/(float(bs[0]["Total current liabilities"]))}



    return {"ratios":ratios, "balanceSheet":bs,"incomeStatement":income_statement, "ratiosPerTime":ratios_per_time,"horizontalAnalysis":horizontal_analysis, "verticalAnalysis":vertical_analysis}



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

    # print(response.text)

    json_response = response.content
    # print(json_response)
    my_json = json.loads(json_response)
    # print(len(my_json['chart']['result'][0]['timestamp']))
    # print((my_json['chart']['result'][0]['timestamp']))

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
    print(len(highs_0))
    print(len(final_highs))

    return final_opens, final_highs, final_lows, final_volumes, final_dates


app = Flask(__name__)

# BEFORE REFERENCING THE API< RUN THIS FILE.
#YOU HAVE TO HAVE THE IEX.py FILE IN THE SAME FOLDER AS THIS ONE

# run on your computer, and see json output: type this:
# curl -v  http://localhost:5000/todo/api/v1.0/data/2020-09-15/twtr

# @app.route('/todo/api/v1.0/earning/<string:date>/<string:ticker>', methods=['GET'])
# def get_earnings(ticker, date):
#     [earnings, dates] = getEarnings(ticker, date)
#
#     data = {}
#     vehical_data = {"data": [data]}
#
#     name = 'earnings'
#     data[name] = earnings
#     x =json.dumps(vehical_data)
#
#     return earnings

#
# @app.route('/todo/api/v1.0/dividend/<string:date>/<string:ticker>', methods=['GET'])
# def get_dividend(ticker, date):
#     [dividends, dates] = getDividend(ticker, date)
#
#     data = {}
#     vehical_data = {"data": [data]}
#
#     name = 'dividends'
#     data[name] = dividends
#     x =vehical_data
#
#     return dividends


@app.route('/todo/api/v1.0/data/<string:date>/<string:ticker>', methods=['GET'])
def get_data(ticker, date):
    [opens, highs, lows, volumes, dates] = getChartData(ticker, date)

    wb = xlrd.open_workbook("stocks.xlsx")  # CHANGE THIS!!!!!!!
    sheet = wb.sheet_by_index(0)

    company_name = ""
    for i in range(6, sheet.nrows, 1):

        if sheet.cell_value(i, 1) == ticker:
            company_name = sheet.cell_value(i, 0)

    data = {}
    vehical_data = {"data": [data]}



    name = 'volume'
    data[name] = volumes
    data['open'] = opens
    data['high'] = highs
    data['low'] = lows
    data['dates'] = dates
    data['twitter'] = analyze_tweets(company_name)


    x =jsonify(vehical_data)
    return build_actual_response(x)


@app.route('/todo/api/v1.0/data', methods=['GET'])
def get_data_random():
    wb = xlrd.open_workbook("stocks.xlsx") # CHANGE THIS!!!!!!!
    sheet = wb.sheet_by_index(0)
    ticker = (sheet.cell_value(randint(6, (sheet.nrows)), 1))

    date = (str)(datetime.fromtimestamp(int(randint(1512108000, 1600491600))).date()) # between 2017 and now

    company_name = ""
    sector = ""
    for i in range(6,sheet.nrows,1):

        if sheet.cell_value(i,1) == ticker:
            company_name = sheet.cell_value(i,0)
            sector = sheet.cell_value(i, 5)



    [opens, highs, lows, volumes, dates] = getChartData(ticker, date)
    #

    data = {}
    vehical_data = {"data": [data]}

    data['ticker'] = ticker
    data['company-name'] = company_name
    data['sector'] = sector
    name = 'volume'
    data[name] = volumes
    data['open'] = opens
    data['high'] = highs
    data['low'] = lows
    data['dates'] = dates
    # data['twitter'] = analyze_tweets(company_name)
     # data['dividend'] = get_dividend(ticker, date)
        # data['earnings'] = get_earnings(ticker, date)
    # data['ratioPerTime'] = calculate_ratios(ticker)["ratiosPerTime"]

    x = jsonify(vehical_data)



    return build_actual_response(x)

@app.route('/todo/api/v1.0/tickers', methods=['GET'])
def get_ticker_data():
    wb = xlrd.open_workbook("stocks.xlsx")
    sheet = wb.sheet_by_index(0)
    ticker = (sheet.cell_value(randint(6, (sheet.nrows)), 1))


    data = {}
    vehical_data = {"data": [data]}
    tickers = []
    company_names = []
    sectors = []


    for i in range(6, sheet.nrows, 1):
        company_names.append(sheet.cell_value(i, 1))
        ticker.append(sheet.cell_value(i,0))
        sectors.append(sheet.cell_value(i, 5))



    data['ticker'] = ticker
    data['name'] = company_names
    data['sector'] = sectors

    x = jsonify(vehical_data)

    return build_actual_response(x)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=True)

    # the default if for building web app because this is a vanilla flask, so its trying to return in http content, it is return in type html.