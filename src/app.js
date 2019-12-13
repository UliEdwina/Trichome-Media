import React, { Component } from 'react';
import Navbar from '../src/components/Nav/Nav'
import Top from '../src/components/Top/top';
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
            <div>              
                <Navbar/>
                <Top/>
                <Modal appHandleAuthSubmit={this.appHandleAuthSubmit}/>              
            </div>

        )

    }
}
 
export default App;