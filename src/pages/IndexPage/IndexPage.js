import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IndexPage.css';
import { withRouter } from 'react-router-dom';

import JobDetails from '../../components/JobDetails/JobDetails';
import JobRequirements from '../../components/JobRequirements/JobRequirements';

const IndexPage = () => {
	return (
		<div className={styles.container}>
			<JobDetails />
			<JobRequirements />
		</div>
	);
};

export default withRouter(IndexPage);
