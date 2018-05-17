import React from 'react';
import ReactDOM from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import { Provider } from 'react-redux';
import { renderStylesToString } from 'emotion-server';
import flushChunks from 'webpack-flush-chunks';
import App from '../src/routes/Routes';
import configureStore from '../src/configureStore';
import { StaticRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

export default ({ clientStats }) => (req, res) => {
	const store = configureStore();
	const initialState = JSON.stringify(store.getState());
	const context = {};

	const app = renderStylesToString(
		ReactDOM.renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					<Route component={App} />
				</StaticRouter>
			</Provider>
		)
	);
	const helmet = Helmet.renderStatic();
	const chunkNames = flushChunkNames();

	const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

	res.send(
		`<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
					<title>SiVA Recruitment Centre</title>
					<link rel="stylesheet" href="http://dna.jsstatic.com/siva/siva-1.6.4.css">
					<link rel="stylesheet" href="http://dna.jsstatic.com/pi/icon-font/2.3/icon-font.css">
					<link rel="stylesheet" href="http://dna.jsstatic.com/select2/select2.css">
					<link rel="stylesheet" href="http://dna.jsstatic.com/css/bootstrap-datepicker.min.css">
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
					<!-- Favicon -->
					<link rel="icon" type="image/ico" href="https://sivastage.jobstreet.com/assets/img/favicon.ico">
					<!-- End of Favicon -->
					
					<meta name="viewport" content="width=device-width,initial-scale=1.0">
				
					${helmet.title.toString()}
					${helmet.meta.toString()}
					${helmet.link.toString()}
          ${styles}
			<style>
				.stickyTopBar {
					padding: 10px 15px 10px 15px !important;
				}
			</style>
        </head>
        <body>
          <script>
            window.__INITIAL_STATE__ = ${initialState}
          </script>
          <div id="root">${app}</div>
          ${cssHash}
          ${js}
				</body>
				<!--// JAVASCRIPT //-->
				<script src="http://dna.jsstatic.com/js/jquery.js"></script>
				<script src="http://dna.jsstatic.com/js/bootstrap.js"></script>
				<script src="http://dna.jsstatic.com/js/siva.js"></script>
				<script src="http://dna.jsstatic.com/js/bootstrap-datepicker.min.js"></script>
				<script>

				// $(function() {
				// 	$('.datepicker').datepicker();
				// 	$('select, .select2-salary, .select2-employment').select2();
				// 	$('[data-toggle="popover"]').popover();

				// 	// Show Intern Terms & Unpay when select Internship in Employment Type
				// 	$('.select2-employment').on("select2:select", function (e) {
				// 		if($(this).val() == 'intern') {
				// 			$('.internterm-checkbox').show();
				// 		}else {
				// 			$('.internterm-checkbox').hide();
				// 		}
				// 	});

				// 	$('#fieldInternUnpaySalary').click(function(event){
				// 			if(this.checked) {
				// 					$('.select2-salary, #job_monthly_salary_min, #job_monthly_salary_max').prop("disabled", true);
				// 			}else{
				// 					$('.select2-salary, #job_monthly_salary_min, #job_monthly_salary_max').prop("disabled", false);
				// 			}
				// 	});

				// 	//POST COUNTRY SELECTION
				// 	$("#postCountry .post-my").change(function() {
				// 		if(this.checked) {
				// 			$("#selected-my, #specificArea").show();
				// 			}
				// 		else if ((this.unchecked)) {
				// 			$("#selected-my, #specificArea").hide();
				// 		}
				// 		else {
				// 			$("#selected-my, #specificArea").hide();
				// 		}
				// 	});
				// 	$("#postCountry .post-sg").change(function() {
				// 		if(this.checked) {
				// 			$("#selected-sg").show();
				// 			}
				// 		else if ((this.unchecked)) {
				// 			$("#selected-sg").hide();
				// 		}
				// 		else {
				// 			$("#selected-sg").hide();
				// 		}
				// 	});

				// 	// Show SOL fields
				// 	$('#fieldBuySOL').click(function(event){
				// 			if(this.checked) {
				// 					$('#solSellingPoint, #solMsg').show();
				// 			}else{
				// 					$('#solSellingPoint, #solMsg').hide();
				// 			}
				// 	});

				// 	// Toggle Error Message
				// 	$('#toggleError').click(function(){
				// 		$('.form-group').toggleClass('has-error');
				// 		$('.help-block').toggleClass('show');
				// 	});

				// });
				</script>

      </html>`
	);
};
