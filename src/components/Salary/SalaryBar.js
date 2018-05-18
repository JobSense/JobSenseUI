import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SalaryBar.css';

class SalaryBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			salaryInsight,
			minSalaryInput,
			maxSalaryInput,
			currency,
		} = this.props;
		const graphWidth = '11.5rem'; // From CSS

		const minAverageScale =
			(minSalaryInput - salaryInsight.min) /
			(salaryInsight.max - salaryInsight.min);
		const minGraphClamped = Math.min(Math.max(0, minAverageScale), 1);
		const minGraphPos = `calc(${minGraphClamped *
			100}% - (${graphWidth} * ${minGraphClamped}))`;
		const minTagPos = `${minGraphClamped * 100}%`;

		const maxAverageScale =
			(maxSalaryInput - salaryInsight.min) /
			(salaryInsight.max - salaryInsight.min);
		const maxGraphClamped = Math.min(Math.max(0, maxAverageScale), 1);
		const maxGraphPos = `calc(${maxGraphClamped *
			100}% - (${graphWidth} * ${maxGraphClamped}))`;
		const maxTagPos = `${maxGraphClamped * 100}%`;

		const graphRange = `${(maxGraphClamped - minGraphClamped)*100}%`;

		return (
			<div>
				<div className={styles.coverLeft}/>
				<div className={styles.graphDetails}>

					<div
						className={`${styles.graphAverage} ${styles.graphAverageMin}`}
						style={{ marginLeft: minGraphPos }}
					>
						MIN {currency} {minSalaryInput}
						<span
							className={styles.graphTagMin}
							style={{ left: minTagPos }}
						/>
					</div>
					<div className={styles.graphBar}>
						<div className={styles.graphRange} style={{ marginLeft: minTagPos , width: graphRange }}/>
						<div className={styles.graphLabel}>
							<div className={styles.graphLabelMin}>{currency} {salaryInsight.min}</div>
							<div className={styles.graphLabelMax}>{currency} {salaryInsight.max}</div>
						</div>
					</div>
					<div
						className={`${styles.graphAverage} ${styles.graphAverageMax}`}
						style={{ marginLeft: maxGraphPos }}
					>
						MAX {currency} {maxSalaryInput}
						<span
							className={styles.graphTagMax}
							style={{ left: maxTagPos }}
						/>
					</div>

					{/* <div className={styles.graphMin}>
						<span className={styles.graphLabel}>MIN</span>
						{currency} {salaryInsight.min}
					</div>

					<div className={styles.graphMax}>
						<span className={styles.graphLabel}>MAX</span>
						{currency} {salaryInsight.max}
					</div> */}
				</div>
				<div className={styles.coverRight}/>
			</div>
		);
	}
}

SalaryBar.propTypes = {
	salaryInsight: PropTypes.object.isRequired,
	minSalaryInput: PropTypes.number,
	maxSalaryInput: PropTypes.number,
	currency: PropTypes.string.isRequired,
};

SalaryBar.defaultProps = {
	salaryInsight: {
		min: 2000,
		max: 5000,
	},
	currency: 'MYR',
	minSalaryInput: 0,
	maxSalaryinput: 0,
};

export default SalaryBar;
