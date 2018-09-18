import React, { Component } from 'react'
import './Highlights.sass'

class Highlights extends Component {
    render() {
        return(
            <div className="Highlights">
                <div className="Highlights__wrap">
                    <h3>FEATURES OD APP</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua.</p>
                
                    <div className="Highlights__cards">
                        <div className="Highlights__card">
                            <div className="Highlights__icon">
                                <img src={require('./img/trash.png')} alt=""/>
                            </div>
                                <h4>LOREM IPSUM DOLOR SIT</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        </div>

                         <div className="Highlights__card">
                            <div className="Highlights__icon">
                                <img src={require('./img/newsletter.png')} alt=""/>
                            </div>
                                <h4>AMETCONSECTETUR </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        </div>

                         <div className="Highlights__card">
                            <div className="Highlights__icon">
                                <img src={require('./img/arrows.png')} alt=""/>
                            </div>
                                <h4>LOREM IPSUM DOLOR SIT</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        </div>

                         <div className="Highlights__card">
                            <div className="Highlights__icon">
                                <img src={require('./img/browser.png')} alt=""/>
                            </div>
                                <h4>LOREM IPSUM DOLOR SIT</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                        </div>

                    </div>
                </div>

                <div className="Highlights__arrow">
                    <img src={require('./img/arrow-down-gray.png')} alt=""/>
                </div>
            </div>
        )
    }
}

export default Highlights