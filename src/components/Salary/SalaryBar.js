import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SalaryBar.css';

class SalaryBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// isOpen: false,
		};
	}

	render() {
		const { averageSalary } = this.props;
		const graphWidth = '11.5rem'; // From CSS
		const averageScale =
			(averageSalary.average - averageSalary.min) /
			(averageSalary.max - averageSalary.min);
		const graphClamped = Math.min(Math.max(0, averageScale), 1);
		const graphPos = `calc(${graphClamped *
			100}% - (${graphWidth} * ${graphClamped}))`;
		const tagPos = `${graphClamped * 100}%`;
		return (
			<div className={styles.graphDetails}>
				<div className={styles.graphAverage} style={{ marginLeft: graphPos }}>
					AVG MYR {averageSalary.average}
					<span className={styles.graphTag} style={{ left: tagPos }} />
				</div>

				<span className={styles.graphBar} />

				<div className={styles.graphMin}>
					<span className={styles.graphLabel}>MIN</span>
					MYR {averageSalary.min}
				</div>

				<div className={styles.graphMax}>
					<span className={styles.graphLabel}>MAX</span>
					MYR {averageSalary.max}
				</div>
			</div>
		);
	}
}

SalaryBar.propTypes = {
	averageSalary: PropTypes.object.isRequired,
};

SalaryBar.defaultProps = {
	averageSalary: {
		min: 2000,
		max: 5000,
		average: 4000,
	},
};

export default SalaryBar;
