import React, { Component } from 'react'
import './Cta.sass'


class Cta extends Component {
    render() {
        return(
            <div className="Cta">
                <div className="Cta__wrap">

                    <a href="#"><img src={require('./img/logoBig.png')} alt=""/></a>
                    <div className="Cta__title">
                        <h1>PUSH YOURSELF <br/> & YOUR <br/> DESIGNS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore manga aliqua.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cta