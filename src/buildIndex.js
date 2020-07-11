var fs = require('fs');
import { header, buildHead } from '../html'

export const buildIndex = (entries) => {
	const indexPage = `<!DOCTYPE html>
<html>
${buildHead({title: 'schwartz.world'})}
<body>
	${header}
	<main>
		<ul>
			${entries.map(entry => {
				return `<li><a href='${entry.filename}'>${entry.title}</a></li>\n`
			}).join('')}
		</ul>

		<section id="about">
			<p>This site was built using my own static site generator. The content comes from <a href="https://dev.lemmy.ml/c/schwartzworld">my personal Lemmy channel.</a></p>
			<p>
				I spent a lot of energy bookmarking links that I found interesting.
				When I noticed that Lemmy presented an RSS feed for every channel, I decided to use it as a backend.
				Posts are parsed, archived and generated into HTML. Please leave any and all comments on Lemmy.
			</p>
		</section>
	</main>
</body>
</html>
	`
	fs.writeFile(`./dist/index.html`, indexPage, (err) => {
	  if (err) throw err;
	  console.log('Index page built');
	});
}
