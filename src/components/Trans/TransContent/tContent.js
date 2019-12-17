import React, { Component } from 'react'

export default class Trans extends Component {
    state = {
        isToggle: false,
        newEditTransContent: this.props.item,
        currentTransContent: this.props.item,
        deleteTransContent: this.props.item
    }
    
    handleEditToggle = () => {
        this.setState((prevState) => {
            return {
                isToggle: !prevState.isToggle,
                newEditTransContent: this.state.currentTransContent
            }
        })
    }

    handleEditOnChange = (event) => {
        this.setState({
            newEditTransContent: event.target.value
        })
    }

   

    render() {
        const {
            id,
            completed,
            item,
            tHandleNewContentByID,
            tHandleCompleteContentByID,
            tHandleContentDeletedByID
            
        } = this.props

        return (
            <li key={id} className={`${completed === true ? 'completedLineThrough' : ''}`}>
                {
                    this.state.isToggle ? (
                        <>
                            <input 
                                defaultValue={ item }
                                onChange={ this.handleEditOnChange } 
                            />
                            <button
                                onClick={ this.handleEditToggle }
                                className='buttonClass btn btn-danger'
                            >
                                Cancel</button>
                            <button
                                className='buttonClass btn btn-primary'
                                disabled={ this.state.newEditTransContent === this.state.currentTransContent ? true : false }
                                onClick={ () => {
                                    tHandleNewContentByID(id, this.state.newEditTransContent)

                                    this.handleEditToggle()
                                }}
                            >Submit</button>
                        </>
                    ) : (
                        <>
                            { item }
                            <button 
                                className='buttonClass btn btn-success'
                                onClick={ this.handleEditToggle }
                            >
                                Edit
                            </button>
                            <button 
                                onClick = {() => tHandleContentDeletedByID(id)}
                                className={`buttonClass btn btn-danger ${this.state.isToggle ? 'makeButtonHidden' : ''}`}
                    
                            >
                                delete
                            </button>

                            <button 
            onClick={() => tHandleCompleteContentByID(id,!completed )} 
            className={`buttonClass btn btn-danger ${this.state.isToggle ? 'makeButtonHidden' : ''}`}>
                Completed
        </button>
                        </>
                    )
                }
            </li>
        )
    }
}