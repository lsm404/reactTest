import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import cssObj from './css.css'
import {
    HeaderWrapper,
    Logo,
    SearchWrapper,
    NavSearch
} from './style';
import { actionCreators} from './store';
import { connect } from 'react-redux';

class Header extends Component {
    getListArea() {
        const { focused, list, handleInputFocus  } = this.props;
        console.log(focused)
    }
    render () {
        const { focused, list, handleInputFocus  } = this.props;
        console.log(focused)
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/ >
                </Link>
                <div style={cssObj} className='myPro'>
                    react项目
                </div>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused ? 'focused': ''}
                            onFocus={() => handleInputFocus(list)}
                        >

                        </NavSearch>
                    </CSSTransition>
                </SearchWrapper>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
// export default Header