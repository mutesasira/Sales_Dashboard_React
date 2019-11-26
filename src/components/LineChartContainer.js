import React from 'react';
import 'hammerjs';

import {
	Chart,
	ChartSeries,
	ChartSeriesItem,
	ChartCategoryAxis,
	ChartCategoryAxisItem,
} from '@progress/kendo-react-charts';

const categories = ['Jan', 'Feb', 'Mar', 'Apr'];

export const LineChartContainer = () =>
	<Chart>
		<ChartCategoryAxis>
			<ChartCategoryAxisItem categories={categories} />
		</ChartCategoryAxis>
		<ChartSeries>
			<ChartSeriesItem type="verticalLine" data={[1, 2, 3, 5]} />
			<ChartSeriesItem type="verticalLine" data={[-1, -2, -3, -5]} />
		</ChartSeries>
	</Chart>;
