import React, { Component }from 'react'
import './BlockGray.sass'

class BlockGray extends Component {
    render() {
        return(
            <div className="BlockGray">
                <div className="BlockGray__wrap">
                    <div className="BlockGray__arrow BlockGray__arrow--gray" href=""><img src={require('./img/arrow-down-gray.png')} alt=""/></div>
                    <h3>LATEST DESIGN STYLE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua.</p>
                    <img className='BlockGray__img' src={require('./img/iphone.jpg')} alt=""/>
                    <div className="BlockGray__arrow" href=""><img src={require('./img/arrow-down.png')} alt=""/></div>
                </div>
            </div>
        )
    }
}

export default BlockGray