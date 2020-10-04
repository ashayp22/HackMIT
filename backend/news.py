import requests
import json
from bs4 import BeautifulSoup
from collections import Counter
from stop_words import get_stop_words
import datetime
# https://realpython.com/beautiful-soup-web-scraper-python/
# https://www.nytimes.com/2019/12/30/arts/television/netflix-amazon-stan-movies-tv-australia-january.html?auth=login-google
def get_articles(company_name, date):
    # try:

    converted_date = datetime.datetime.strptime(date, '%Y-%m-%d').date()

    begin = str(converted_date - datetime.timedelta(180))
    end = date

    x = requests.get(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=Financial&q=' + company_name +'&begin_date='+begin+'&end_date='+end+'&api-key=vA4veDbzOGiQffPxBUYMq1EEX0YJT7X7').json()
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
    # except:
    #     print("error")
    #     return []


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
    return most_occur_final