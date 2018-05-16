import React, { Component } from 'react';
import styles from './JobRequirements.css';

export default class JobDetails extends Component {
	render() {
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
										<select
											name="education_level"
											id="fieldEducationLevel"
											className="form-control select2"
											multiple=""
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
																style={{ width: '0.75em;' }}
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
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
