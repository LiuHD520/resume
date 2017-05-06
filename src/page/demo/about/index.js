import React, { Component } from 'react';
import { Scroller, Touchable,List } from '$yo-component';
import Header from '$component/header/index.js';
import yoHistory from '$common/history';
import './index.scss';
import axios from 'axios';
import Footer from '$component/footer/index.js';
var flag = true;
var scan = null;
class DetailPage extends Component {
	constructor() {
        super();
        this.state = {
            dataSource: [{ text: null, key: 0}]
        };
    }
	componentWillMount(){
		var that=this;
			axios.get('http://www.liuhedong.online/conn/conn.php')
                .then(function (response) {
                   that.setState({
                dataSource:response.data
            })

            
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    refresh(){
		this.setState({dataSource:getRandomDataSource(25)});
	}
	fetch(){
		this.setState({dataSource:this.state.dataSource.concat(getRandomDataSource(15))});
	}
    render() {
        if(!this.state.dataSource[0]){
             return (<div>我正在请求数据哦</div>)
        }else{       
            return (
                    
                    <div className="yo-flex" id="pro" style={{minHeight:"400px"}}>
                        <Header title="项目详情页" right={{ title: 二维码, onTap: () => scan1() }}/>
                        <List
                            ref="list"
                            extraClass="flex m-list"
                            dataSource={this.state.dataSource}
                            renderItem={(item,i)=> 
                                    <div className="yo-card" style={{width:"100%",margin:"10px",border:"1px solid #999",borderBottom:"2px solid #999",marginBottom:"0px",marginLeft:"10px",borderRadius:"10px"}}>
										               <div>
														<img className="img-cover" src={item.url} style={{width:"80px",height:"80px",borderRadius:"50%",float:"left",margin:"10px",marginTop:"4px",marginBottom:"4px"}}/>
													   <div style={{float:"left",marginTop:"10px"}}>
															<h2 className="title">{item.name}</h2>
															<div style={{width:"195px",wordWrap:"break-word",lineHeight:"18px"}}><strong>评语：</strong>{item.posts}</div>
													   </div>
													   </div>
                                                       <img className="img-cover" src={item.image} style={{width:"100%",height:"170px"}}/>
                                                       
                                                       <p className="desc" style={{paddingLeft:"10px",paddingRight:"10px",lineHeight:"20px",marginTop:"5px",marginBottom:"5px"}}><strong>描述：</strong>{item.reportto}</p>
                                                       <div style={{paddingLeft:"10px",paddingRight:"10px",lineHeight:"20px",marginBottom:"5px"}}><strong>感悟人生：</strong>{item.peoples}</div>
                                                       
                                                    </div>
                                }
                        />
                        <Footer/>
                    </div>
                   
                )
            }
    }
}
let guid=-1;
function getArrayByLength(length){
	var ret=[];
	for(var i=0;i<length;i++){
		ret[i]=null;
	}
	return ret;
}
function getRandomList(size){
	return getArrayByLength(size).fill(1).map(num=>parseInt(Math.random()*100));
}
function getRandomDataSource(size){
	return getRandomList(size).map(num => ({text:num,key:++guid}));
}

function scan1() {
  document.addEventListener( "plusready", onPlusReady, false );
  function onmarked( type, result ) {
    var text = '未知: ';
    switch(type){
      case plus.barcode.QR:
      text = 'QR: ';
      break;
      case plus.barcode.EAN13:
      text = 'EAN13: ';
      break;
      case plus.barcode.EAN8:
      text = 'EAN8: ';
      break;
    }
    alert( text+result );
  }
  function onPlusReady() {
    var e = document.getElementById("scan");
    e.removeAttribute( "disabled" );
  }
  if(flag){
  scan = new plus.barcode.Barcode('pro');
  scan.onmarked = onmarked; 
    scan.start();
    flag=false;
  }else{
    scan.close();
    flag=true;
  }
}
export default DetailPage;
