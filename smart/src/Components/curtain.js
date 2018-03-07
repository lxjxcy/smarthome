import React, {
	Component
} from "react"
import "../style/curtain.css"
import pic from "../assets/pic.png"
import caidan from "../assets/caidan.png";
import colose from "../assets/closed.png";
import stop from "../assets/stop.png";
import start from "../assets/start.png"
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

class Curtain extends Component {
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
			<div id="curtain">
			    <div className="curtain_1 control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>普通窗帘</p>
						</li>
						<li id="colosed">已关闭</li>
						<li><Switch onChange={onChange_1} checkedChildren="开" unCheckedChildren="关" defaultChecked=""/></li>
					</ul>
				</div>
				<div className="curtain_2 control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>杜亚窗帘</p>
						</li>
						<li>已关闭</li>
						<li><img src={caidan} onClick={this.showModal('modal1')}/></li>
						<Modal
					          visible={this.state.modal1}
					          transparent
					          maskClosable={false}
					          onClose={this.onClose('modal1')}
					          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
					          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
					        >
				          <div className="modleCurtain">
				          		<div className="start">
				          			<img src={start}/>
				          			<div>开启</div>
				          		</div>
				          		<div className="mileage">
				          				<input type="checkbox"/>
		                                <span className="curtainmineage">窗帘行程:</span>
				          				<span className="add">+</span>
				          				<span className="number">80%</span>
				          				<span className="reduce">-</span>

				          		</div>
				          		<div className="StopClose">
				          			<div className="Stop">
				          				<img src={stop}/>
				          				<div>暂停</div>
				          			</div>
				          			<div className="Close">
				          				<img src={colose}/>
				          				<div>关闭</div>
				          			</div>
				          		</div>
				          </div>
        				</Modal>
					</ul>
				</div>
			


			</div>


		)
	}
}

export default Curtain;