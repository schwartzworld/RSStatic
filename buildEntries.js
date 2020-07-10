var fs = require('fs');

export const buildEntries = (entries) => {
	entries.forEach(entry => {
		const {filename} = entry;
		const page = `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>${entry.title}</title>
</head>
<body>
	<h1>${entry.title}</h1>
	<a href="${entry.link}">Original Link</a>
</body>
</html>
	`
		fs.writeFile(`./build${filename}`, page, (err) => {
		  if (err) throw err;
		});
	})
	console.log(`${entries.length} pages created`)
}