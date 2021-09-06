import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router';
import App from './App';
import path from 'path';
import fs from 'fs';

const mainfest = JSON.parse(
	fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf-8')
);

const chunks = Object.keys(mainfest.files)
	.filter(key => /chunk\.js$/.exec(key))
	.map(key => `<script src="${mainfest.files[key]}"></script>`)
	.join('');

function createPage(root) {
	return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#000000" />
			<title>React App</title>
			<link href="${mainfest.files['main.css']}" rel="stylesheet" />
		</head>
		<body>
			<noscript>You need to enable JavaScript to run this app.</noscript>
			<div id="root">
				${root}
			</div>
			<script src="${mainfest.files['runtime-main.js']}"></script>
			${chunks}
			<script src="${mainfest.files['main.js']}"></script>
		</body>
		</html>
	`;
}

const app = express();

const serverRender = (req, res, next) => {
	const context = {};
	const jsx = (
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);
	const root = ReactDOMServer.renderToString(jsx);
	res.send(createPage(root));
};

const serve = express.static(path.resolve('./build'), {
	index: false
})

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
	console.log('Running on http://localhost:5000');
});
