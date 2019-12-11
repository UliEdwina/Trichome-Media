import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import Navbar from '../src/components/Nav/Nav'

import Top from '../src/components/Top/top'
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from './components/Modal/Alert'


class App extends Component {
    state= {
        
        comments: {},
        isAuth: false
    }



appHandleAuthSubmit = () => {

    this.setState({
        isAuth: true
    })
    
    
}

    render() {

        return(
            <div className= 'App'>
                
                <Navbar/>
                <Top/>
                <Modal />
               

         
           
            
                
                
               
               
            </div>

        )

    }
}
ReactDOM.render(<App />, document.getElementById('root'));

































