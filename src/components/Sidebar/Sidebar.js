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

	const { expanded } = this.state;

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
				{/*<div className={styles.container}>*/}
					{/*<a href="#" className={expanded ? styles.closeButton : styles.expandButton} onClick={this.handleExpand}>*/}
						{/*{expanded ? 'X' : '<'}*/}
					{/*</a>*/}

					{/*<div className={expanded ? styles.expandedContainer : styles.widgetContainer}>*/}
						{/*<div className={styles.widget}>*/}
							{/*<div className={styles.widgetTitle}>Talent Pool</div>*/}
							{/*<div className={styles.widgetSubtitle}>*/}
								{/*15000 - 20000{' '}*/}
								{/*<i*/}
									{/*className={'icon icon-question-mark icon-popover'}*/}
									{/*style={{ verticalAlign: 'text-top' }}*/}
								{/*/>*/}
							{/*</div>*/}
							{/*<div className={styles.widgetDescription}>Potential Reach</div>*/}
						{/*</div>*/}
						{/*<div className={styles.widget}>*/}
							{/*<div className={styles.widgetTitle}>Engagements</div>*/}
						{/*</div>*/}
						{/*<div className={styles.widget}>*/}
							{/*<div className={styles.widgetTitle}>Salary Benchmark</div>*/}
						{/*</div>*/}
					{/*</div>*/}
				{/*</div>*/}
			</div>
		);
	}
}
