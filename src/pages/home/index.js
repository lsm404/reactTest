import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from './store';

import {
    HomeWrapper,
    HomeLeft,
    FirstItem
} from './style'

class Home extends PureComponent {
    render () {
        return (
            <HomeWrapper>
                
                <HomeLeft>
                     <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                </HomeLeft>
                <FirstItem>
                    github建立仓库，测试提交代码
                </FirstItem>
            </HomeWrapper>
        )
    }
}

export default Home;