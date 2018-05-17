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
import EngagementChart from '../../components/EngagementChart/EngagementChart';

const AppContext = React.createContext('value');
const DataConsumer = ({ children }) => {
	return (
		<AppContext.Consumer>
			{({ values, onChange }) => {
				return React.Children.map(children, child =>
					React.cloneElement(child, { values, onChange })
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
			minSalary: 0,
			maxSalary: 0,
		},
		onChange: (name, value) => {
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
