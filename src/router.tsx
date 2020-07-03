import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Todo = lazy(() => import('./components/todo/Todo'));

const AppRouter = () => (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/todo" component={Todo} />
			</Switch>
		</Suspense>
	</Router>
);

export default AppRouter;
