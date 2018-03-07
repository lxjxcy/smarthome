import React, {
	Component
} from "react";
import "../style/modle.css";
import {
	List,
	Switch
} from 'antd-mobile';
import {
	createForm
} from 'rc-form';
import Deliog from "./deliog"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



let SwitchExample = (props) => {
	const {
		getFieldProps
	} = props.form;
	var storage = window.localStorage;
	var storages = storage.getItem("checked");
	var hasAuth = '$!auth' === 'true';
	var hasAuth = storages === 'true'
	return (
		<List>
    
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch1', {
            initialValue: hasAuth,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked);
				storage.setItem("checked", checked);
          }}
        />}
      >工作模式</List.Item>
    </List>
	);
};
SwitchExample = createForm()(SwitchExample)

class Modle extends Component {
	constructor() {
		super()
		this.showevent = this.showevent.bind(this)
		this.modleshow = this.modleshow.bind(this)
		this.closeevent = this.closeevent.bind(this)
		this.state = {
			isshow: false
		}
	}
	showevent() {
		console.log("sdxdd")
		this.setState({
			isshow: true
		})
	}
	modleshow() {
		console.log("sdxdd")
		this.setState({
			isshow: true
		})
	}

	closeevent() {
		this.setState({
			isshow: false
		})
	}


	update(picker) {
		console.log("23243")
		// document.getElementById('rgb').innerHTML =
		// 	Math.round(picker.rgb[0]) + ', ' +
		// 	Math.round(picker.rgb[1]) + ', ' +
		// 	Math.round(picker.rgb[2]);

		// document.getElementById('hsv').innerHTML =
		// 	Math.round(picker.hsv[0]) + '&deg;, ' +
		// 	Math.round(picker.hsv[1]) + '%, ' +
		// 	Math.round(picker.hsv[2]) + '%';
	}


	componentDidMount() {
		console.log(this.refs.ipt.value)
		// document.getElementById('rect').style.backgroundColor = '#' + this.refs.ipt.value;
	}
	componentDidUpdate(prevProps, prevState) {


	}
	componentWillUnmount() {

	}
	render() {
		return (
			<div id="modle">
					<div className="chuang">
						<ul>
							<li >灯光颜色<span onClick={()=>{this.modleshow()}}>蓝色</span></li>
							<li >灯光亮度<span onClick={()=>this.showevent()}>></span>
	                        </li> 
	                        <input type="color"></input> 
	                    </ul>

	                  
		<SwitchExample/>
						<input className="jscolor" onChange={()=>this.update(this.refs.ipt.value)} value="cc66ff" ref="ipt"/>
						<div style={{position:"absolute",right:"0px",top:"200px",lineHeight: "30px"}}>
						    toHEXString = <span id="hex-str"></span><br />
						    R, G, B = <span id="rgb"></span><br />
                        </div>
	                      
                      
						

					</div>
					 <ReactCSSTransitionGroup
			        transitionName="amit"
			        transitionEnterTimeout={500}
			       transitionLeaveTimeout={600}> 

					  {
                        	this.state.isshow?
                        	<Deliog close={this.closeevent}></Deliog>
                        	:null
                       }
			   </ReactCSSTransitionGroup>



			</div>
		)
	}
}
export default Modle
// <input className="jscolor" onChange={()=>this.update(this.refs.ipt.value)} value="cc66ff" ref="ipt"/>
// 						    <p id="rect" className="colorjs"></p>