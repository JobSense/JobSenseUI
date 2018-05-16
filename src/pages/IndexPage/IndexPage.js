import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IndexPage.css';
import { withRouter } from 'react-router-dom';

import JobDetails from '../../components/JobDetails/JobDetails';

const IndexPage = () => {
	return (
		<div className={styles.container}>
			<JobDetails />
		</div>
	);
};

export default withRouter(IndexPage);
