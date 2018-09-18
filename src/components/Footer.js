import React, { Component } from 'react'
import './Footer.sass'


class Footer extends Component {
    render() {
        return(
            <footer className="Footer">
                <div className="Footer__wrap">
                    <div className="Footer__field">
                        <div className="Footer__cards">
                            <ul className="Footer__card">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Why Buy</a></li>
                                <li><a href="#">Affiliates</a></li>
                            </ul>

                            <ul className="Footer__card">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                    </div>

                    <div className="Footer__copy">
                        <p>Made in Melbourne By BlazRobar.com @BlazRobar</p>
                        <p>Copyright © 2018, Cool stuff here</p>
                    </div>
                </div>
            </footer>
        )
    }
    
}

export default Footer