
import React, { Component } from 'react';
import {apiAuth }
from '../../api/api'
import '../../index.css';
import posed, { PoseGroup } from 'react-pose';



const Modal = posed.div({
    enter: {
      x: 100,
      opacity: 1,
      delay: 0,
      transition: ({ from, to }) => ({
        type: 'keyframes',
        values: [from, 10, to],
        times: [0, 0.25, 1]
      })
    }
   
  });
  
  const Shade = posed.div({
    enter: { opacity: 5 },
    exit: { opacity: 10 }
  });

class Navbar extends Component {

constructor(props){
    super(props)
        this.state ={
            isVisible: false,
            email: '',
            password: '',
            screenname: '',
            isAuth: false,
            loggedInEmail: '',
            errorMessage: false,
            errorToggle: false
        }
    
}

componentDidMount = () => {
    setInterval(() => {
        this.setState({ 
            isVisible: !this.state.isVisible
        })}, 3000)
    apiAuth()
        .then(userObj => {
            this.setState({isAuth:true,
                loggedInEmail:
                userObj.email }, () => {
                    this.props.appHandleAuthSubmit()
                })
            })
    
        .catch( err => console.log(err))
       
    }   




render() {
    const { isVisible } = this.state
    return (
        <>
        <nav className='navbar navbar-dark bg-dark'>
            <div>
            
            <PoseGroup>
        {isVisible && [
          // If animating more than one child, each needs a `key`
          <Shade key="shade" className="shade test1" >hi</Shade>,
          <Modal key="modal" className="modal test3" />
        ]}
      </PoseGroup>
                
                </div>
            { this.state.isAuth ? (
                <>
                    <span>
                        { this.state.loggedInEmail }
                    </span>
                    <button 
                        className='btn btn-warning'
                        onClick={ this.logOut }
                    >
                        Log out
                    </button>
                </>
            ) : (
                <form 
                className='form-inline'
                onSubmit={ this.handleInputOnSubmit }
                >
                    <input 
                        type='text' 
                        placeholder='email'    
                        className='form-control mr-sm-2'
                        name='email'
                        onChange={ this.handleInputOnChange }
                    />
                    <input 
                        type='text' 
                        placeholder='password' 
                        className='form-control mr-sm-2'
                        name='password'
                        onChange={ this.handleInputOnChange }
                    />
                    <button className='btn btn-outline-success my-2 my-sn-0'>Sign Up | Sign In</button>
                </form>
            ) }
        </nav>
        <span
            style={{ padding: '0px' }}
            className={ this.state.errorToggle ? 'alert alert-danger' : '' }
        >
            { this.state.errorToggle ? this.state.errorMessage : '' }
        </span>
        </>
    )
}
}


    
export default Navbar