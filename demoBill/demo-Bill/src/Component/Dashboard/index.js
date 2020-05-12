import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import cn from "classnames";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./styles";
import * as uiActions from "../../Action/Ui";

const Dashboard = ({
	children,
	classes,
	name,
	showSidebar,
	uiActionCreators,
}) => {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleToggleSidebar = (value) => {
		const { showSidebar, hideSidebar } = uiActionCreators;
		if (value === true) {
			showSidebar();
		} else {
			hideSidebar();
		}
	};

	return (
		<div className={classes.root}>
			<Header
				name={name}
				mobileOpen={mobileOpen}
				setMobileOpen={setMobileOpen}
				showSidebar={showSidebar}
				onToggleSidebar={handleToggleSidebar}
			/>
			<div className={classes.wrapper}>
				<Sidebar
					mobileOpen={mobileOpen}
					setMobileOpen={setMobileOpen}
					showSidebar={showSidebar}
					onToggleSidebar={handleToggleSidebar}
				/>
				<div className={classes.content}>
					<div className={classes.toolbar} />
					{children}
				</div>
			</div>
		</div>
	);
};

Dashboard.propTypes = {
	children: PropTypes.object,
	classes: PropTypes.object,
	name: PropTypes.string,
	showSidebar: PropTypes.bool,
	uiActionCreators: PropTypes.shape({
		showSidebar: PropTypes.func,
		hideSidebar: PropTypes.func,
	}),
};

const mapStateToProps = (state) => {
	return {
		showSidebar: state.ui.showSidebar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		uiActionCreators: bindActionCreators(uiActions, dispatch),
	};
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
