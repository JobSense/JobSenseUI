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
			applies: {
				prediction: {
					max: 292.1773681640625,
					median: 113.14586639404297,
					min: 43.815799713134766,
					toShow: true,
				},
			},
			clicks: {
				prediction: {
					max: 865.8287353515625,
					median: 375.0378723144531,
					min: 162.44952392578125,
					toShow: true,
				},
			},
			insights: {
				applies: {
					max: 0,
					median: 0,
					min: 0,
					toShow: false,
				},
				salary: {
					max: 0,
					median: 0,
					min: 0,
					toShow: false,
				},
				talentPool: {
					max: 0,
					median: 0,
					min: 0,
					toShow: false,
				},
				view: {
					max: 0,
					median: 0,
					min: 0,
					toShow: false,
				},
			},
			talentPool: {
				prediction: {
					max: 1865.5220947265625,
					median: 453.5396728515625,
					min: 110.26305389404297,
					toShow: true,
				},
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
							<PreviewHeader data={this.state} />
							<JobDetails />
							<JobRequirements />
							<JobDescription />
							<AdditionalOptions />
						</DataConsumer>
					</div>
				</div>
				<div className={styles.sideBar}>
					<Sidebar data={this.state} />
				</div>
			</AppContext.Provider>
		);
	}
}

export default withRouter(IndexPage);
