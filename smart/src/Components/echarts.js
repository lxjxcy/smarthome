import React, {
	Component
} from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts extends Component {
	componentDidMount() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('main'));
		// 绘制图表
		myChart.setOption({
			xAxis: {
				type: 'category',
				boundaryGap: false,
				axisLine: {
					lineStyle: {
						type: 'solid',
						color: '#85888e',
						width: '1'
					}
				},
				splitLine: {
					show: false
				}, //去除网格线
				splitArea: {
					show: false
				}, //保留网格区域
				data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
				axisLabel: {
					textStyle: {
						color: '#fff', //坐标值得具体的颜色

					}
				}
			},
			// backgroundColor: "#85888e",

			yAxis: {
				type: '',
				data: '',
				axisLabel: {
					show: false,
					textStyle: {
						color: '#fff'
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						type: 'solid',
						color: '#85888e',
						width: '1'
					}
				},
			},
			series: [{
				name: '电量',
				type: 'line',
				label: {
					normal: {
						show: true,
						color: "#fff",
						position: 'top'
					}
				},
				symbol: 'heart', //拐点样式
				symbolSize: 4, //拐点大小
				textStyle: {
					color: '#fff',
					type: 'default',

				},
				areaStyle: {
					color: '#85888e',

				},
				itemStyle: {
					normal: {
						color: "#FFF",
						lineStyle: {
							color: "#85888e"
						}
					}
				},
				data: [0.03, 0.01, 0.03, 0.03, 0.01, 0.02, 0.02]
			}]
		});
	}
	render() {
		return (
			<div id="main" style={{ width:"100%", height:"160px",position: "relative",top:"-20px"}}></div>
		);
	}
}

export default Echarts;