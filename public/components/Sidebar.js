import React from "react";

export class Home extends React.Component {
	render() {
		return (
			<div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
				<form role="search">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Search" />
					</div>
				</form>
				<ul className="nav menu">
					<li className="active"><a href="index.html"><svg className="glyph stroked dashboard-dial"></svg> Dashboard</a></li>
					<li><a href="widgets.html"><svg className="glyph stroked calendar"></svg> Widgets</a></li>
					<li><a href="charts.html"><svg className="glyph stroked line-graph"></svg> Charts</a></li>
					<li><a href="tables.html"><svg className="glyph stroked table"></svg> Tables</a></li>
					<li><a href="forms.html"><svg className="glyph stroked pencil"></svg> Forms</a></li>
					<li><a href="panels.html"><svg className="glyph stroked app-window"></svg> Alerts &amp; Panels</a></li>
					<li><a href="icons.html"><svg className="glyph stroked star"></svg> Icons</a></li>
					<li className="parent ">
						<a href="#">
							<span data-toggle="collapse" href="#sub-item-1"><svg className="glyph stroked chevron-down"></svg></span> Dropdown 
						</a>
						<ul className="children collapse" id="sub-item-1">
							<li>
								<a className="" href="#">
									<svg className="glyph stroked chevron-right"></svg> Sub Item 1
								</a>
							</li>
							<li>
								<a className="" href="#">
									<svg className="glyph stroked chevron-right"></svg> Sub Item 2
								</a>
							</li>
							<li>
								<a className="" href="#">
									<svg className="glyph stroked chevron-right"></svg> Sub Item 3
								</a>
							</li>
						</ul>
					</li>
					<li role="presentation" className="divider"></li>
					<li><a href="login.html"><svg className="glyph stroked male-user"></svg> Login Page</a></li>
				</ul>
			</div>
		);
	}
}