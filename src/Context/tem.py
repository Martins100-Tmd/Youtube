# import urllib.request

# url = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0&part=Snippet&chart=mostpopular&maxResult=50&regionCode=US"
# response = urllib.request.urlopen(url)
# webContent = response.read()

# with open("./vi.json", mode="wb") as file:
#     file.write(webContent)

# with open("./vi.json", "r+") as file:
#     print(file.read())


# while
import json


import requests


def fetchYoutubeUrl():
    All = []
    r = requests.get(
        "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0&part=Snippet&chart=mostpopular&maxResult=50&regionCode=US"
    )
    json_data = r.json()

    nextPageToken = json_data.get("nextPageToken")
    print(nextPageToken)
    for i in json_data.get("items"):
        All.append(i)
    while nextPageToken:
        resq = requests.get(
            "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0&part=Snippet&chart=mostpopular&maxResult=50&regionCode=US&pageToken="
            + nextPageToken
        )
        jsonFormatted = resq.json()
        nextPageToken = jsonFormatted.get("nextPageToken")
        for i in jsonFormatted.get("items"):
            All.append(i)
    return All


print(fetchYoutubeUrl())
