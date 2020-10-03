from ibm_watson import ToneAnalyzerV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
import asyncio
import random

authenticator = IAMAuthenticator('0TzdiYxO3LQfYzOJyLy2pBThmH6x8f9IAYHs3-p3g_sP')
tone_analyzer = ToneAnalyzerV3(
    version='2017-09-21',
    authenticator=authenticator
)


tone_analyzer.set_service_url('https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/dd65f5dc-0904-4dfa-b66e-2e7c67fb5c1a')

import requests
from requests_html import HTMLSession
from datetime import datetime
from datetime import timedelta
import pandas as pd
# Import the Twython class
from twython import Twython
import json

url = 'https://twitter.com/search?q=tesla%20stock%20since%3A2019-05-01%20until%3A2019-05-07&src=typd'

#https://stackoverflow.com/questions/49023861/trouble-getting-the-trade-price-using-requests-html-library
#https://requests.readthedocs.io/projects/requests-html/en/latest/

def get_tweets(q):
    tweets = []
    try:
        session = HTMLSession()
        today = datetime.today().strftime("%Y-%m-%d")
        five_years_before = (datetime.today() - timedelta(days=5)).strftime("%Y-%m-%d")
        response = session.get("https://twitter.com/search?q=" + q + "%20since%3A"+ five_years_before +"%20until%3A" + today +"&src=typd")  # gets the page

        asyncio.set_event_loop(asyncio.SelectorEventLoop())
        asyncio.get_event_loop().run_until_complete(response.html.render(sleep=5))

        a = response.html.find(
            'span')  # now we have an html page, find the span (which contains the tweets and other text)
        for f in a:
            t = f.text
            if len(t) > 20:  # you can have either a blacklist and remove text that aren't tweets. I chose to keep all text over 20 charaters in length
                if t != "Don’t miss what’s happening" and t != 'People on Twitter are the first to know.':
                    tweets.append(t)

    except requests.exceptions.RequestException as e:
        print(e)

    return tweets

def get_tweets2(q):
    credentials = {}
    credentials['CONSUMER_KEY'] = 'zvwjnnMbfxGdLitapM6qxhqSp'
    credentials['CONSUMER_SECRET'] = 'dhhimRFX7Y4Ehl1TSzpw1yMcmDYg4xyD7T1aa1iVugaUlZBDjs'
    credentials['ACCESS_TOKEN'] = '845432825511886849-fVUCcvXWRHpSEZT1trU7CQJDQzLSKJD'
    credentials['ACCESS_SECRET'] = 'zhanhVc6G4pqUBv0bAFhjfeUBZevXNYPW5lNJRSQodAuu'

    python_tweets = Twython(credentials['CONSUMER_KEY'], credentials['CONSUMER_SECRET'])

    print(q)
    # Create our query
    query = {'q': q,
             # 'result_type': 'popular',
             'count': 10,
             'lang': 'en'
             }

    # Search tweets
    # dict_ = {'user': [], 'date': [], 'text': [], 'favorite_count': []}

    text = []

    for status in python_tweets.search(**query)['statuses']:
        # dict_['user'].append(status['user']['screen_name'])
        # dict_['date'].append(status['created_at'])
        # dict_['text'].append(status['text'])
        text.append(status['text'])
        # dict_['favorite_count'].append(status['favorite_count'])

    print(text)

    return text

def add_dict(dict_one, key):
    if key not in dict_one.keys():
        dict_one[key] = 0
    dict_one[key] += 1
    return dict_one

def analyze_tweets(company_name):
    tones = {}
    tweets = get_tweets2(company_name + " stock")

    if tweets == []:
        tones['anger'] = random.random()
        tones['fear'] = random.random()
        tones['joy'] = random.random()
        tones['analytical'] = random.random()
        tones['confident'] = random.random()

        s = 0
        for a in tones:
            s += tones[a]

        for a in tones:
            tones[a] /= s

        return tones

    text = ""

    for tweet in tweets:
        text += tweet + "."

    print(text)

    tone_analysis = tone_analyzer.tone(
        {'text': text},
        content_type='application/json'
    ).get_result()

    print(tone_analysis)

    if "sentences_tone" in tone_analysis:

        for sentence in tone_analysis["sentences_tone"]:
            for tone in sentence["tones"]:
                if tone["tone_id"] in tones.keys():
                    tones[tone["tone_id"]] += tone["score"]
                else:
                    tones[tone["tone_id"]] = tone["score"]
        s = 0
        for a in tones:
            s += tones[a]

        for a in tones:
            tones[a] /= s

        return tones
    else:
        tones['anger'] = random.random()
        tones['fear'] = random.random()
        tones['joy'] = random.random()
        tones['analytical'] = random.random()
        tones['confident'] = random.random()

        s = 0
        for a in tones:
            s += tones[a]

        for a in tones:
            tones[a] /= s


    return tones

