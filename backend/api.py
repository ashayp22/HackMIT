from flask import Flask, jsonify
from flask import abort
from flask import make_response
import json
import requests
import json
import requests
import json


TOKEN = 'pk_c127b96a2806454e912666398b0de325'

def getPeers(ticker):
    x = requests.get("https://cloud.iexapis.com/stable/stock/" + ticker + "/peers?token=" + TOKEN)

    json_response = x.content
    print(json_response)
    return json_response

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

def get5yrData(ticker, date): # retruns an array of volumes from previous to date, opens(same format), highs, lows, and then returns date(string format)
    x = requests.get("https://cloud.iexapis.com/stable/stock/"+ ticker+"/chart/1m?token="+ TOKEN)

    json_response = x.content
    print(json_response)
    my_json = json.loads(json_response)


    volumes = []
    opens = []
    highs = []
    lows = []
    date = my_json[len(my_json)-1]['date']
    for i in range(len(my_json)):

        if if_date_is_higher(my_json[len(my_json)-1]['date'], date):
            break;

        volumes.append(my_json[i]['volume'])
        opens.append(my_json[i]['open'])
        highs.append(my_json[i]['high'])
        lows.append(my_json[i]['low'])

    return volumes, opens, highs, lows,  date



def getDividend(ticker, date):
    x = requests.get("https://cloud.iexapis.com/stable/stock/" + ticker + "/dividends/1y?token=" + TOKEN)
    json_response = x.content
    print(json_response)
    my_json = json.loads(json_response)

    dividends = []
    dates =[]
    for i in range(len(my_json)):
        dividends.append(my_json[i]['amount'])
        dates.append(my_json[i]['exDate'])

        if if_date_is_higher(my_json[i]['exDate'], date):
            break;

    return dividends, dates


def getEarnings(ticker, date):
    x = requests.get("https://cloud.iexapis.com/stable/stock/" + ticker + "/earnings/last=4?token=" + TOKEN)
    json_response = x.content

    my_json = json.loads(json_response)
    print(my_json['earnings'][0]['actualEPS'])
    earnings = []
    earnings.append(my_json['earnings'][0]['actualEPS'])
    # for i in range(len(my_json)):
    #     if if_date_is_higher(my_json[i]['earnings']['EPSReportDate'], date):
    #         break;
    #
    #     earnings.append(my_json[i]['earnings']['actualEPS'])

    return earnings




app = Flask(__name__)

# BEFORE REFERENCING THE API< RUN THIS FILE.
#YOU HAVE TO HAVE THE IEX.py FILE IN THE SAME FOLDER AS THIS ONE

# run on your computer, and see json output: type this:
# curl -v  http://localhost:5000/todo/api/v1.0/dividend/2020-09-15/twtri

@app.route('/todo/api/v1.0/earning/<string:date>/<string:ticker>', methods=['GET'])
def get_earnings(ticker, date):
    [dividends, dates] = getEarnings(ticker, date)

    data = {}
    vehical_data = {"data": [data]}

    name = 'earnings'
    data[name] = dividends
    data['date'] = dates
    x =json.dumps(vehical_data)

    return x


@app.route('/todo/api/v1.0/dividend/<string:date>/<string:ticker>', methods=['GET'])
def get_dividend(ticker, date):
    [dividends, dates] = getDividend(ticker, date)

    data = {}
    vehical_data = {"data": [data]}

    name = 'dividends'
    data[name] = dividends
    data['date'] = dates
    x =json.dumps(vehical_data)

    return x


@app.route('/todo/api/v1.0/data/<string:date>/<string:ticker>', methods=['GET'])
def get_data(ticker, date):
    [volumes, opens, highs, lows, date] = get5yrData(ticker, date)
    #

    data = {}
    vehical_data = {"data": [data]}



    name = 'volume'
    data[name] = volumes
    data['open'] = opens
    data['high'] = highs
    data['low'] = lows
    data['date'] = date

    x =json.dumps(vehical_data)

    response = jsonify(x)



    return x


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=True)

    # the default if for building web app because this is a vanilla flask, so its trying to return in http content, it is return in type html.

