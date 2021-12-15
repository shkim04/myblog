import React, { Component } from 'react';
import './aboutBlog.css';

export default class AboutBlog extends Component {
    
    render() {
        return (
            <div id='about-blog' className='content-main-box'>
                <div className='content-box'>
                    <h3 id='about-blog-title' className='sub-title'># About This Blog</h3>
                    <div className='about-blog-description'>
                        Its main role of this blog is to use it as a potential resume. 
                        I will keep this blog updated. So, predictably the blog will have more functions or contents and more fancy UIs.
                        <br />
                        <br />
                        Below are the links to my social medias that show other aspects of me in real life.
                        <br />
                        <br />
                        <div className='about-blog-icons'>
                            <a href='https://www.facebook.com/shyunkim4/'><i className='fab fa-facebook-square'></i></a>
                            <a href='https://www.linkedin.com/in/seunghyun-kim-24501b191/'><i className='fab fa-linkedin'></i></a>
                            <a href='http://instagram.com/shyunkim4'><i className='fab fa-instagram'></i></a>
                            <a href='https://github.com/shkim04'><i className="fab fa-github"></i></a>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}