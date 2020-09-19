import requests
from requests_html import HTMLSession


url = 'https://twitter.com/search?q=tesla%20stock%20since%3A2019-05-01%20until%3A2019-05-07&src=typd'

#https://stackoverflow.com/questions/49023861/trouble-getting-the-trade-price-using-requests-html-library
#https://requests.readthedocs.io/projects/requests-html/en/latest/

try:
    session = HTMLSession()
    response = session.get(url) #gets the page
    response.html.render(sleep=2) #gets a page full of javascript, runs the javascript, waits 2 seconds
    a = response.html.find('span') #now we have an html page, find the span (which contains the tweets and other text)
    for f in a:
        t = f.text
        if len(t) > 20: #you can have either a blacklist and remove text that aren't tweets. I chose to keep all text over 20 charaters in length
            print(f.text)


except requests.exceptions.RequestException as e:
    print(e)
