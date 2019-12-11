import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from './store';

import {
    HomeWrapper
} from './style'

class Home extends PureComponent {
    render () {
        return (
            <HomeWrapper>github建立仓库，测试提交代码</HomeWrapper>
        )
    }
}

export default Home;