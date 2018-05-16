import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TalentPoolChart.css';

class TalentPoolChart extends Component {
	render() {
		const { talentPoolData } = this.props;
		const talentPoolAveragePercentage = (talentPoolData.average * 180 / talentPoolData.max) - 90;
		const rotateNumber = 'rotate('+talentPoolAveragePercentage+'deg)';

		return (
			<div className={styles.container}>
				Talent Pool
				<div className={styles.chart}>
					<div className={styles.semicircle} />
					<div style={{transform: rotateNumber}} className={styles.pointer} />
					<div className={styles.pointerDot} />
					<div className={styles.minNumber}>0</div>
					<div className={styles.maxNumber}>{talentPoolData.max}</div>
				</div>
			</div>
		);
	}
}

TalentPoolChart.propTypes = {
	talentPoolData: PropTypes.object.isRequired,
};

TalentPoolChart.defaultProps = {
	talentPoolData: {
		min: 0,
		max: 5000,
		average: 2000,
	},
};

export default TalentPoolChart;
