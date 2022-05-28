import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	toolBarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em",
	},
	logo: {
		height: "7em",
	},
	tabContainer: {
		margin: "auto",
		marginRight: 0,
	},
	tab: {
		...theme.typography.tab,
	},
	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px",
	},
	btnLogo: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
}));

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

export default function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const history = useHistory();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleNavToHome = () => {
		setValue(0);
		history.push("/");
	};

	const handleValueOnReload = () => {
		const path = history.location.pathname;

		switch (path) {
			case "/":
				setValue(0);
				break;
			case "/games":
				setValue(1);
				break;
			case "/histories":
				setValue(2);
				break;
			case "/about":
				setValue(3);
				break;
			case "/contact":
				setValue(4);
				break;

			default:
				break;
		}
	};

	useEffect(() => {
		handleValueOnReload();
	});

	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar position='fixed'>
					<Toolbar disableGutters>
						<Button
							className={classes.btnLogo}
							onClick={handleNavToHome}
							disableRipple
						>
							<img className={classes.logo} src={logo} alt='testLogo' />
						</Button>
						<Tabs
							className={classes.tabContainer}
							value={value}
							onChange={handleChange}
							indicatorColor='primary'
						>
							<Tab
								className={classes.tab}
								component={Link}
								to='/'
								label='Home'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/games'
								label='Games'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/histories'
								label='Histories'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/about'
								label='About us'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/contact'
								label='Contact'
							/>
						</Tabs>
						{/* <IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' className={classes.title}>
							News
						</Typography>
					<Button color='inherit'>Login</Button> */}
						<Button
							variant='contained'
							color='secondary'
							className={classes.button}
						>
							Test Button
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolBarMargin}></div>
		</React.Fragment>
	);
}
