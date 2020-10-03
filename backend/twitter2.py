# import json
#
# # Enter your keys/secrets as strings in the following fields
# credentials = {}
# credentials['CONSUMER_KEY'] = 'zvwjnnMbfxGdLitapM6qxhqSp'
# credentials['CONSUMER_SECRET'] = 'dhhimRFX7Y4Ehl1TSzpw1yMcmDYg4xyD7T1aa1iVugaUlZBDjs'
# credentials['ACCESS_TOKEN'] = '845432825511886849-fVUCcvXWRHpSEZT1trU7CQJDQzLSKJD'
# credentials['ACCESS_SECRET'] = 'zhanhVc6G4pqUBv0bAFhjfeUBZevXNYPW5lNJRSQodAuu'
#
# # Save the credentials object to file
# with open("twitter_credentials.json", "w") as file:
#     json.dump(credentials, file)

import pandas as pd
# Import the Twython class
from twython import Twython
import json

# Load credentials from json file
with open("twitter_credentials.json", "r") as file:
    creds = json.load(file)

# Instantiate an object
python_tweets = Twython(creds['CONSUMER_KEY'], creds['CONSUMER_SECRET'])

# Create our query
query = {'q': 'Tesla',
        'result_type': 'popular',
        'count': 10,
        'lang': 'en',
        }

# Search tweets
dict_ = {'user': [], 'date': [], 'text': [], 'favorite_count': []}

text = []

for status in python_tweets.search(**query)['statuses']:
    dict_['user'].append(status['user']['screen_name'])
    dict_['date'].append(status['created_at'])
    dict_['text'].append(status['text'])
    text.append(status['text'])
    dict_['favorite_count'].append(status['favorite_count'])


print(text)

# Structure data in a pandas DataFrame for easier manipulation
df = pd.DataFrame(dict_)
df.sort_values(by='favorite_count', inplace=True, ascending=False)
df.head(5)

# print(df)


