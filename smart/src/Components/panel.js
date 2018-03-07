import React, {
	Component
} from "react"
import "../style/panel.css"
import pic from "../assets/pic.png"
import caidan from "../assets/caidan.png";
import colose from "../assets/close.png";
import drop_down from "../assets/down.png";
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
		document.getElementById("colosed").innerHTML = "已开启警告"
	} else {
		document.getElementById("colosed").innerHTML = "已关闭警告"
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

class Panel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal1: false,
			switch: "已开启警告"
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
			<div id="panel">
			    <div className="panel_1 control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>sos板面</p>
						</li>
						<li id="colosed">已关闭</li>
						<li><Switch onChange={onChange_1} checkedChildren="开" unCheckedChildren="关" defaultChecked=""/></li>
					</ul>
				</div>
				<div className="panel_2 control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>空调</p>
						</li>
						<li>
							<h4>
								<p><span>制热</span></p>
								<p><span>中风</span></p>
								<p><span>22度</span></p>
							</h4>
						</li>
						<li><img src={caidan} onClick={this.showModal('modal1')}/></li>
						<Modal
					          visible={this.state.modal1}
					          transparent
					          maskClosable={false}
					          onClose={this.onClose('modal1')}
					          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
					          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
					    >
				          <div>
				          		<div className="closes">
				          			<img src={colose}/>
				          			<div>关机</div>
				          		</div>
				          		<div className="paneldetail">
				          			<ul>
				          				<li>运行模式:</li>
					          				<li>
				          				        <span>制热</span>
				          				        <img src={drop_down}/>
				          			     </li>
				          			</ul>
				          			<ul>
				          				<li>风量:</li>
				          				<li>
				          				    <span>中风</span>
				          				    <img src={drop_down}/>
				          				</li>
				          			</ul>
				          			<ul>
				          				<li>温度:</li>
				          				<li>
				          				    <span>22度</span>
				          				    <img src={drop_down}/>
				          				</li>
				          			</ul>

				          		</div>
				          </div>
        				</Modal>
					</ul>
				</div>
			


			</div>


		)
	}
}

export default Panel;