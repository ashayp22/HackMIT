import requests
from stop_words import get_stop_words
import json
#
#



def word_count(wordstring):
    stop_words = get_stop_words('en')
    wordlist = wordstring.split()
    non_stops = {}
    wordfreq = []
    for w in wordlist:
        if w not in stop_words:
            wordfreq.append(wordlist.count(w))
            non_stops = wordlist.count(w)
    return wordfreq, wordlist


def get_article_wordcount(company_name):
    news_api_key = "0a51475b9e08417c869c09e0e928b086"
    news_search = requests.get(
        "https://newsapi.org/v2/everything?q=" + company_name + "&fq=news_desk:(\"Finance\")" + "&apiKey=" + news_api_key).json()
    print(news_search)
    articles = news_search["articles"]
    article_one = articles[0]["content"]
    return word_count(article_one)


print(get_article_wordcount("Apple"))
# def word_count(wordstring):
#     stop_words = get_stop_words('en')
#     wordlist = wordstring.split()
#     non_stops = {}
#     wordfreq = []
#     for w in wordlist:
#         if w not in stop_words:
#             wordfreq.append(wordlist.count(w))
#             non_stops = wordlist.count(w)
#     return non_stops
#
#
#
# def get_article_wordcount(company_name, date):
#
#     x = requests.get(
#         'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=vA4veDbzOGiQffPxBUYMq1EEX0YJT7X7')
#     # print(x.status_code)
#     print(x.content)
#     json_response = x.content
#     # print(json_response[0])
#     my_json = json.loads(json_response)
#     # print(my_json)
#     # article_one = my_json['response']["docs"][0]['lead_paragraph']
#
#
#     # return word_count(article_one)
#
# print(get_article_wordcount("aapl", "2020-03-12"))
