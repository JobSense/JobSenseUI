import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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

const AppContext = React.createContext('value');
const DataConsumer = ({ children }) => {
	return (
		<AppContext.Consumer>
			{({ values, onChange, response }) => {
				return React.Children.map(children, child =>
					React.cloneElement(child, { values, onChange, response })
				);
			}}
		</AppContext.Consumer>
	);
};
DataConsumer.propTypes = {
	children: PropTypes.any,
};

class IndexPage extends React.Component {
	state = {
		values: {
			job_title: '',
			job_employment_type: '',
			job_seniority_level: '',
			job_specializations_string: '',
			job_roles_string: '',
			job_work_locations_string: [], // need to change to string
			job_salary_visible: false,
			qualification_code: [], // need to change to string
			field_of_study: [],
			years_of_experience: 0,
			mandatory_skill_keyword: [],

			minSalary: 0,
			maxSalary: 0,
		},
		response: {
			// response
			talentPool: {
				prediction: {
					min: 20,
					max: 5000,
					median: 1000,
					toShow: true,
				},
			},
			clicks: {
				prediction: {
					min: 10,
					max: 700,
					median: 100,
					toShow: true,
				},
			},
			applies: {
				prediction: {
					min: 1,
					max: 150,
					median: 40,
					toShow: true,
				},
			},
			insights: {
				applies:
					'Based on job ad posted in the market that have similar attributes (industry, location and years of experience), the minimum application is 0, maximum is 100 and median is 30.',
				salary:
					'Based on job ad posted in the market that have similar attributes (industry, location and years of experience), the minimum salary is 2000, maxiumum is 3000 and median is 2300.',
			},
		},
		onChange: (name, value) => {
			console.log(name, value);
			this.setState({ values: { ...this.state.values, [name]: value } });
		},
	};
	render() {
		return (
			<AppContext.Provider value={this.state}>
				<div className={styles.container}>
					<Header />
					<div className={styles.formContainer}>
						<DataConsumer>
							<PreviewHeader />
							<JobDetails />
							<JobRequirements />
							<JobDescription />
							<AdditionalOptions />
						</DataConsumer>
					</div>
				</div>
				<Sidebar />
			</AppContext.Provider>
		);
	}
}

export default withRouter(IndexPage);
