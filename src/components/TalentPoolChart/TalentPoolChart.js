import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TalentPoolChart.css';

class TalentPoolChart extends Component {
	render() {
		const { data } = this.props;
		const talentPoolAveragePercentage = data.median * 180 / data.max - 90;
		const rotateNumber = 'rotate(' + talentPoolAveragePercentage + 'deg)';
		const { toShow } = data;
		return (
			<div className={styles.container}>
				{!toShow && (
					<div className={styles.padding}>
						<div className={styles.overlay}>Not Available</div>
					</div>
				)}
				<div className={styles.chart}>
					<div className={styles.semicircle} />
					<div style={{ transform: rotateNumber }} className={styles.pointer} />
					<div className={styles.pointerDot} />
					<div className={styles.rangeValueContainer}>
						<span className={styles.minNumber}>{Math.round(data.min, 0)}</span>
						<span className={styles.maxNumber}>{Math.round(data.max, 0)}</span>
					</div>
				</div>
			</div>
		);
	}
}

TalentPoolChart.propTypes = {
	data: PropTypes.object.isRequired,
};

export default TalentPoolChart;
