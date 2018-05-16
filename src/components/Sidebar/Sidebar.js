import React, { Component } from 'react';
import styles from './Sidebar.css';

export default class Sidebar extends Component {
	constructor() {
		super();

		this.state = {
			expanded: false,
		};

		this.handleExpand = this.handleExpand.bind(this);
	}

	handleExpand() {
		this.setState({ expanded: !this.state.expanded });
	}

	render() {
		const { expanded } = this.state;
		return (
			<div className={styles.container}>
				<a href="#" className={expanded ? styles.closeButton : styles.expandButton} onClick={this.handleExpand}>
					{expanded ? 'X' : '<'}
				</a>

				<div className={expanded ? styles.expandedContainer : styles.widgetContainer}>
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

					<div className={styles.widgetButton}>
						<button
							type="button"
							className="btn btn-primary"
							data-toggle="modal"
							data-target="#disputableKeywordModal"
						>
							Preview
						</button>
					</div>
				</div>
			</div>
		);
	}
}
