import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SalaryBar.css';

class SalaryBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { averageSalary, averageSalaryInput, currency } = this.props;
		const graphWidth = '11.5rem'; // From CSS
		const averageScale =
			(averageSalaryInput - averageSalary.min) /
			(averageSalary.max - averageSalary.min);
		const graphClamped = Math.min(Math.max(0, averageScale), 1);
		const graphPos = `calc(${graphClamped *
			100}% - (${graphWidth} * ${graphClamped}))`;
		const tagPos = `${graphClamped * 100}%`;
		return (
			<div>
				<div className={styles.graphDetails}>
					{averageSalaryInput < averageSalary.min ||
					averageSalaryInput > averageSalary.max ? (
						<div
							className={styles.graphAverage}
							style={{ marginLeft: graphPos, backgroundColor: 'red' }}
						>
							AVG {currency} {averageSalaryInput}
							<span
								className={styles.graphTag}
								style={{ left: tagPos, borderTopColor: 'red' }}
							/>
						</div>
					) : (
						<div
							className={styles.graphAverage}
							style={{ marginLeft: graphPos }}
						>
							AVG {currency} {averageSalaryInput}
							<span className={styles.graphTag} style={{ left: tagPos }} />
						</div>
					)}

					<span className={styles.graphBar} />

					<div className={styles.graphMin}>
						<span className={styles.graphLabel}>MIN</span>
						{currency} {averageSalary.min}
					</div>

					<div className={styles.graphMax}>
						<span className={styles.graphLabel}>MAX</span>
						{currency} {averageSalary.max}
					</div>
				</div>
			</div>
		);
	}
}

SalaryBar.propTypes = {
	averageSalary: PropTypes.object.isRequired,
	averageSalaryInput: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
};

SalaryBar.defaultProps = {
	averageSalary: {
		min: 2000,
		max: 5000,
	},
	currency: 'AUD',
};

export default SalaryBar;
