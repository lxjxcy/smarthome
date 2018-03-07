import React, {
	Component
} from "react"
import "../style/scenepanel.css"
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
	// if (checked == true) {
	// 	document.getElementById("colosed").innerHTML = "已开启"
	// } else {
	// 	document.getElementById("colosed").innerHTML = "已关闭"
	// }
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

class Quickpanel extends Component {
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
			<div id="quickpanel">
				<div className="quickpanel control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>快捷板面</p>
						</li>
						<li>未设置</li>
						<li><img src={caidan} onClick={this.showModal('modal1')}/></li>
						<Modal
					          visible={this.state.modal1}
					          transparent
					          maskClosable={false}
					          onClose={this.onClose('modal1')}
					          footer={[{ text: 'ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
					          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
					    >
				          <div className="binding">
				          		

				          		
				          </div>
        				</Modal>
					</ul>
				</div>
			


			</div>


		)
	}
}

export default Quickpanel;