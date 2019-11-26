import {Dialog, DialogActionsBar} from '@progress/kendo-react-dialogs';
import {Input} from '@progress/kendo-react-inputs';
import {Button} from '@progress/kendo-react-buttons';
import {savePDF} from '@progress/kendo-react-pdf';
import '@progress/kendo-theme-material/dist/all.css';
import {Ripple} from '@progress/kendo-react-ripple';
import {BarChartContainer} from './components/BarChartContainer';
import {GridContainer} from './components/GridContainer';
import {PanelBarContainer} from './components/PanelBarContainer';
import {LineChartContainer} from './components/LineChartContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {PieChart} from './components/PieChart.js';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import React, {Component} from 'react';

import ReactDOM from 'react-dom';

import 'bootstrap-4-grid/css/grid.min.css';

import './App.css';

//import {DonutChartContainer} from './components/DonutChartContainer';
class App extends Component {
	constructor(props) {
		super(props);
		this.appContainer = React.createRef();
		this.state = {
			showDialog: false,
		};
	}

	handlePDFExport = () => {
		savePDF(ReactDOM.findDOMNode(this.appContainer), {paperSize: 'auto'});
	};
	handleShare = () => {
		this.setState(
			{
				showDialog: !this.state.showDialog,
			},
			() => console.log(this.state)
		);
	};

	render() {
		return (
			<Ripple>
				<div className="bootstrap-wrapper">
					<div
						className="app-container container"
						ref={el => (this.appContainer = el)}>
						<div className="row">
							<h1 className="navbar">
								{' '}ZIGA BRAKE LININGS SALES & STOCK MANAGEMENT SYSTEM
							</h1>
						</div>
						<Sidebar />
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<h1>Projection of the Data </h1>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<Header />
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<div className="row">
									<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
										<BarChartContainer />
									</div>
									<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
										<PieChart />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<GridContainer />
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 buttons-left">
								<Button primary={true} onClick={this.handleShare}>
									Share
								</Button>
								<Button onClick={this.handlePDFExport}>Download PDF</Button>
							</div>
						</div>
						{this.state.showDialog &&
							<Dialog title={'Share this report'} onClose={this.handleShare}>
								<p>Please enter the email address/es of the recipient/s.</p>
								<Input placeholder="albertmutesasira@gmail.com" />
								<DialogActionsBar>
									<Button primary={true} onClick={this.handleShare}>
										Share
									</Button>
									<Button onClick={this.handleShare}>Cancel</Button>
								</DialogActionsBar>
							</Dialog>}
					</div>
				</div>
			</Ripple>
		);
	}
}

export default App;
