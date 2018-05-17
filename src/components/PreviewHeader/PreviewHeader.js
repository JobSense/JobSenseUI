import React, { Component } from 'react';
import styles from './PreviewHeader.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import PropTypes from 'prop-types';

class PreviewHeader extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className="panel topbar stickyEdit">
				<div className="panel-body stickyTopBar">
					<div className="topbar-heading">
						<div className="topbar-title">
							<h1>Create/ Edit Job Ad</h1>
						</div>
						<div className="topbar-search">
							<form className="form-group">
								<span className="icon-search" />
								<span className="icon-close" />
								<input
									type="text"
									className="form-control"
									placeholder="Search for job ads..."
								/>
							</form>
						</div>
					</div>
					<div className="topbar-action pull-right">
						<button
							type="button"
							className="btn btn-primary"
							data-toggle="modal"
							data-target="#disputableKeywordModal"
						>
							Preview
						</button>
					</div>
				</div>
				<Sidebar data={data}/>
			</div>
		);
	}
}

PreviewHeader.propTypes = {
	data: PropTypes.object.isRequired,
};


export default PreviewHeader;
