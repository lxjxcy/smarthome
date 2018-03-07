import React, {
	Component
} from "react";
import ReactSwipe from 'react-swipe';
import slider from '../assets/2.png';
import leftimg from "../assets/7.png"
import leftimg5 from "../assets/5.png"
import leftimg6 from "../assets/6.png"
import {
	Carousel,
	WhiteSpace,
	WingBlank
} from 'antd-mobile';
import axios from "axios"
import "../style/find.css"
class Find extends Component {
	constructor() {
		super()
		this.state = {
			getlist: []
		}
	}
	componentDidMount() {
		axios.get("find.json")
			.then((res) => {
				console.log(res)
				this.setState({
					getlist: res.data.data.billboards
				})
			})
	}
	render() {
		return (
			<div id="find">
				<nav>
				 <Carousel autoplay={true} infinite>
				         <div><img src={slider}/></div>
				    	 <div><img src={slider}/></div>
				   		 
		           </Carousel>
						
				</nav>
				<main>
				{
					this.state.getlist.map((item,index)=>{
						return (
		 				    <figure key={item.id}>
				                 <figcaption><img src={leftimg}/></figcaption>
				                 <ul>
				   					<li><h3>{item.title}</h3><span>{item.gettime}分钟前</span></li>
				   					<li><p>{item.artcle}</p></li>		   					
				   			     </ul>
						    </figure>
						)
					})
				}				    
				</main>
				</div>
		)
	}
}
export default Find;
// <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000,pagination : true,}}>			                   
// 			                		<img src={slider}/>
// 			                		<img src={slider}/>		

// 		            </ReactSwipe>