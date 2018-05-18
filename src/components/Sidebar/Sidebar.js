import React, { Component } from 'react';
import styles from './Sidebar.css';
import EngagementChart from '../EngagementChart/EngagementChart';
import TalentPoolChart from '../TalentPoolChart/TalentPoolChart';
import PropTypes from 'prop-types';

class Sidebar extends Component {
	constructor() {
		super();

		this.state = {
			expanded: true,
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
				<div className={`${styles.container} ${expanded ? styles.showContent : styles.hideContent}`}>
					<div className={styles.widgetWrap}>
						<div className={`${styles.widgetBox} ${expanded ? styles.noCollapseTitle : styles.collapseTitle}`}>
							<div className={`${styles.title}`}>JobSense</div>
						</div>
						<div className={`${styles.widgetContainer} ${expanded ? styles.showItem : styles.hideItem}`}>
							<div className={styles.widgetBox}>
								<div className={styles.widgetTitle}>Talent Pool</div>
								<TalentPoolChart data={talentPoolData}/>
								<div className={styles.desc}>
									<div>Talent pool is the potential number of potential talents that can reach based on your job description.</div>
								</div>
							</div>
							<div className={styles.widgetBox}>
								<div className={styles.widgetTitle}>Engagements</div>
								<EngagementChart data={applyEngagementData}/>
								<EngagementChart data={clickEngagementData}/>
								<div className={`${styles.desc} ${styles.descEngagement}`}>
									<div>Engagement is the potential number of candidates that will click on your ads (View) and apply to your ads (Applications).</div>
								</div>
							</div>
						</div>
						<div className={`${styles.widgetContainer} ${expanded ? styles.hideItem : styles.showItem}`}>
							<div className={styles.widgetBox}>
								<div className={styles.widgetTitleCollapse}>Talent Pool</div>
								<span className={'material-icons'}>people</span>{talentPoolData.min} - {talentPoolData.max}
							</div>
							<div className={styles.widgetBox}>
								<div className={styles.widgetTitleCollapse}>Applies</div>
								<span className={'material-icons'}>contacts</span>{applyEngagementData.min} - {applyEngagementData.max}
							</div>
							<div className={styles.widgetBox}>
								<div className={styles.widgetTitleCollapse}>Clicks</div>
								<span className={'material-icons'}>touch_app</span>{clickEngagementData.min} - {clickEngagementData.max}
							</div>
						</div>
					</div>
					<div className={styles.expandButton} onClick={this.handleExpand}>
						<span className={'material-icons'}>{expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
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
