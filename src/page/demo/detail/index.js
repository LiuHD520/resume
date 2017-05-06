import React, { Component } from 'react';
import { Scroller, Touchable,List } from '$yo-component';
import Header from '$component/header/index.js';
import yoHistory from '$common/history';
import './index.scss';
import axios from 'axios';
import Footer from '$component/footer/index.js';
class DetailPage extends Component {
	constructor() {
        super();
        this.state = {
            dataSource: [{ text: null, key: 0}]
        };
    }
	componentWillMount(){
		var that=this;
			axios.get('http://www.liuhedong.online/conn/conn03.php')
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
                    
                    <div className="yo-flex">
                        <Header title="项目列表"/>
                        <List
                            ref="list"
                            extraClass="flex m-list"
                            dataSource={this.state.dataSource}
                            renderItem={(item,i)=> 
                                
                               
                                    <div className="yo-card">
                                        <h3 className="hd">{item.category}</h3>
                                        <div className="bd cols">
                                            <img className="img-cover" src={item.image} style={{width:"240px",height:"180px",margin:"0 auto"}}/>
                                            </div>
                                            <div className="flex" style={{padding:"10px"}}>
                                                <h4 className="title">{item.name}</h4>
                                                <p className="desc"><strong>描述：</strong>{item.description}</p>
                                                </div>
                                                
                                                <div style={{padding:"10px"}}>
                                                    <div><strong>花费时间：</strong>{item.detail}</div>
                                                    <div><strong>技术：</strong>{item.tech}</div>
                                                    </div>
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
export default DetailPage;
