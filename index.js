var fs = require('fs');

import axios from 'axios';
import { parseString } from 'xml2js';
import { buildIndex } from './src/buildIndex';
import { archive } from './src/archive';
import { buildEntries } from './src/buildEntries';
import { buildCSS } from './src/buildCSS';

require('dotenv').config()

const schwartzOnly = (entry) => {
	return entry.author[0].includes(`/u/${process.env.USERNAME} `)
}


async function getData() {
	const feed = await axios.get(process.env.RSS_FEED)
	let entries;
	let mostRecentArchive;

	fs.readdir('./archive', function(err, items) {
		if (err) console.log(err)
		const mostRecent = items[items.length - 1];
		fs.readFile(`./archive/${mostRecent}`, 'utf8', function(e, data) {
			if (e) return console.error(e);
			mostRecentArchive = data;
		})
	});
	// compare most recent archive with current response. Don't update if they're the same

	parseString(feed.data, (err, res) => {
		const { item } = res.rss.channel[0]
		entries = item.filter(schwartzOnly).map(entry => {
			const newEntry = {}
			newEntry.title = entry.title;

			const date = new Date(entry.pubDate[0]);
			newEntry.filename = `/${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getTime()}.html`;
			newEntry.link = entry.link;
			newEntry.permalink = entry.comments;
			newEntry.body = entry.description;
			newEntry.type = entry.title[0].split(': ')[0]
			return newEntry;
		});
	});

	buildCSS()
	buildEntries(entries)
	buildIndex(entries)
	archive(entries)
}

/*
 {
    title: [ 'Rich Tables in the Terminal' ],
    link: [ 'https://news.ycombinator.com/item?id=23738072' ],
    description: [
      'submitted by <a href="https://dev.lemmy.ml/u/schwartz">schwartz</a> to <a href="https://dev.lemmy.ml/c/schwartzworld">schwartzworld</a><br>2 points | <a href="https://dev.lemmy.ml/post/36950">0 comments</a>'
    ],
    author: [
      '/u/schwartz <a href="https://dev.lemmy.ml/u/schwartz">(link)</a>'
    ],
    category: [ [Object] ],
    comments: [ 'https://dev.lemmy.ml/post/36950' ],
    guid: [ 'https://dev.lemmy.ml/post/36950' ],
    pubDate: [ 'Mon, 06 Jul 2020 00:59:29 +0000' ]
  }
*/

getData()
