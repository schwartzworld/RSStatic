var fs = require('fs');
import { header, buildHead } from './html'

export const buildEntries = (entries) => {
	entries.forEach(entry => {
		const {filename} = entry;
		const page = `<!DOCTYPE html>
<html>
<body>
	${buildHead({title: entry.title})}
	${header}
	<main>
		<section id="link-info">
			<a href="${entry.link}"><h2>${entry.title}</h2></a>
		</section>

		<section id="post">
			${entry.body}
		</section>

		<div>
			<a href='/'>
				<small>
					Back to homepage
				</small>
			</a>
		</div>
	</main>

</body>
</html>
	`
		fs.writeFile(`./dist${filename}`, page, (err) => {
		  if (err) throw err;
		});
	})
	console.log(`${entries.length} pages created`)
}
