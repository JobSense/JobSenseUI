import React, { Component } from 'react';
import styles from './Sidebar.css';
import EngagementChart from '../EngagementChart/EngagementChart';
import TalentPoolChart from '../TalentPoolChart/TalentPoolChart';
import PropTypes from 'prop-types';

class Sidebar extends Component {
	constructor() {
		super();

		this.state = {
			expanded: false,
		};

		this.handleExpand = this.handleExpand.bind(this);
	}

	handleExpand() {
		this.setState({ expanded: !this.state.expanded });
	}

	render() {
		const { data } = this.props;
		const responseData = data && data.response;

		const applyEngagementData ={
			label: 'Apply',
			...responseData && responseData.applies.prediction
		};

		const clickEngagementData ={
			label: 'Click',
			...responseData && responseData.clicks.prediction
		};

		const talentPoolData = {
			...responseData && responseData.talentPool.prediction
		};

		const { expanded } = this.state;
		return (
			<div>
				<div className={styles.container}>
					<div className={styles.widgetWrap}>
							<div className={styles.widgetBox}>
								<div className={styles.title}>JobSense</div>
							</div>
							<div className={styles.widgetContainer}>
								<div className={styles.widgetBox}>
									<div className={styles.widgetTitle}>Talent Pool</div>
									<TalentPoolChart data={talentPoolData}/>
								</div>
								<div className={styles.widgetBox}>
									<div className={styles.widgetTitle}>Engagements</div>
									<EngagementChart data={applyEngagementData}/>
									<EngagementChart data={clickEngagementData}/>
								</div>
							</div>
					</div>
				</div>
			</div>
		);
	}
}

Sidebar.propTypes = {
	data: PropTypes.object.isRequired,
};


export default Sidebar;
