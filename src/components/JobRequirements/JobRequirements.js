import React, { Component } from 'react';
import styles from './JobRequirements.css';
import Select from '../Select/Select';
import { educations } from './constants';

export default class JobDetails extends Component {
	render() {
		return (
			<form action="#" className="form-horizontal">
				<Select
					placeholder={'-Please select the Education Level-'}
					options={educations}
				/>
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
										<select
											name="education_level"
											id="fieldEducationLevel"
											className="form-control select2"
											multiple
											tabIndex="-1"
											style={{ display: 'none' }}
										>
											<option value="default">
												-Please select the Education Level-
											</option>
											<option value="ps">
												{'Primary/Secondary/STPM/SPM/"O" Level'}
											</option>
											<option value="pc">Professional Certificate</option>
											<option value="dp">
												Diploma/Advanced/Higher/Graduate Diploma
											</option>
											<option value="bd">
												Bachelor&apos;s Degree/Post Graduate
												Diploma/Professional Degree
											</option>
											<option value="ms">Master&apos;s Degree</option>
											<option value="dc">Doctorate (PhD)</option>
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
													aria-owns="select2-fieldEducationLevel-results"
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
										<span className="help-block" style={{ display: 'none' }}>
											Please select the Education Level
										</span>
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
										<select
											name="field_studies"
											id="fieldFieldOfStudies"
											className="form-control select2"
											multiple=""
											tabIndex="-1"
											style={{ display: 'none' }}
										>
											<optgroup label="Engineering">
												<option value="eci">Civil</option>
												<option value="ech">Chemical</option>
											</optgroup>
											<optgroup label="Science">
												<option value="sch">Chemistry</option>
												<option value="sbi">Biology</option>
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
													aria-owns="select2-fieldFieldOfStudies-results"
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
										<span className="help-block" style={{ display: 'none' }}>
											Please select the Field Of Studies
										</span>
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
										<select
											name="year_of_experience"
											id="fieldYearofExperience"
											className="form-control select2"
											tabIndex="-1"
											style={{ display: 'none' }}
										>
											<option value="default">
												-Min Year(s) of Experience-
											</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
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
													aria-owns="select2-fieldYearofExperience-results"
													aria-labelledby="select2-fieldYearofExperience-container"
												>
													<span
														className="select2-selection__rendered"
														id="select2-fieldYearofExperience-container"
													>
														-Min Year(s) of Experience-
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
											Please select the minimum Year of Experience
										</span>
									</div>
								</div>

								<div className="form-group">
									<label className="col-sm-2 control-label" htmlFor="Skills">
										Skills
									</label>
									<div className="col-sm-10">
										<select
											name="skills"
											id="fieldSkills"
											className="form-control select2"
											multiple=""
											tabIndex="-1"
											style={{ display: 'none' }}
										>
											<option value="default">
												-Enter skill(s), separate each with a comma-
											</option>
											<option value="php">php</option>
											<option value="java">java</option>
											<option value="c++">c++</option>
											<option value="business">Business</option>
											<option value="marketing">Marketing</option>
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
													aria-owns="select2-fieldSkills-results"
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
