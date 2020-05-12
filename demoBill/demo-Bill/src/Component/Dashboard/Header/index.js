import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import styles from "./styles";

const menuId = "primary-search-account-menu";

const Header = ({
	classes,
	name,
	showSidebar,
	onToggleSidebar,
	mobileOpen,
	setMobileOpen,
}) => {
	const [anchorEl, setanchorEl] = useState(null);
	//const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleProfileMenuOpen = (e) => {
		setanchorEl(e.currentTarget);
	};

	const handleMenuClose = () => {
		setanchorEl(null);
	};

	const renderMenu = () => {
		const isMenuOpen = Boolean(anchorEl);
		return (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				id={menuId}
				keepMounted
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				open={isMenuOpen}
				onClose={handleMenuClose}>
				<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
			</Menu>
		);
	};

	const handleToggleSidebar = () => {
		if (onToggleSidebar) {
			onToggleSidebar(!showSidebar);
			setMobileOpen(!mobileOpen);
		}
	};

	return (
		<AppBar position='fixed' className={classes.appBar}>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='Open drawer'
					onClick={handleToggleSidebar}>
					<MenuIcon />
				</IconButton>
				<Typography className={classes.title} variant='h6' noWrap>
					{name}
				</Typography>
				<div className={classes.grow} />
				<div className={classes.sectionDesktop}>
					<IconButton
						edge='end'
						aria-label='Account of current user'
						aria-controls={menuId}
						aria-haspopup='true'
						onClick={handleProfileMenuOpen}
						color='inherit'>
						<AccountCircle />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
};

Header.propTypes = {
	classes: PropTypes.object,
	name: PropTypes.string,
	showSidebar: PropTypes.bool,
	onToggleSidebar: PropTypes.func,
};

export default withStyles(styles)(Header);
