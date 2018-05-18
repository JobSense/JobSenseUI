import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EngagementChart.css';

class EngagementChart extends Component {
	render() {
		const { data: { max, min, median, label, toShow } } = this.props;

		const minValue = min || 0;
		const maxValue = max || 0;
		const medianValue = median || 0;

		const percentage = Math.round(medianValue / (maxValue - minValue) * 100, 0) || 0;

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
							<span className={!toShow ? styles.notAvailableValue : styles.value}>{!toShow ? 'Not Available' : Math.round(medianValue, 0)}</span>
						</div>
					</div>
					<div className={styles.rangeValueContainer}>
						<span>{Math.round(minValue, 0)}</span>
						<span>{Math.round(maxValue, 0)}</span>
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
