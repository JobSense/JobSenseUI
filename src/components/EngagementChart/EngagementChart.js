import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EngagementChart.css';

class EngagementChart extends Component {
	render() {
		const { engagementData } = this.props;
		// const talentPoolAveragePercentage = (talentPoolData.average * 180 / talentPoolData.max) - 90;
		// const rotateNumber = 'rotate('+talentPoolAveragePercentage+'deg)';

		return (
			<div className={styles.container}>
				<h3>Engagement</h3>
				<div className={styles.chart}>
					{/* <div className={styles.semicircle} />
					<div style={{transform: rotateNumber}} className={styles.pointer} />
					<div className={styles.pointerDot} />
					<div className={styles.minNumber}>0</div>
                    <div className={styles.maxNumber}>{talentPoolData.max}</div> */}
                    <p>Clicks</p>
                    <div className={styles.clicksBar}>
                        <div className={styles.clicksMeter}/>
                    </div>
                    
                    <p>Apply</p>
                    <div className={styles.applyBar}>
                        <div className={styles.applyMeter}/>
                    </div>
                    
				</div>
			</div>
		);
	}
}

EngagementChart.propTypes = {
	engagementData: PropTypes.object.isRequired,
};

EngagementChart.defaultProps = {
	engagementData: {
        clicks: {
            min: 0,
            max: 0,
            median: 0,
        },
        apply: {
            min: 0,
            max: 0,
            median: 0,
        },
	},
};

export default EngagementChart;