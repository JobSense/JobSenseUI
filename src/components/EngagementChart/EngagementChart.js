import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EngagementChart.css';

class EngagementChart extends Component {
	render() {
		const { data } = this.props;
		const talentPoolAveragePercentage = (data.average * 180 / data.max) - 90;
		const rotateNumber = 'rotate('+talentPoolAveragePercentage+'deg)';

		return (
			<div className={styles.container}>
				<div className={styles.chart}>
					<div className={styles.labelTitle}>{data.label}</div>
					<div className={styles.bar}>
						<div className={styles.barInner} />
						<div style={{maxWidth: '40%'}} className={styles.barOuter}>
							<span className={styles.value}>60%</span>
						</div>
					</div>
					<div className={styles.rangeValueContainer}>
						<span>{data.min}</span>
						<span>{data.max}</span>
					</div>
				</div>
			</div>
		);
	}
}

EngagementChart.propTypes = {
	data: PropTypes.object.isRequired,
};

export default EngagementChart;
