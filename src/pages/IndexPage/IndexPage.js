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
	constructor() {
		super();
		this.controller =
			typeof window !== 'undefined' ? new AbortController() : {};
	}
	state = {
		values: {
			job_description: '',
			job_title: '',
			job_employment_type: '',
			job_seniority_level: '',
			job_specializations_string: '',
			job_roles_string: '',
			job_work_locations_string: '', // was array
			job_salary_visible: false,
			qualification_code_string: '', // was array
			field_of_study: '', // was array
			years_of_experience: 0,
			mandatory_skill_keyword: '', // was array
			job_monthly_salary_min: 0,
			job_monthly_salary_max: 0,

			//Fields i dk
			job_auto_forwarded_flag: false,
			job_internship_flag: false,
			company_recruitment_firm_flag: false,
		},
		response: {
			applies: {
				prediction: {
					max: 0,
					median: 0,
					min: 0,
					toShow: true,
				},
			},
			clicks: {
				prediction: {
					max: 0,
					median: 0,
					min: 0,
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
					max: 0,
					median: 0,
					min: 0,
					toShow: true,
				},
			},
		},
		onChange: (name, value) => {
			console.log(name, value);
			this.setState(
				{ values: { ...this.state.values, [name]: value } },
				async () => {
					try {
						this.controller.abort();
						this.controller = new AbortController();
						const signal = this.controller.signal;
						const res = await fetch(
							'http://hackathon-jobsense-service-staging.ap-southeast-1.elasticbeanstalk.com/predictions/job-ad-performance',
							{
								method: 'POST',
								body: JSON.stringify({ ...this.state.values }),
								headers: {
									// 'Access-Control-Allow-Origin': '*',
									Accept: 'application/json',
									'Content-Type': 'application/json',
								},
								signal,
							}
						);
						const response = await res.json();
						this.setState({ response });
					} catch (e) {
						console.log('shit something wrong', e);
					}
				}
			);
		},
	};
	render() {
		// console.log(this.state);
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
