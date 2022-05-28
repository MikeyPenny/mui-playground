import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Histories from "./pages/Histories";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Switch>
				<Route path='/games' component={Games} />
				<Route path='/histories' component={Histories} />
				<Route path='/about' component={AboutUs} />
				<Route path='/contact' component={Contact} />
				<Route path='/' exact component={Home} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
