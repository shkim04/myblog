import React, { Component } from 'react';
import AdditionPicture from '../assets/addition-practice.mp4';
import './additionPractice.css';

export default class AdditionPractice extends Component {
    render() {
        return (
            <div className='content-main-box'>
                <div className='content-box'>
                    <div className='video-container'>
                        <video 
                            src={AdditionPicture} 
                            controls
                            loop 
                            width="100%" 
                            autoPlay={true}
                        >
                        </video>    
                    </div> 
                    <h3 className='sub-title'># How it does work</h3>
                    <div className='description-addition-practice'>
                        <div className='comments-ad-practice'>This app will be mounted on this blog later when I host my website with other hosting service.
                            Tables are generated with random numbers and blanks so, you can practice addtion and subtraction and grade your level.
                            For more information about the code, Please visit this github page - 
                            <a href='https://github.com/shkim04/addition-subtraction-practice' className='github'><i>https://github.com/shkim04/addition-subtraction-practice</i></a>
                            <br />
                            <br />
                            Here's how you do it.
                        </div>
                        <p className='explanation-ad-practice'>1) Start</p>
                        <p className='explanation-ad-practice'>2) Do either addtion or subtraction</p>
                        <p className='explanation-ad-practice'>3) Fill in the blanks</p>
                        <p className='explanation-ad-practice'>4) Press Finish button when done</p>
                        <p className='explanation-ad-practice'>5) Now, you get a grade</p>
                    </div>                       
                </div>
            </div>
        )
    }
}
