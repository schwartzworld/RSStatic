var fs = require('fs');

import axios from 'axios';
import { parseString } from 'xml2js';
import { buildIndex } from './buildIndex';
import { archive } from './archive';
import { buildEntries } from './buildEntries';

const schwartzOnly = (entry) => {
	return entry.author[0].includes('/u/schwartz ')
}


async function getData() {
	const f = await axios.get('https://dev.lemmy.ml/feeds/c/schwartzworld.xml?sort=Hot')
	let entries;

	parseString(f.data, (err, res) => {
		entries = res.rss.channel[0].item.filter(schwartzOnly).map(entry => {
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