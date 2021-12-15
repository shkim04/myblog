import { Component } from "react";
import HomePage from './components/homePage';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scroll';
import Layout from './components/layout';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './Blog.css';

export default class Blog extends Component {
  
  render() {
    return (
      <HashRouter basename='/'>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route render={()=> <Layout />}/>
        </Switch>
        <Footer />
      </HashRouter>
    )
  }
}
