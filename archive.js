var fs = require('fs');

export const archive = (entries) => {
	fs.writeFile(`./archive/${Date.now()}.js`, JSON.stringify(entries), (err) => {
	  if (err) throw err;
	  console.log(`${entries.length} archived`)
	});
}