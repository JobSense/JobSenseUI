import React, { Component } from 'react';
import TextEditor from '../../components/TextEditor/TextEditor';
import styles from './JobDescription.css';

export default class JobDescription extends Component {
	render() {
		return (
            <form action="#" className="form-horizontal">
				<div className="panel form">
					<br />
					<div className="panel-body">
						<div className="col-sm-10 col-sm-offset-1">
							<h4>
								Job Description <span className="text-danger">*</span>
							</h4>
							<hr />
							<div className="col-sm-10 col-sm-offset-1">
								<fieldset className="fieldset-pale">
									<legend>Discriminatory Policies &amp; Practices</legend>
									<div className="control-group">
										<p>
											JobStreet.com does not accept job advertisements that
											discriminate against race, religion, age, gender, family
											status or disability. It is against the law in some
											countries* and your company may have internal policies
											against such practices. JobStreet.com will not bear any
											responsibility for any consequences that may arise from the
											inappropriateness of such job postings.
										</p>
										<p>
											<strong>
												*For Singapore job postings, refer to the guidelines{' '}
												<a href="#">here</a>
											</strong>.
										</p>
									</div>
								</fieldset>
								<div className="form-group">
                                    <TextEditor></TextEditor>
									<span className="help-block" style={{ display: 'none' }}>
										Job Description is required with minimal 300 characters
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}
