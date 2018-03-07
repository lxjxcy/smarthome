import React, {
	Component
} from "react";
import "../style/sensor.css"
import caidan from "../assets/caidan.png";
import pic from "../assets/pic.png";
import "../style/antd.css"
import colose from "../assets/close.png"
import {
	Switch,
	Icon
} from 'antd';
import {
	Modal,
	List,
	Button,
	WhiteSpace,
	WingBlank
} from 'antd-mobile';

function onChange_1(checked) {

	console.log(`switch to ${checked}`);
	if (checked == true) {
		document.getElementById("colosed").innerHTML = "已开启"
	} else {
		document.getElementById("colosed").innerHTML = "已关闭"
	}
}

function onChange(checked) {

	console.log(`switch to ${checked}`);

}

function closest(el, selector) {
	const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	while (el) {
		if (matchesSelector.call(el, selector)) {
			return el;
		}
		el = el.parentElement;
	}
	return null;
}
class Sensor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal1: false,
			switch: "已开启"
		};
	}
	showModal = key => (e) => {
		e.preventDefault(); // 修复 Android 上点击穿透
		this.setState({
			[key]: true,
		});
	}
	onClose = key => () => {
		this.setState({
			[key]: false,
		});
	}

	onWrapTouchStart = (e) => {
		// fix touch to scroll background page on iOS
		if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
			return;
		}
		const pNode = closest(e.target, '.am-modal-content');
		if (!pNode) {
			e.preventDefault();
		}
	}
	render() {
		return (
			<div id="sensor">
				<div className="sensor_1 control">
					<ul>
						<li>
						  <img src={pic}/>
						  <p>传感器</p>
						</li>
						<li>已开启</li>
						<li><img src={caidan} onClick={this.showModal('modal1')}/></li>
						<Modal
					          visible={this.state.modal1}
					          transparent
					          maskClosable={false}
					          onClose={this.onClose('modal1')}
					          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
					          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
					        >
				          <div className="ModelSensor">
				           	<div className="closeswitch">
				           		<img src={colose}/><br/>
				           		<div>关闭</div>
				           	</div>
				           	<div className="sensordetail">
					           	<ul>
					           		<li>触发报警:</li>
					           		<li><Switch onChange={onChange} checkedChildren="开" unCheckedChildren="关"/></li>
					           	</ul>
					           		<ul>
					           		<li>防拆报警:</li>
					           		<li><Switch onChange={onChange} checkedChildren="开" unCheckedChildren="关"/></li>
					           	</ul>
					           		<ul>
					           		<li>低电量报警:</li>
					           		<li><Switch onChange={onChange} checkedChildren="开" unCheckedChildren="关"/></li>
					           	</ul>
					           	<ul className="last">
					           		<li>电池电量:</li>
					           		<li>80</li>
					           	</ul>
				           		
				           	</div>

				          </div>
        				</Modal>
					</ul>
				</div>
		       <div className="sensor_2 control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>门窗传感器</p>
						</li>
						<li></li>
						<li><Switch onChange={onChange} checkedChildren="开" unCheckedChildren="关"/></li>
					</ul>
				</div>
				 <div className="sensor_3 control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>温度传感器</p>
						</li>
						<li>26</li>
						<li><Switch onChange={onChange} checkedChildren="开" unCheckedChildren="关"/></li>
					</ul>
				</div>
				 <div className="sensor_4 control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>开关</p>
						</li>
						<li id="colosed">已关闭</li>
						<li><Switch onChange={onChange_1} checkedChildren="开" unCheckedChildren="关" defaultChecked=""/></li>
					</ul>
				</div>
			</div>
		)
	}
}
export default Sensor;