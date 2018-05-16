import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IndexPage.css';
import { withRouter } from 'react-router-dom';

import JobDetails from '../../components/JobDetails/JobDetails';
import JobRequirements from '../../components/JobRequirements/JobRequirements';
import JobDescription from '../../components/JobDescription/JobDescription';
import AdditionalOptions from '../../components/AdditionalOptions/AdditionalOptions';
import Sidebar from '../../components/Sidebar/Sidebar';
import TalentPoolChart from '../../components/TalentPoolChart/TalentPoolChart';

const IndexPage = () => {
	return (
		<div className={styles.container}>
			<TalentPoolChart />
			<JobDetails />
			<JobRequirements />
			<JobDescription />
			<AdditionalOptions />
			<Sidebar />
		</div>
	);
};

export default withRouter(IndexPage);
