import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EngagementChart.css';

class EngagementChart extends Component {
	render() {
		const { data: { max, min, median, label, toShow } } = this.props;

		const percentage = Math.round(median / (max - min) * 100, 0) || 0;

		return (
			<div className={styles.container}>
				{!toShow && <div className={styles.overlay}>Not Available</div>}
				<div className={styles.chart}>
					<div className={styles.labelTitle}>{label}</div>
					<div className={styles.bar}>
						<div className={styles.barInner} />
						<div
							style={{ maxWidth: `${percentage}%` }}
							className={styles.barOuter}
						>
							<span className={styles.value}>{isNaN(Math.round(median, 0)) && 0}</span>
						</div>
					</div>
					<div className={styles.rangeValueContainer}>
						<span>{isNaN(Math.round(min, 0)) && 0}</span>
						<span>{isNaN(Math.round(max, 0)) && 0}</span>
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
