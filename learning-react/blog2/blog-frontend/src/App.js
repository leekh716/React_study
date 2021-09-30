import { Helmet } from "react-helmet-async";
import { Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";

const App = () => {
	return (
		<>
			<Helmet>
				<title>kunlee's Blog</title>
			</Helmet>
			<Route component={PostListPage} path={['/@:username', '/']} exact />
			<Route component={LoginPage} path="/login" />
			<Route component={RegisterPage} path="/register" />
			<Route component={WritePage} path="/write" />
			<Route component={PostPage} path="/@:username/:postId" />
		</>
	);
};

export default App;
