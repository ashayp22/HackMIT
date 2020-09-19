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




# {"date":"2015-09-21","uClose":115.21,"uOpen":113.67,"uHigh":115.37,"uLow":113.66,"uVolume":50221965,"close":28.8,"open":28.42,"high":28.84,"low":28.42,"volume":200887860,"currency":"","change":0,"changePercent":0,"label":"Sep 21, 15","changeOverTime":0}