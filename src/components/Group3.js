import React, { Component } from 'react';

import './Group3.sass'

class Group3 extends Component {
    render() {
        return(
            <div className="Group3">
                <div className="Group3__wrap">
                    <img className="Group3__img" src={require('./img/laptop.png')} alt=""/>

                    <div className="Group3__icons">
                        <a className="Group3__icon Group3__icon--tw" href="#"><img src={require('./img/icon-tw.png')} alt=""/>Tweet</a>
                        <a className="Group3__icon Group3__icon--fb" href="#"><img src={require('./img/icon-fb.png')} alt=""/>Share</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Group3