import React, { Component } from 'react';
import { Scroller, Touchable,List,Carousel} from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import axios from 'axios';
import './index.scss';
class HomePage extends Component {
	constructor() {
        super();
        this.state = {
            dataSource:[]
        };
    }
	//请求ajax数据
	componentWillMount(){
		var that=this;
			axios.get('http://www.liuhedong.online/conn/conn.php')
					.then(function (response) {
						console.log(response);
						that.setState({
							dataSource:response.data
						})
					
					})
					.catch(function (error) {
						console.log(error);
					});
		}

    render() {
        if(!this.state.dataSource[0]){
        	 return (<div>正在请求数据</div>)
        }else{
            var flag= Save('boolean');
        	var age= !flag;
        	var arr=this.state.dataSource;
        	Save('boolean',age);
        	var arr1=[];
        	var list=this.state.dataSource[3];
        	var colors=["lightblue","pink","lightgreen","#ccc","lightred","lightpurple"]
        	
        	//console.log(list);
        	for(var idx in list){
        		var x=Math.floor(Math.random()*6)
        		arr1.push(
        			<span className="yo-btn" style={{background:colors[x]}} key={idx}>{this.state.dataSource[3][idx]}</span>
        		)
        	};
        	return (
        	
            <div className="yo-flex">
                {
                	flag ? <div className='yo-flex'>
                	<Header title="个人 * 信息" left={false} >
                   
                	</Header>
				                <Scroller extraClass="flex" onScroll={() => {
                }}>
				                
				                    <div className="header m-content headerimin" style={{height:"170px",paddingTop:"10px",background:'url("/self-liu/img/bg.jpg")',paddingBottom:"10px"}}>
				                          <Touchable touchClass="m-content-active" onTap={() => {
				                         	        yoHistory.push('/list'); 
				                         	     }}>
				                                 <div className="Header headerBg">
				                                 
				                                      <div className="headerImg">
				                                          <img src="/self-liu/img/header.png" style={{width:"100px",height:"100px",borderRadius:"50%",marginTop:"10px"}}/>
				                                      </div>
				                                      <div className="haeder-info">
				                                          <h3>姓&nbsp;&nbsp;&nbsp;名:&nbsp;&nbsp;&nbsp;刘&nbsp;合&nbsp;东</h3>
				                                          <p>性&nbsp;&nbsp;&nbsp;别:&nbsp;&nbsp;&nbsp;男 ♂</p>
				                                          <p>专&nbsp;&nbsp;&nbsp;业:&nbsp;&nbsp;&nbsp;计算机应用专业</p>
				                                      </div>
				                                   
				                                 </div>
				                          </Touchable>
				                    </div>
				                    <div className="yo-list yo-list-group yo-scroller content">
				                    	<h3 className="label" style={{background:"url('/self-liu/img/bg01.png')",backgroundSize:'100% 100%',color:'black',fontWeight:'900'}}>个人信息：</h3>
                                        
				                    	<div className="item" style={{background:'white',paddingLeft:"10px",paddingTop:"4px"}}><div className="mark"><i className="iconfont icon-huangguan"></i>&emsp;生&emsp;&emsp;日:</div><div className="flex">1994年6月5日</div></div>
				                    	<div className="item" style={{background:'white',paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-addressbook_fill"></i>&emsp;身份证号:</div><div className="flex">511521199406053251</div></div>
				                    	<div className="item" style={{background:'white',paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-dianhua"></i>&emsp;联系电话:</div><div className="flex">17682320832</div></div>
				                    	<div className="item" style={{background:'white',paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-coordinates_fill"></i>&emsp;地&emsp;&emsp;址:</div><div className="flex">杭州</div></div>
				                
				                    	
                                            

				                    	<h3 className="label" style={{background:"url('/self-liu/img/bg05.png')",backgroundSize:'100% 100%',color:'white',fontWeight:'900'}}>教育背景：</h3>
				                    	<div className="item" style={{background:"white",paddingLeft:"10px",paddingTop:"4px"}}><div className="mark"><i className="iconfont icon-praise_fill"></i>&emsp;学&emsp;&emsp;校:</div><div className="flex">新余学院</div></div>
				                    	<div className="item" style={{background:"white",paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-browse_fill"></i>&emsp;专&emsp;&emsp;业:</div><div className="flex">计算机应用</div></div>
				                    	<div className="item" style={{background:"white",paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-alarm_clock__"></i>&emsp;入&emsp;&emsp;学:</div><div className="flex">2012-2016</div></div>
				                    	<div className="item" style={{borderBottom:'solid #ccc 1px',background:"white",backgroundSize:'100% 100%',paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-group_fill"></i>&emsp;学&emsp;&emsp;历:</div><div className="flex">本科</div></div>
				                    
				                    	<h3 className="label" style={{background:"url('/self-liu/img/bg02.png')",backgroundSize:'100% 100%',color:'black',fontWeight:'900',marginBottom:'6px'}}>求职意向：</h3>
				                    	<div className="item" style={{background:"white",backgroundSize:'100% 100%',paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-lake__easyiconnet"></i>&emsp;工作类型:</div><div className="flex">全职</div></div>
	
				                    	<div className="item" style={{background:"white",backgroundSize:'100% 100%',paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-meijieguanli"></i>&emsp;求职意向:</div><div className="flex">&emsp;web前端应用开发工程师</div></div>
				                    	<div className="item" style={{borderBottom:'solid #ccc 1px',background:"white",backgroundSize:'100% 100%',paddingLeft:"10px"}}><div className="mark"><i className="iconfont icon-addition_fill"></i>&emsp;爱&emsp;&emsp;好:</div><div className="flex">钓鱼&emsp;<i className="iconfont icon-shore__easyiconnet"></i>&emsp;音乐&emsp;<i className="iconfont icon-yinle"></i></div></div>  
				                    	
				                    	
				                    	
				                    	
				                    </div>
									
				                </Scroller>
								<Footer>
							   </Footer>
            		 		</div> : <div className="yo-carousel" height="100%">
					 					<Carousel autoplay={false}>
										    <li className="item"><img className="img" src="/self-liu/img/index01.jpg"  style={{height:'600px',width:'400px'}}/></li>  
										  	<li className="item"><img className="img" src="/self-liu/img/index02.jpg"  style={{height:'600px',width:'400px'}} />
										        <Touchable touchClass="m-content-active inde" onTap={() => {
											        yoHistory.push('/'); 
											     }}>
										        <span className="yo-btn" id="btn-main">立即体验</span> 
										         </Touchable>
										  	</li>
										  	<li className="item"><img className="img" src="/self-liu/img/index03.jpg"  style={{height:'600px',width:'400px'}} />
										         
										  	</li>
										</Carousel>
					 				</div>
                }
            </div>
        
        )
        }
    } 
}

//存数据
function Save(name,data){
	
	if(data){
		return localStorage.setItem(name,data) ;
	}
	
	return  false  || localStorage.getItem(name);	
}


export default HomePage;
