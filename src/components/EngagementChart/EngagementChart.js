import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EngagementChart.css';

class EngagementChart extends Component {
	render() {
		const { data: { max, min, median, label } } = this.props;

		const percentage = Math.round(median / (max - min) * 100, 0) || 0;
		return (
			<div className={styles.container}>
				<div className={styles.chart}>
					<div className={styles.labelTitle}>{label}</div>
					<div className={styles.bar}>
						<div className={styles.barInner} />
						<div
							style={{ maxWidth: `${percentage}%` }}
							className={styles.barOuter}
						>
							<span className={styles.value}>{percentage}%</span>
						</div>
					</div>
					<div className={styles.rangeValueContainer}>
						<span>{Math.round(min, 0)}</span>
						<span>{Math.round(max, 0)}</span>
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
