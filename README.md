# RSStatic

RSStatic is an attempt to create a blog using a public RSS feed as a backend. 

## What? Why would you do this?

It all started when I decided to leave Reddit. I loved Reddit when I first signed up 10 years ago, but it's lost its charm for me. Reddit is full of bots and astroturfing, and the CEO /u/spez has been shown to be overly sympathetic to the alt-right. Maybe that's a place you want to spend your time, but not me anymore.

I also realized what a waste of time Reddit was, because I would spend like half an hour writing pithy and informative comments, which nobody would read, and even if they did, nobody knew WHO was writing them. That anonymity is nice, but all that writing is lost into the ether. 

Content is still king, and I have to get mine somewhere. If I can't be on Reddit, where to go? [The Orange Site](https://news.ycombinator.com/) fits my interest, and my account is non-anonymous there, but it's not really a discussion site. Facebook is one of the most overtly evil organizations and I killed my account ages ago. TikTok is for young people, which fewer and fewer people accuse me of being.

## I'm bad at Blogging.

I have started so many blogs. It's pathetic. I'm a developer, and I love the feeling of setting up a new blog. But I don't maintain them. I don't sit down and write every day and post it. I thought about setting up a system where I could email my blogposts to an address which would parse them, build the static pages and push them to github, but I'm too lazy and stretched too thin. I'm not good at blogging. I'm good at posting on social media. Coffee is for posters. Always Be Posting!

## Enter [Lemmy](https://dev.lemmy.ml/)

Lemmy is an open-source Reddit alternative with plans to be (federated)[https://en.wikipedia.org/wiki/Federation_(information_technology)]. It has a similar UI and feature-set to Reddit, with a few big additions.

- On Reddit you can post a `self` post which has a title and bottom text OR a link which has a title and a URL. Image posts are just links to images. Lemmy allows all posts to have a title, URL *and* bottom text. This means I could post a link I'm interested in as well as my response to it. This means I can post any kind of content I create (GitHub repos, music, art, prose) as well as my responses to content posted by others.

- Lemmy offers an RSS feed for each community that produces lovely server-generated HTML.

From there the idea was born. I created a [community of my own](https://dev.lemmy.ml/c/schwartzworld) (although this may eventually evolve into my own instance of Lemmy after it gets federated), and started work on this repo. Currently (July 10, 2020) it is very tightly coupled to my own content, but eventually my hope is to extract this into a static site generator that can be used by anybody who wants to use Lemmy (or any other RSS feed) as a backend.

Currently, the I am manually tagging posts in their titles in order to categorize them. `LINK` is for other people's content, `POST` is for original content. More types may come.

## TODOS:

* Configure RSStatic to accept a URL as a param so it can be used with any public RSS feed
* Improve templating to allow users more control over how their content is displayed
* Incorporate SASS into the build process to allow custom stylesheets
* Different templates for POST vs LINK
* Displaying comments on the page would be nice.

## Contribution

Pull requests and issues are encouraged.

## Licensing

RSStatic is licensed under [GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/).