import React, { Component } from 'react';
import { List } from '$yo-component';
import Header from '$component/header/index.js';

import yoHistory from '$common/history';
import './index.scss';
import axios from 'axios';
import Footer from '$component/footer/index.js';
class Detail extends Component {
	
    constructor() {
        super();
        this.state = {
            dataSource: [{ text: null, key: 0}]
        };
    }
	componentWillMount(){
		var that=this;
			axios.get('http://www.liuhedong.online/conn/conn02.php')
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
	render(){
		if(!this.state.dataSource[0]){
        	 return (<div>我正在请求数据哦</div>)
        }else{
        	return (

			<div className="yo-flex">
                <Header title="列表" right={{ title: '拍照', onTap: () => captureImage() }} />
                <List
				   ref="list"
				   extraClass="flex m-list"
				   dataSource={this.state.dataSource}
				   renderItem={(item,i)=> 
					   
					 
						   <a href="#" className="item yo-card" style={{boxSizing:"border-box",paddingTop:"10px",paddingBottom:"10px",paddingRight:"10px",color:"black",marginLeft:"10px",display:"block",width:"100%"}}>
						   <img src={item.img} style={{width:"100px",height:"60px",float:"left",marginTop:"15px",marginRight:"10px"}}/>
						   <div className="flex" style={{float:"right",width:"220px",overflow:"hidden"}}>
							   
							   <div className="info"><b className="title" style={{float:"left"}}>{item.level+' : '+item.category}</b><span style={{float:"right"}}>{item.time}年</span></div>
							   <p className="detail" style={{clear:"both",lineHeight:"18px"}}>{item.name}</p>
							   </div>
							   
					 </a>
                    
                
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
/*function scan(){
   $.ajax({
		type:'post',
		url:'http://www.liuhedong.online/php/getsign.php',
		data:{
			url:window.location.href
		},
		dataType:'json'
	}).done(function(res){



	wx.config({
	 
	    appId: res.appId,
	    timestamp: res.timestamp,
	    nonceStr: res.nonceStr,
	    signature: res.signature,
	    jsApiList: [
	  
	      'scanQRCode'
	    ]
 	 });
	  wx.ready(function () {
		
		    wx.scanQRCode({
		        needResult: 0, 
		        scanType: ["qrCode","barCode"], 
		        success: function (res) {
		          var result = res.resultStr; 
		     
		        }
		    });


	  });

	})
}*/

// 拍照
function captureImage(){
	var cmr = plus.camera.getCamera();
	var res = cmr.supportedImageResolutions[0];
	var fmt = cmr.supportedImageFormats[0];
	console.log("Resolution: "+res+", Format: "+fmt);
	cmr.captureImage( function( path ){
			alert( "Capture image success: " + path );  
		},
		function( error ) {
			alert( "Capture image failed: " + error.message );
		},
		{resolution:res,format:fmt}
	);
}
export default Detail; 

