import React, { Component } from 'react';
import styles from './AdditionalOptions.css';

export default class AdditionalOptions extends Component {
	render() {
		return (
			<form action="#" className="form-horizontal">
				<div className="panel form">
					<br />
					<div className="panel-body">
						<div className="col-sm-10 col-sm-offset-1">
							<h4>Additional Options</h4>
							<hr />
							<div className="col-sm-10 col-sm-offset-1">
								<div className="form-group">
									<div className="form-inline col-sm-12">
										<strong className="form-group control-label">
											Posting Site <span className="text-danger">*</span>:
										</strong>
										<div className="form-group">
											<label className="checkbox-inline">
												<input type="checkbox" />
												<span>Indonesia</span>
											</label>
											<label className="checkbox-inline">
												<input type="checkbox" checked="" />
												<span>Malaysia</span>
											</label>
											<label className="checkbox-inline">
												<input type="checkbox" />
												<span>Indonesia</span>
											</label>
											<label className="checkbox-inline">
												<input type="checkbox" />
												<span>Philippines</span>
											</label>
											<label className="checkbox-inline">
												<input type="checkbox" />
												<span>Vietnam</span>
											</label>
										</div>
									</div>
									<label>
										<input id="fieldBuySOL" type="checkbox" name="buySOL" />
										<strong>
											<span> Standout Listing: Make your job ad stand out</span>
											<span
												className="text-danger"
												id="solMsg"
												style={{ display: 'none' }}
											>
												(Deduct 1 Standout Listing credit)&nbsp;
											</span>
										</strong>
										<br />
										<span>
											Enhance your listed advertisement with additional selling
											points, a logo and color frame.
										</span>
									</label>
								</div>
								<div
									className="form-group"
									id="solSellingPoint"
								>
									<div className="panel">
										<div className="col-md-5 col-sm-6 sol-img hidden-sm hidden-xs">
											<div className="sol-info img-responsive" />
										</div>
										<div className="panel-body">
											<div className="form-group">
												<div className="col-md-7 col-sm-8">
													<input
														id="fieldSellingPoint1"
														name="selling_points"
														className="form-control"
														placeholder="Enter Selling Point 1"
														maxLength="65"
													/>
												</div>
											</div>
											<div className="form-group">
												<div className="col-md-7 col-sm-8">
													<input
														id="fieldSellingPoint2"
														name="selling_points"
														className="form-control"
														placeholder="Enter Selling Point 2"
														maxLength="65"
													/>
												</div>
											</div>
											<div className="form-group">
												<div className="col-md-7 col-sm-8">
													<input
														id="fieldSellingPoint3"
														name="selling_points"
														className="form-control"
														placeholder="Enter Selling Point 3"
														maxLength="65"
													/>
												</div>
											</div>
											<div className="has-error">
												<span
													className="help-block"
													style={{ display: 'none' }}
												>
													The selling points are required
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-10 col-sm-offset-1">
								<div className="well well-sm">
									<a
										data-toggle="collapse"
										data-target="#addOption"
										aria-expanded="false"
										aria-controls="addOption"
										className="btn-block a-no-deco"
									>
										More Options<span
											className="icon-positive pull-right"
											style={{ fontSize: '1em' }}
										/>
									</a>
									<div className="collapse" id="addOption">
										<hr className="HR" />
										<div className="form-group">
											<label className="col-sm-2 control-label control-label-left">
												Posting Date
											</label>
											<div className="col-sm-5">
												<div
													className="input-group date"
													data-provide="datepicker"
												>
													<input type="text" className="form-control" />
													<div className="input-group-addon">
														<span className="icon-calendar" />
													</div>
												</div>
											</div>
										</div>
										<label>
											<input
												id="fieldBlindFlag"
												type="checkbox"
												name="blind_flag"
											/>
											<span>
												{`
												Advertise as Company Confidential (Hide my Company
												Name in Job Ad)
												`}
											</span>
										</label>
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
