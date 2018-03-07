import React, {
	Component
} from "react"
import "../style/doorlock.css"
import pic from "../assets/pic.png"
import caidan from "../assets/caidan.png";
import colose from "../assets/close.png";

import {
	Modal,
	List,
	Button,
	WhiteSpace,
	WingBlank
} from 'antd-mobile';

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



class Doorlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal1: false,

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

	componentDidMount() {

	}



	render() {
		return (
			<div id="doorlock">
				 <div className="doorlock control">
					<ul>
						<li>
							<img src={pic}/>
						    <p>门</p>
						</li>
						<li className="list_2">
							<h4>
								<p>已关门</p>
							    <p>电量剩余50%</p>
							</h4>
							
						</li>
						<li><img src={caidan} onClick={this.showModal('modal1')}/></li>
					</ul>
					<Modal
				          visible={this.state.modal1}
				          transparent
				          maskClosable={false}
				          onClose={this.onClose('modal1')}
				          footer={[{ text: 'Ok', onPress: () => { console.log('ok');
				          console.log("关闭")




				           this.onClose('modal1')(); } }]}
				          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
				        >
		                <div>
		                	<div className="closesocket">
				           		<img src={colose}/><br/>
				           		<div>关闭插座</div>
				           	</div>
				           

			            
			            </div>
                  </Modal>
				</div>
			</div>

		)
	}
}
export default Doorlock;