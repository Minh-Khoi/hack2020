const styles = (theme) => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: 240,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: 240,
		// maxWidth: 240,
		// zIndex: 10,
		// height: "100%",
		// position: "relative",
	},
	menuLink: {
		textDecoration: "none",
		color: theme.color.defaultTextColor,
	},
	menuLinkActive: {
		"&>div": {
			backgroundColor: theme.color.hover,
		},
	},
	closeMenuButton: {
		marginRight: "auto",
		marginLeft: 0,
	},
	toolbar: theme.mixins.toolbar,
});

export default styles;
