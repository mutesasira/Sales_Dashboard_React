import React from 'react';
import 'hammerjs';

import {
	Chart,
	ChartLegend,
	ChartSeries,
	ChartSeriesItem,
} from '@progress/kendo-react-charts';

import {pieChartData} from '../data/appData';

export const PieChart = () =>
	<Chart
		seriesColors={[
			'orange',
			'#FFFF00',
			'blue',
			'red',
			'green',
			'purple',
			'black',
			'#00FFFF',
		]}>
		<ChartLegend position="top" />
		<ChartSeries>
			<ChartSeriesItem
				type="pie"
				data={pieChartData}
				field="value"
				categoryField="category"
			/>
		</ChartSeries>
	</Chart>;
