import React, { Component } from 'react'
import './Header.sass'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: false
        }
    }

    addClass = (e) => {
        e.preventDefault()
        this.setState({
            toggle: !this.state.toggle
        })
    }


    render() {

        return (
            <header className="Header">
                <nav className="Nav">
                    <div className="Nav__wrap">
                        <a href="#"><img src={require('./img/logo.png')} alt=""/></a>
                        
                        <img onClick={this.addClass} className="Nav__hamb" src={require('./img/menu-round.png')} alt=""/>

                        <div className="Nav__links">
                            <ul className={ this.state.toggle ? 'Nav__items open' : 'Nav__items' }>
                                <li><a className="Nav__link Nav__link--active" href="#">ABOUT</a></li>
                                <li><a href="#">STUDIO</a></li>
                                <li><a href="#">PRICING</a></li>
                                <li><a href="#">BLOG</a></li>
                                <a className="Nav__btn" href="#">Join <img src={require('./img/arrow-right.png')} alt=""/></a>
                            </ul>

                        </div>
                    </div>
                </nav>

                <div className="Header__wrap">
                    <h1>PUSH YOURSELF <br/> & YOUR <br/> DESIGNS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    
                    <div className="Header__form">
                        <div className="Header__input">
                            <input type="text" placeholder="Design Style"/>
                            <img src={require('./img/arrow_input1.png')} alt=""/>
                        </div>

                        <div className="Header__input Header__input--sec">
                            <input type="text" placeholder="Email"/>
                            <img src={require('./img/arrow_input2.png')} alt=""/>
                        </div>

                        <a className="Header__btn" href="#"><img src={require('./img/arrow-right.png')} alt=""/></a>
                    </div>
                </div>

            </header>
        )
    }
}

export default Header