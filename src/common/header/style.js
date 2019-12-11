import style from 'styled-components';
import logoPic from '../../statics/logo.svg';

export const HeaderWrapper = style.div`
    z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = style.div`
    width: 100px;
    height: 56px;
    float: left;
    margin-left: 20px;
    background: url(${logoPic});
    background-size: contain;
    background-repeat:no-repeat;
`

export const SearchWrapper = style.div`
    float: left;
    display: flex;
    align-items: center;
    height: 100%;
`

export const NavSearch = style.input.attrs({
    placeholder: '搜索'
})`
    float:left;
    margin-left: 20px;
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-left: 20px;
    border: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
		color: #999;
    }
    &.focused {
		width: 240px;
    }
    &.slide-enter-active {
		width: 240px;
    }
    &.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`