import React, { Component } from 'react';
import styles from './JobDetails.css';

export default class JobDetails extends Component {
	render() {
		return (
			<div>
				<h4 style={{ textDecoration: 'none' }}>Job Details</h4>
				<hr />
				<div className="col-sm-10 col-sm-offset-1">
					<div className="form-group">
						<label className="col-sm-2 control-label" htmlFor="Position Title">
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
						<label className="col-sm-2 control-label" htmlFor="Employment Type">
							Employment Type<span className="text-danger">*</span>
						</label>
						<div className="col-sm-10">
							<select
								name="employment_type"
								id="fieldEmploymentType"
								className="form-control select2-employment"
								tabIndex="-1"
								style={{ display: 'none' }}
							>
								<option value="default">-Employment Type-</option>
								<option value="contract">Contract</option>
								<option value="full">Full-Time</option>
								<option value="intern">Internship</option>
								<option value="part">Part-Time</option>
								<option value="temporary">Temporary</option>
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
										aria-owns="select2-fieldEmploymentType-results"
										aria-labelledby="select2-fieldEmploymentType-container"
									>
										<span
											className="select2-selection__rendered"
											id="select2-fieldEmploymentType-container"
										>
											-Employment Type-
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
								Please select the Employment Type
							</span>
							<div className="internterm-checkbox" style={{ display: 'none' }}>
								<label>
									<input
										id="fieldInternshipTermFlag"
										type="checkbox"
										name="internship_terms"
									/>
									<span>I have read and hereby agree to the </span>
									<a href="#" data-toggle="modal" data-target="#internTerms">
										Terms
									</a>
								</label>
							</div>
						</div>
					</div>

					<div className="form-group">
						<label className="col-sm-2 control-label" htmlFor="Position Level">
							Position Level<span className="text-danger">*</span>
						</label>
						<div className="col-sm-10">
							<select
								name="position_level"
								id="fieldPositionLevel"
								className="form-control select2"
								tabIndex="-1"
								style={{ display: 'none' }}
							>
								<option value="default">-Position Level-</option>
								<option value="sm">Senior Manager</option>
								<option value="mn">Manager</option>
								<option value="se">Senior Executive</option>
								<option value="el">Entry Level</option>
								<option value="ne">Non-Executive</option>
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
										aria-owns="select2-fieldPositionLevel-results"
										aria-labelledby="select2-fieldPositionLevel-container"
									>
										<span
											className="select2-selection__rendered"
											id="select2-fieldPositionLevel-container"
										>
											-Position Level-
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
								Please select the Position Level
							</span>
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
							<select
								name="job_specialization"
								id="fieldJobSpecialization"
								className="form-control select2"
								tabIndex="-1"
								style={{ display: 'none' }}
							>
								<option value="default">-Job Specialization-</option>
								<option value="as">Actuarial Science/Statistics</option>
								<option value="hd">Healthcare - Doctor/Diagnosis</option>
								<option value="th">IT/Computer - Hardware</option>
								<option value="ts">IT/Computer - Software</option>
								<option value="pe">Public Relations/Communications</option>
								<option value="etc">Etc...</option>
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
										aria-owns="select2-fieldJobSpecialization-results"
										aria-labelledby="select2-fieldJobSpecialization-container"
									>
										<span
											className="select2-selection__rendered"
											id="select2-fieldJobSpecialization-container"
										>
											-Job Specialization-
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
					</div>

					<div className="form-group">
						<label className="col-sm-2 control-label" htmlFor="Work Location">
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
								<label className="col-sm-2 form-control-static">Malaysia</label>
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
											<option value="kelantan-kb">Kelantan - Kota Bharu</option>
											<option value="kelantan-other">Kelantan - Others</option>
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
										<span className="dropdown-wrapper" aria-hidden="true" />
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
										<span className="dropdown-wrapper" aria-hidden="true" />
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
						<label className="col-sm-2 control-label" htmlFor="Monthly Salary">
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
						</div>
						<div className="col-sm-3 col-xs-12">
							<input
								type="number"
								className="form-control"
								placeholder="Min"
								id="minSalary"
								min="0"
							/>
						</div>
						<div className="col-sm-3 col-xs-12">
							<input
								type="number"
								className="form-control"
								placeholder="Max"
								id="maxSalary"
								min="0"
							/>
						</div>
						<div className="col-sm-offset-2 col-sm-10">
							<span className="help-block" style={{ display: 'none' }}>
								Monthly Salary must be filled with a valid salary range
							</span>
						</div>
					</div>

					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<div className="internterm-checkbox" style={{ display: 'none' }}>
								<label>
									<input id="fieldInternUnpaySalary" type="checkbox" name="" />
									<span>Unpaid Internship</span>
								</label>
							</div>
							<div className="checkbox">
								<label>
									<input id="fieldSalaryDisplayFlag" type="checkbox" name="" />
									<span>
										Display salary on ad to attract the right candidates
									</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
