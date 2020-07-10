export const header = "<header><h1>Blog and Things I Find Interesting</h1></header>"

export const buildHead = ({ title }) => {
	return `<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>${title}</title>
	<link rel="stylesheet" type="text/css" href="./css/index.css">
</head>`
}