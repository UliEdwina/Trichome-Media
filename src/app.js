import React, { Component } from 'react';
import Navbar from '../src/components/Nav/Nav'
import Top from '../src/components/Top/top';
import Modal from './components/Modal/Alert'
import Trans from '../src/components/Trans/Trans'

import 'bootstrap/dist/css/bootstrap.min.css';
import Rights from '../src/components/Human Rights/humanRights'
import Fitness from '../src/components/Fitness/fitness'
import Drag from '../src/components/Drag/drag'

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
                <Modal appHandleAuthSubmit={this.appHandleAuthSubmit}
                
                />   
                <Top/>   
                <Trans />     
                <Rights />    
                <Fitness />    
                <Drag/>
            </div>

        )

    }
}
 
export default App;