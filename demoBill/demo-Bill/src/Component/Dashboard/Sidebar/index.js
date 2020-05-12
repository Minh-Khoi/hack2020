import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import routes from "../../../Router";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const Sidebar = ({
	classes,
	showSidebar,
	mobileOpen,
	setMobileOpen,
	onToggleSidebar,
}) => {
	const toggleDrawer = (value) => {
		if (onToggleSidebar) {
			onToggleSidebar(value);
			setMobileOpen(!mobileOpen);
		}
	};
	const theme = useTheme();

	const renderList = () => {
		let xhtml = null;
		xhtml = (
			<div>
				<List component='div'>
					{routes.map((item) => {
						return (
							<NavLink
								key={item.path}
								to={item.path}
								exact={item.exact}
								className={classes.menuLink}
								activeClassName={classes.menuLinkActive}>
								<ListItem className={classes.menuItem} button>
									{item.name}
								</ListItem>
							</NavLink>
						);
					})}
				</List>
			</div>
		);
		return xhtml;
	};

	return (
		<nav className={classes.drawer}>
			{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
			<Hidden smUp implementation='css'>
				<Drawer
					variant='temporary'
					anchor={theme.direction === "rtl" ? "right" : "left"}
					open={mobileOpen}
					onClose={() => toggleDrawer(false)}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}>
					<IconButton
						onClick={() => toggleDrawer(false)}
						className={classes.closeMenuButton}>
						<CloseIcon />
					</IconButton>
					{renderList()}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation='css'>
				<Drawer
					className={classes.drawer}
					variant='permanent'
					classes={{
						paper: classes.drawerPaper,
					}}>
					<div className={classes.toolbar} />
					{renderList()}
				</Drawer>
			</Hidden>
		</nav>
	);
};

Sidebar.propTypes = {
	classes: PropTypes.object,
	showSidebar: PropTypes.bool,
	onToggleSidebar: PropTypes.func,
};

export default withStyles(styles)(Sidebar);
