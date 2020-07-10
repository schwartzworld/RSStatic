var fs = require('fs');

export const buildIndex = (entries) => {
	const indexPage = `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>schwartz.world</title>
</head>
<body>
	<h1>Blog and Things I Find Interesting</h1>
	<ul>
		${entries.map(entry => {
			return `<li><a href='${entry.filename}'>${entry.title}</a></li>\n`
		}).join('')}
	</ul>
</body>
</html>
	`
	fs.writeFile(`./build/index.html`, indexPage, (err) => {
	  if (err) throw err;
	  console.log('Index page built');
	});
}