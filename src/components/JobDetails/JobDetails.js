import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './JobDetails.css';
import SalaryBar from '../Salary/SalaryBar';
import Select from '../Select/Select';
import * as constants from './constants';

export default class JobDetails extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		values: PropTypes.object,
		onChange: PropTypes.func,
	};

	salaryChangeMin = e => {
		this.props.onChange('minSalary', parseInt(e.target.value));
	};

	salaryChangeMax = e => {
		this.props.onChange('maxSalary', parseInt(e.target.value));
	};

	render() {
		const { minSalary, maxSalary } = this.props.values;
		const averageSalaryInput = Math.floor((minSalary + maxSalary) / 2);
		return (
			<form action="#" className="form-horizontal">
				<div className={'panel form'}>
					<br />
					<div className="panel-body">
						<div className="col-sm-10 col-sm-offset-1">
							<h4 style={{ textDecoration: 'none' }}>Job Details</h4>
							<hr />

							<div className="col-sm-10 col-sm-offset-1">
								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Position Title"
									>
										Position Title<span className="text-danger">*</span>
									</label>
									<div className="col-sm-10">
										<input
											id="fieldPositionTitle"
											name="position_title"
											className="form-control"
											placeholder="-Eg. Human Resource Manager-"
										/>
										<span className="help-block" style={{ display: 'none' }}>
											Position Title is required with minimal 3 characters
										</span>
									</div>
								</div>

								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Employment Type"
									>
										Employment Type<span className="text-danger">*</span>
									</label>
									<div className="col-sm-10">
										<Select
											placeholder="-Employment Type-"
											options={constants.employmentType}
										/>
									</div>
								</div>

								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Position Level"
									>
										Position Level<span className="text-danger">*</span>
									</label>
									<div className="col-sm-10">
										<Select
											placeholder="-Position Level-"
											options={constants.employmentType}
										/>
									</div>
								</div>

								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Job Specialization"
									>
										Job Specialization<span className="text-danger">*</span>
									</label>
									<div className="col-sm-10">
										<Select
											placeholder="-Job Specialization-"
											options={constants.jobSpecialization}
										/>
									</div>
								</div>

								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Work Location"
									>
										Work Location<span className="text-danger">*</span>
									</label>
									<div className="col-sm-10">
										<div className="form-group" id="postCountry">
											<label className="checkbox-inline">
												<input className="post-my" type="checkbox" />Malaysia
											</label>
											<label className="checkbox-inline">
												<input className="post-sg" type="checkbox" />Singapore
											</label>
											<label className="checkbox-inline">
												<input className="post-id" type="checkbox" />Indonesia
											</label>
											<label className="checkbox-inline">
												<input className="post-ph" type="checkbox" />Philippines
											</label>
											<label className="checkbox-inline">
												<input className="post-vn" type="checkbox" />Vietnam
											</label>
										</div>
										<div
											className="form-group"
											id="selected-my"
											style={{ display: 'none' }}
										>
											<label className="col-sm-2 form-control-static">
												Malaysia
											</label>
											<div className="col-sm-5">
												<select
													name=""
													className="form-control select2"
													multiple=""
													tabIndex="-1"
													style={{ display: 'none' }}
												>
													<optgroup label="Johor">
														<option value="johor-all">Johor - All</option>
														<option value="johor-batupahat">
															Johor - Batu Pahat
														</option>
													</optgroup>
													<optgroup label="Kuala Lumpur">
														<option value="kl-all">Kuala Lumpur - All</option>
													</optgroup>
													<optgroup label="Kelantan">
														<option value="kelantan-all">Kelantan - All</option>
														<option value="kelantan-kb">
															Kelantan - Kota Bharu
														</option>
														<option value="kelantan-other">
															Kelantan - Others
														</option>
													</optgroup>
												</select>
												<span
													className="select2 select2-container select2-container--default"
													dir="ltr"
													style={{ width: '100%' }}
												>
													<span className="selection">
														<span
															className="select2-selection select2-selection--multiple"
															tabIndex="0"
															role="combobox"
															aria-autocomplete="list"
															aria-haspopup="true"
															aria-expanded="false"
															aria-owns="select2--results"
														>
															<ul className="select2-selection__rendered">
																<li className="select2-search select2-search--inline">
																	<input
																		className="select2-search__field"
																		type="search"
																		tabIndex="-1"
																		role="textbox"
																		placeholder=""
																		style={{ width: '0.75em' }}
																	/>
																</li>
															</ul>
														</span>
													</span>
													<span
														className="dropdown-wrapper"
														aria-hidden="true"
													/>
												</span>
											</div>
										</div>
										<div
											className="form-group"
											id="selected-sg"
											style={{ display: 'none' }}
										>
											<label className="col-sm-2 form-control-static">
												Singapore
											</label>
											<div className="col-sm-5">
												<select
													name=""
													className="form-control select2"
													multiple=""
													tabIndex="-1"
													style={{ display: 'none' }}
												>
													<optgroup label="Johor">
														<option value="johor-all">Johor - All</option>
														<option value="johor-batupahat">
															Johor - Batu Pahat
														</option>
													</optgroup>
													<optgroup label="Kuala Lumpur">
														<option value="kl-all">Kuala Lumpur - All</option>
													</optgroup>
												</select>
												<span
													className="select2 select2-container select2-container--default"
													dir="ltr"
													style={{ width: '100%' }}
												>
													<span className="selection">
														<span
															className="select2-selection select2-selection--multiple"
															tabIndex="0"
															role="combobox"
															aria-autocomplete="list"
															aria-haspopup="true"
															aria-expanded="false"
															aria-owns="select2--results"
														>
															<ul className="select2-selection__rendered">
																<li className="select2-search select2-search--inline">
																	<input
																		className="select2-search__field"
																		type="search"
																		tabIndex="-1"
																		role="textbox"
																		placeholder=""
																		style={{ width: '0.75em' }}
																	/>
																</li>
															</ul>
														</span>
													</span>
													<span
														className="dropdown-wrapper"
														aria-hidden="true"
													/>
												</span>
											</div>
										</div>
										<div
											className="form-group"
											id="specificArea"
											style={{ display: 'none' }}
										>
											<label className="col-sm-2 form-control-static">
												Specific area
											</label>
											<div className="col-sm-5">
												<input type="text" className="form-control" />
											</div>
										</div>
										<span className="help-block" style={{ display: 'none' }}>
											Please select the Work Location
										</span>
										<span className="help-block" style={{ display: 'none' }}>
											Please select the Position Level
										</span>
									</div>
								</div>

								<div className="form-group">
									<label className="col-sm-2 control-label">
										Auto Filter
										<a
											href="#"
											data-toggle="popover"
											data-html="true"
											data-trigger="hover"
											data-placement="top"
											data-delay="5"
											data-content="<span className=&quot;label label-info&quot;>Auto Filter</span><div style=&quot;font-size:13px;margin-top:3px;&quot;>Unsuitable applications will automatically move to Not Suitable</div>"
											data-original-title=""
											title=""
										>
											<span className="icon icon-question-mark icon-popover" />
										</a>
									</label>
									<div className="col-sm-8">
										<label className="checkbox-inline">
											<input type="checkbox" />
											<strong>
												Only consider application from Singapore nationals and
												permanent residents
											</strong>
										</label>
									</div>
								</div>

								<div className="form-group">
									<label
										className="col-sm-2 control-label"
										htmlFor="Monthly Salary"
									>
										Monthly Salary<span className="text-danger">*</span>
									</label>
									<div className="col-sm-2 col-xs-12">
										<select
											name=""
											id="select2Salary"
											className="form-control select2-salary"
											tabIndex="-1"
											style={{ display: 'none' }}
										>
											<option value="aud">AUD</option>
											<option value="idr">IDR</option>
											<option value="myr">MYR</option>
											<option value="sgd">SGD</option>
										</select>
										<span
											className="select2 select2-container select2-container--default"
											dir="ltr"
											style={{ width: '100%' }}
										>
											<span className="selection">
												<span
													className="select2-selection select2-selection--single"
													tabIndex="0"
													role="combobox"
													aria-autocomplete="list"
													aria-haspopup="true"
													aria-expanded="false"
													aria-owns="select2-select2Salary-results"
													aria-labelledby="select2-select2Salary-container"
												>
													<span
														className="select2-selection__rendered"
														id="select2-select2Salary-container"
													>
														AUD
													</span>
													<span
														className="select2-selection__arrow"
														role="presentation"
													>
														<b role="presentation" />
													</span>
												</span>
											</span>
											<span className="dropdown-wrapper" aria-hidden="true" />
										</span>
										<span className="help-block" style={{ display: 'none' }}>
											Please select the Specialization
										</span>
									</div>
									<div className="col-sm-3 col-xs-12">
										<input
											type="number"
											className="form-control"
											placeholder="Min"
											id="minSalary"
											min="0"
											onBlur={this.salaryChangeMin.bind(this)}
										/>
									</div>
									<div className="col-sm-3 col-xs-12">
										<input
											type="number"
											className="form-control"
											placeholder="Max"
											id="maxSalary"
											max="0"
											onBlur={this.salaryChangeMax.bind(this)}
										/>
									</div>
									<div className="col-sm-offset-2 col-sm-10">
										<span className="help-block" style={{ display: 'none' }}>
											Monthly Salary must be filled with a valid salary range
										</span>
									</div>
								</div>

								<SalaryBar averageSalaryInput={averageSalaryInput} />

								<div className="form-group">
									<div className="col-sm-offset-2 col-sm-10">
										<div
											className="internterm-checkbox"
											style={{ display: 'none' }}
										>
											<label>
												<input
													id="fieldInternUnpaySalary"
													type="checkbox"
													name=""
												/>
												<span>Unpaid Internship</span>
											</label>
										</div>
										<div className="checkbox">
											<label>
												<input
													id="fieldSalaryDisplayFlag"
													type="checkbox"
													name=""
												/>
												<span>
													Display salary on ad to attract the right candidates
												</span>
											</label>
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
