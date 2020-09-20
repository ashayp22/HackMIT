import requests
from datetime import datetime
import json
import xlrd
from random import randint


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

def historicl():
    url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data"

    querystring = {"region": "US", "symbol": "AMRN"}

    headers = {
        'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com",
        'x-rapidapi-key': "de029da414mshfd983737e8556f6p16e5edjsna3da35c5e605"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    print(response.text)

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
        final_dates.append(datetime.fromtimestamp(dates_0[i]))
        final_volumes.append(volumes_0[i])
        final_opens.append(opens_0[i])
        final_highs.append(highs_0[i])
        final_lows.append(lows_0[i])
    print(len(highs_0))
    print(len(final_highs))

    return final_opens, final_highs, final_lows, final_volumes, final_dates



wb = xlrd.open_workbook("/Users/labdhijain/PycharmProjects/HackMIT/HackMIT/backend/stocks.xlsx")
sheet = wb.sheet_by_index(0)
print(sheet.cell_value(randint(6, (sheet.nrows)), 1))

# Extracting number of rows




