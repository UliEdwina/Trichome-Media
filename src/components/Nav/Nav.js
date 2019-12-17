
import React, { Component } from 'react';
// import {apiAuth}
// from '../../api/api'
import '../../index.css';
import Alert from  '../../components/Modal/Alert'


class Navbar extends Component {

constructor(props){
    super(props)
        this.state ={
            userDetails: {
               
                email: '',
                password: ''
            },
            isAuth: true,
            loggedInEmail: ''
            
            
        }
    
}
// handleInputOnSubmit = (event) => {
//     event.preventDefault();
//     const { userDetails } = this.state;
//     console.log(userDetails)
// apiHandleSignUpandLogIn(userDetails)
//             .then(result => {
//                 if(result){
//                     console.log("User created successfully")

//                     const { email } = result

//                     this.setState({
//                         userDetails: {
//                             nickName: '',
//                             email: '',
//                         password: ''
//                         },
//                         isAuth: true,
//                         loggedInEmail: email                 
//                     }, () => {
//                         this.props.appHandleAuthSubmit()
//                     })
//                 }
//             })
//             .catch(errorMessage => {
//                 this.setState({
//                     errorToggle: true,
//                     errorMessage: errorMessage
//                 })
//             })
//     }
// componentDidMount = () => {
//     setInterval(() => {
//         this.setState({ 
//             isVisible: !this.state.isVisible
//         })}, 3000)
//         apiAuth()
//         .then(userObj => {
//             this.setState({
//                 isAuth: true,
//                 loggedInEmail:
//                     userObj.email
//             }, () => {
//                 this.props.appHandleAuthSubmit || (() => {})()
//             })
//         })

//         .catch(err => console.log(err))
// }
       
   
// logOut = (event)=>{
//     this.setState({
//         loggedEmail:  "",

//         isAuth: false
//     })
// }

// logIn = (event) => {
//     event.preventDefault()
//     apiLogIn()
//     .then(result => {
//         if(result){
//             console.log("logged In")

//             const { email } = result

//             this.setState({
//                 userDetails: {
                    
//                 email: '',
//                 password: ''
//                 },
//                 isAuth: true,
//                 loggedInEmail: email                 
//             }, () => {
//                 this.props.appHandleAuthSubmit()
//             })
//         }
//     })
//     .catch(errorMessage => {
//         this.setState({
//             errorToggle: true,
//             errorMessage: errorMessage
//         })
//     })

//     this.setState({ showModal: true })
// }

// signUp = (event) => {

//     this.setState({

//     })
// }
render() {
    
    return (
    <div class="containter">
        <nav className='navbar navbar-dark bg-dark stylebar'>
            
           
        
  <a className="navbar-brand" href="/">Writing Samples</a>
  
  
    
   
    <span class="navbar-text navbar-brand">
     About Me |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Categories |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Publish|
    </span>
    
            { this.state.isAuth ?
                
                    <span>
                        { this.state.loggedInEmail }
                    </span>
                    
                    :
                    <button 
                        className='btn btn-warning'
                        onClick={ this.logIn }
                    >
                        Log In
                    </button> 
                         
                      }  
                      
            {this.state.showModal && <Alert />}
                

              </nav>
              
              </div>
                
        )
    }
}


    
export default Navbar