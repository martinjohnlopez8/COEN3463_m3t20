import React from "react";

export class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#"><span>Lumino</span>Admin</a>
						<ul className="user-menu">
							<li className="dropdown pull-right">
								<a href="#" className="dropdown-toggle">User <span class="caret"></span></a>
								<ul className="dropdown-menu" role="menu">
									<li><a href="#"><svg className="glyph stroked male-user"></svg> Profile</a></li>
									<li><a href="#"><svg className="glyph stroked gear"></svg> Settings</a></li>
									<li><a href="#"><svg className="glyph stroked cancel"></svg> Logout</a></li>
								</ul>
							</li>
						</ul>
					</div>					
				</div>
			</nav>
		);
	}
}