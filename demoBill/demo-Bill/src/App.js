import React from "react";
import routes from "./Router";
import { Switch, Route, Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Constant/Themes";
import history from "./Common/History";
import Dashboard from "./Component/Dashboard/index";
import Header from "./Component/Dashboard/Header/index";
import SideBar from "./Component/Dashboard/Sidebar/index";

const App = () => {
	const showContentMenu = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}></Route>
				);
			});
		}
		return <Switch>{result}</Switch>;
	};
	return (
		<Router history={history}>
			<ThemeProvider theme={theme}>
				<Dashboard>{showContentMenu(routes)}</Dashboard>
			</ThemeProvider>
		</Router>
	);
};

export default App;
