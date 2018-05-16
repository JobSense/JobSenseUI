import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './IndexPage.css';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import JobDetails from '../../components/JobDetails/JobDetails';
import JobRequirements from '../../components/JobRequirements/JobRequirements';
import JobDescription from '../../components/JobDescription/JobDescription';
import AdditionalOptions from '../../components/AdditionalOptions/AdditionalOptions';
import Sidebar from '../../components/Sidebar/Sidebar';
import PreviewHeader from '../../components/PreviewHeader/PreviewHeader';
import TalentPoolChart from '../../components/TalentPoolChart/TalentPoolChart';

const IndexPage = () => {
	return (
		<Fragment>
			<div className={styles.container}>
			<Header />
				<div className={styles.formContainer}>
						<PreviewHeader />
						<JobDetails />
						<JobRequirements />
						<JobDescription />
						<AdditionalOptions />
				</div>
			</div>
			<Sidebar />
		</Fragment>
	);
};

export default withRouter(IndexPage);
