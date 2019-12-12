import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
    render () {
        let {list} = this.props;
        if (list) {
            return
        } else {
            list= []
        }
        console.log(list)
        return (
            <div>
                {
                    list.map((item)=>(
                        <div key={item.get('id')}>
                            <img className='topic-pic' src={item.get('imgUrl')} alt='' />
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicLIst'])
})

export default connect(mapState, null)(Topic)