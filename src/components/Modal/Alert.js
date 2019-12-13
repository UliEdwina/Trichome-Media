import React from "react";
import { apiAuth, apiHandleSignUpAndLogIn } from "../../api/api"

class Alert extends React.Component {
    state = {
        userDetails: {
            nickName: '',
            email: '',
            password: ''
        },
        isAuth: false,
        loggedin: ''
    };

    componentDidMount = () => {
        apiAuth()
            .then(userObj => {
                this.setState({
                    isAuth: true,
                    loggedInEmail:
                        userObj.email
                }, () => {
                    this.props.appHandleAuthSubmit()
                })
            })

            .catch(err => console.log(err))
    }

    setModalShow = setModal => {
        this.setState({ showModal: setModal })
    }

    handleChange = e => {
        const userDetails = { ...this.state.userDetails }
        userDetails[e.target.name] = e.target.value;
        this.setState({ userDetails });
    }

    handleInputOnSubmit = (event) => {
        event.preventDefault();
        const { userDetails } = this.state;
        console.log(userDetails)

        apiHandleSignUpAndLogIn(userDetails)
            .then(result => {
                if(result){
                    console.log("User created successfully")

                    const { email } = result

                    this.setState({
                        userDetails: {
                            nickName: '',
                            email: '',
                        password: ''
                        },
                        isAuth: true,
                        loggedInEmail: email                 
                    }, () => {
                        this.props.appHandleAuthSubmit()
                    })
                }
            })
            .catch(errorMessage => {
                this.setState({
                    errorToggle: true,
                    errorMessage: errorMessage
                })
            })
    }


    render() {
        const { nickName, email, password } = this.state.userDetails;
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModalCenter" trole="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <form onSubmit={this.handleInputOnSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Nickname</label>
                                        <input type="text" className="form-control" name="nickName" value={nickName} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}



export default Alert