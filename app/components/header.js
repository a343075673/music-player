import React from 'react';
import './header.css';

let Header = React.createClass({
	render() {
		return (
			<div className="components-header row">
			<img src="/static/images/logo.png" width = '40' alt="" className="-col-auto"/>
			<h1 className="caption">react music player</h1>
			</div>
		);
	}
});

export default Header;
