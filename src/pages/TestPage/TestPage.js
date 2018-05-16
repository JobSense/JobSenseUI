import React from 'react';
import styles from './TestPage.css';
import SalaryBar from '../../components/Salary/SalaryBar';

const TestPage = () => (
	<div className={styles.container}>
		Hello I am test page
		<div className={styles.SalaryBarContainer}>
			<SalaryBar />
		</div>
	</div>
);

export default TestPage;
