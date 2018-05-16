import React, { Component } from 'react';
import styles from './Sidebar.css';

export default class Sidebar extends Component {
	render() {
		return (
			<div className={styles.container}>
				<a href="#" className={styles.expandButton}>
					{'<'}
				</a>

				<div className={styles.widgetContainer}>
					<div className={styles.widget}>
						<div className={styles.widgetTitle}>Talent Pool</div>
						<div className={styles.widgetSubtitle}>
							15000 - 20000{' '}
							<i
								className={'icon icon-question-mark icon-popover'}
								style={{ verticalAlign: 'text-top' }}
							/>
						</div>
						<div className={styles.widgetDescription}>Potential Reach</div>
					</div>
					<div className={styles.widget}>
						<div className={styles.widgetTitle}>Engagements</div>
					</div>
					<div className={styles.widget}>
						<div className={styles.widgetTitle}>Salary Benchmark</div>
					</div>
				</div>
			</div>
		);
	}
}
