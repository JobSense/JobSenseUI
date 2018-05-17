import React, { Component } from 'react';
import styles from './Sidebar.css';
import EngagementChart from '../EngagementChart/EngagementChart';
import TalentPoolChart from '../TalentPoolChart/TalentPoolChart';

export default class Sidebar extends Component {
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
		const applyEngagementData ={
			label: 'Apply',
			min: 0,
			max: 5000,
			average: 2000,
		};

		const clickEngagementData ={
			label: 'Click',
			min: 3000,
			max: 7000,
			average: 4000,
		};

		const talentPoolData ={
			min: 20,
			max: 5000,
			average: 2000,
		};

		return (
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
		);
	}
}
