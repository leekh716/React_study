import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router';
import App from './App';
import path from 'path';
import fs from 'fs';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import PreloadContext from './lib/PreloadContext';
import createSagaMiddleware, { END } from 'redux-saga';

const mainfest = JSON.parse(
	fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf-8')
);

const chunks = Object.keys(mainfest.files)
	.filter(key => /chunk\.js$/.exec(key))
	.map(key => `<script src="${mainfest.files[key]}"></script>`)
	.join('');

function createPage(root, stateScript) {
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

const serverRender = async (req, res, next) => {
	const context = {};
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		applyMiddleware(thunk, sagaMiddleware)
	);
	const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

	const preloadContext = {
		done: false,
		promises: []
	};
	const jsx = (
		<PreloadContext.Provider value={preloadContext}>
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					<App />
				</StaticRouter>
			</Provider>
		</PreloadContext.Provider>
	);

	ReactDOMServer.renderToStaticMarkup(jsx);
	store.dispatch(END);
	try {
		await sagaPromise;
		await Promise.all(preloadContext.promises);
	} catch (e) {
		return res.status(500);
	}
	preloadContext.done = true;
	const root = ReactDOMServer.renderToString(jsx);
	const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
	const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`;
	res.send(createPage(root, stateScript));
};

const serve = express.static(path.resolve('./build'), {
	index: false
})

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
	console.log('Running on http://localhost:5000');
});
