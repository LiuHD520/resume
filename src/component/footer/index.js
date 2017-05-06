import React, { Component } from 'react';
import { EnvView } from '$router';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';


class Footer extends Component {
    render() {
        return (
          
                <ul className="yo-tab yo-tab-view" style={{background:'url("/self-liu/img/bg03.png") no-repeat',backgroundSize:"100% 100%"}}>


                    <li className="item item-y-ico">
                        <Touchable touchClass="touchable-opacity" onTap={() => {
				                         	        yoHistory.push('/home'); 
				                         	     }}>
                                <a>
                                <i className="yo-ico"></i>
                                 首页
                                </a>
                               
                          
                        </Touchable>

                        </li>


                        <li className="item item-y-ico item-on">
                             <Touchable touchClass="touchable-opacity" onTap={() => {
				                         	        yoHistory.push('/list'); 
				                         	     }}>
                                <a>
                                <i className="yo-ico"></i>
                                  技能
                                </a>
                               
                          
                        </Touchable>
                            </li>


                            <li className="item item-y-ico">
                                 <Touchable touchClass="touchable-opacity" onTap={() => {
				                         	        yoHistory.push('/detail'); 
				                         	     }}>
                                <a>
                                <i className="yo-ico"></i>
                                项目
                                </a>
                               
                          
                        </Touchable>
                                </li>
                                 <li className="item item-y-ico">
                                 <Touchable touchClass="touchable-opacity" onTap={() => {
				                         	        yoHistory.push('/about'); 
				                         	     }}>
                                <a>
                              <i className="yo-ico"></i>
                                自我
                                </a>
                               
                          
                        </Touchable>
                                </li>
              </ul>
        )
    }
}

export default Footer;
