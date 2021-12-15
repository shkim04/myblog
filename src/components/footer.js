import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer id='footer'>
               <div className='footer-container'>
                    <div className='footer-main'>
                        <div className='footer-content'>Designed by S.H. Kim</div>  
                        <div className='icons'>
                            <a href='https://www.facebook.com/shyunkim4/'><i className="fab fa-facebook-f"></i></a>
                            <a href='https://www.linkedin.com/in/seunghyun-kim-24501b191/'><i className="fab fa-linkedin-in"></i></a>
                            <a href='http://instagram.com/shyunkim4'><i className="fab fa-instagram"></i></a>
                            <a href='https://github.com/shkim04'><i className="fab fa-github"></i></a>
                        </div>
                    </div>
               </div>
            </footer>
        )
    }
}