from flask import Flask, jsonify
from flask import abort
from flask import make_response
from IEX import *

app = Flask(__name__)

# BEFORE REFERENCING THE API< RUN THIS FILE.
#YOU HAVE TO HAVE THE IEX.py FILE IN THE SAME FOLDER AS THIS ONE

# run on your computer, and see json output: type this:
# curl -v  http://localhost:5000/todo/api/v1.0/dividend/2020-09-15/twtr

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
