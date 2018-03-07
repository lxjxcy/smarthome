import React, {
	Component
} from "react"
import {
	Modal,
	List,
	Button,
	WhiteSpace,
	WingBlank,
	Slider
} from 'antd-mobile';
import "../style/tan.css"

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

class Tan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal1: false,
			modal2: false,
			numvalue: "100%",
			modelnum: ''
		};
	}
	log = (name) => {
		return (value) => {
			console.log(`${name}: ${value}`);
			var aaa = `${value}%`
			this.setState({
				modelnum: aaa
			})
		};
	}
	showModal = key => (e) => {
		e.preventDefault(); // 修复 Android 上点击穿透
		var chu = this.refs.butt.props.children;
		var chus = (chu.substring(0, chu.length - 1))
		console.log("灯光亮度")
		// console.log(typeof chus)
		this.setState({
			[key]: true,
			modelnum: chu
		});
	}
	showModal_1 = key => (e) => {
		e.preventDefault(); // 修复 Android 上点击穿透
		console.log("窗帘控制")

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
		var startnum = this.state.numvalue;
		var startnums = (startnum.substring(0, startnum.length - 1))
		return (
			<div>
		<WingBlank>
		<Button onClick={this.showModal('modal1')} ref="butt">{this.state.numvalue}</Button>
        <WhiteSpace />
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="灯光亮度"
          footer={[{ text: 'Ok', onPress: () => {
          	var changenum = this.state.modelnum
          	this.setState({
          		numvalue:changenum
          	})
         		

          	console.log('ok'); this.onClose('modal1')(); } }]}
          wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
        <div>{this.state.modelnum}</div>
        <div style={{height:"80px"}}>
        	<WingBlank size="lg">
          <Slider
            style={{ marginLeft:0, marginRight: -20 }}
            defaultValue={parseInt(startnums)}
            min={0}
            max={100}
            onChange={this.log('change')}
            onAfterChange={this.log('afterChange')}
          />
        </WingBlank>
        </div>
        </Modal>
      </WingBlank>
				
				 


			</div>

		)
	}
}

export default Tan;