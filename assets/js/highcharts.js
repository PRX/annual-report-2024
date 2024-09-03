(() => {
	if (!Highcharts) return;

	Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});

	// Data retrieved from https://netmarketshare.com/
	// Make monochrome colors
	const colors = Highcharts.getOptions().colors.map((c, i) =>
		// Start out with a darkened base color (negative brighten), and end
		// up with a much brighter color
		Highcharts.color(Highcharts.getOptions().colors[0])
			.brighten((i - 3) / 7)
			.get()
	);

	const defaultOptions = {
		chart: {
			height: '80%',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			align: 'center'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>${point.y:,.2f}</b>'
		},
		accessibility: {
			point: {
				valuePrefix: '$'
			}
		},
		plotOptions: {
			series: {
				dataLabels: {

				}
			},
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				colors,
				borderRadius: 5,
				showInLegend: true,
				dataLabels: {
					enabled: false,
				}
				
			},
			
		}
	};

	// Build the chart
	Highcharts.chart('highchart-revenue', {
		...defaultOptions,
		title: {
			...defaultOptions.title,
			text: 'PRX Revenue'
		},
		series: [{
			name: 'Revenue',
			data: [
				{ name: 'Underwriting', y: 12801442, color: '#003A57' },
				{ name: 'Operating Activities', y: 11567053, color: '#CA3D15' },
				{ name: 'Grants', y: 4729519, color: '#0089BD' },
				{ name: 'Individual Gifts', y: 1641345, color: '#FB9306' },
				{ name: 'Other', y: 1325191, color: '#A1C5E2' }
			]
		}]
	});

	Highcharts.chart('highchart-expense', {
		...defaultOptions,
		title: {
			...defaultOptions.title,
			text: 'PRX Expenses'
		},
		series: [{
			name: 'Expenses',
			data: [
				{ name: 'Support for Creators', y: 15061154, color: '#003A57' },
				{ name: 'Content Production and Distribution', y: 19388411, color: '#CA3D15'},
				{ name: 'Administrative', y: 2845813, color: '#0089BD' },
				{ name: 'Fundraising', y: 1519341, color: '#A1C5E2' }
			]
		}]
	});
})();