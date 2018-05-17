import React from 'react';
import styles from './Header.css';

const Header = () => (
	<div className={`${styles.selfNavBar} navbar navbar-default navbar-static`}>
		<div className={`${styles.selfContainer} container`}>
			<div className="navbar-header">
				<button
					type="button"
					className="navbar-toggle"
					data-toggle="collapse"
					data-target=".navbar-collapse"
				>
					<span className="icon-bar" />
					<span className="icon-bar" />
					<span className="icon-bar" />
				</button>
				<a
					className="navbar-brand"
					href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#"
				>
					<span className="jslogo" />
				</a>
			</div>
			<div className="collapse navbar-collapse">
				<ul className="nav navbar-nav">
					<li>
						<a href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#">
							<span className="icon-home" />
						</a>
					</li>
					<li className="active">
						<a href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#">
							Job Ads
						</a>
					</li>
					<li>
						<a href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#">
							Talent Search
						</a>
					</li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown bell hidden-xs">
						<a
							className="bell"
							href="http://ui.jobstreet.com/examples/siva/job-ad-create.html"
							data-toggle="dropdown"
						>
							<i className="icon-bell alert" />
						</a>
						<div className="dropdown-menu notifications">
							<div className="title">
								Notifications
								<a
									href="javascript:;"
									id="clearNotification"
									className="small pull-right"
								>
									Clear All
								</a>
							</div>
							<ul className="notification-content">
								<li>
									<h5>Scheduled server maintenance · 1hr ago</h5>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Duis metus lacus, fringilla sed tristique ac, aliquet quis
										nibh. In interdum, leo ac dapibus faucibus, libero mi
										interdum eros, quis dignissim massa purus at neque. Morbi ut
										mi ut nisl egestas hendrerit et porttitor lectus.
									</p>
								</li>
							</ul>
							<div className="notification-empty" style={{ display: 'none' }}>
								<span>
									<span className="icon-bell-o x2" />
									<br />Nothing new right now
								</span>
							</div>
						</div>
					</li>
					<li className="dropdown">
						<a href="javascript:;" data-toggle="dropdown">
							<span>Hanna Tan Yan Yin</span>
							<span className="caret" />
							<span className="text-muted">
								Global Delivery Pod
							</span>
						</a>
						<ul className="dropdown-menu">
							<li>
								<a href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#">
									My Profile
								</a>
							</li>
							<li>
								<a href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#">
									All Users
								</a>
							</li>
							<li>
								<a href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#">
									Company Profile
								</a>
							</li>
							<li>
								<a href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#">
									Credits
								</a>
							</li>
							<li>
								<a href="http://ui.jobstreet.com/examples/siva/job-ad-create.html#">
									Logout
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Header;
