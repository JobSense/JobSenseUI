import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './JobRequirements.css';
import Select from '../Select/Select';
import CreatableSelect from '../../components/CreatableSelect/CreatableSelect';
import { educations, fieldStudies, yearOfStudies } from './constants';

export default class JobDetails extends Component {
	static propTypes = {
		values: PropTypes.object,
		onChange: PropTypes.func,
	};

	onSelectChange = (fieldName, { value }) => {
		this.props.onChange(fieldName, value);
	};

	onMultiSelectChange = (fieldName, values) => {
		const arrayOfValueString = values.map(({ value }) => value).join(',');
		this.props.onChange(fieldName, arrayOfValueString);
	};

	render() {
		const { onChange } = this.props;
		return (
			<form action="#" className="form-horizontal">
				<div className="panel form">
					<br />
					<div className="panel-body">
						<div className="col-sm-10 col-sm-offset-1">
							<h4>Job Requirements (for better candidate matching)</h4>
							<hr />
							<div className="col-sm-10 col-sm-offset-1">
								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Education Level"
									>
										Education Level<span className="text-danger">*</span>
									</label>
									<div className="col-sm-10">
										<Select
											isMulti
											placeholder={'-Please select the Education Level-'}
											options={educations}
											onChange={val =>
												this.onMultiSelectChange(
													'qualification_code_string',
													val
												)
											}
										/>
									</div>
								</div>

								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Field of Studies"
									>
										Field of Studies<span className="text-danger">*</span>
									</label>
									<div className="col-sm-10">
										<Select
											isMulti
											placeholder={'Please select the Field Of Studies'}
											options={fieldStudies}
											onChange={val =>
												this.onMultiSelectChange('field_of_study', val)
											}
										/>
									</div>
								</div>

								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Year of Experience"
									>
										Year(s) of Experience<span className="text-danger">*</span>
									</label>
									<div className="col-sm-10">
										<Select
											placeholder={'-Min Year(s) of Experience-'}
											options={yearOfStudies}
											onChange={val =>
												this.onSelectChange('years_of_experience', val)
											}
										/>
									</div>
								</div>

								<div className="form-group">
									<label className="col-sm-2 control-label" htmlFor="Skills">
										Skills
									</label>
									<div className="col-sm-10">
										<CreatableSelect
											onChange={val => {
												onChange(
													'mandatory_skill_keyword',
													val.map(val => val.value).join(',')
												);
											}}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-sm-offset-2 col-sm-10">
										<div className="row">
											<div className="col-sm-4 text-center">
												<a
													id="btnLanguageRequirement"
													className="well well-sm btn-block"
													data-toggle="modal"
													data-target="#langInfoModal"
												>
													+Language
												</a>
											</div>

											<div
												className="modal fade"
												id="langInfoModal"
												role="dialog"
												aria-hidden="true"
											>
												<div className="modal-dialog" role="document">
													<div
														className={`modal-content ${styles.languageModal}`}
													>
														<h3>Language(s)</h3>
														<p>
															Optional requirements for candidate. Select
															maximum 4.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
