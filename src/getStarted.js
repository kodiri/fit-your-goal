import React, { Component } from 'react';

export default class GetStarted extends Component{
    constructor(){
        super();
        this.state = {
            fields: {
                age: ''
            },
            error_msg: {
                age: ''
            }
        }
    }

    handleChange(e){
        this.setState({
            fields: {
                [e.target.name]: e.target.value
            },
            error_msg: {
                age: ''
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.fields.age){
            this.setState({
                error_msg: {
                    age: 'Field is empty'
                }
            });
        }
        else{
            this.props.history.push('/results', this.state.fields);
        }
    }

    render(){
        return(
            <div className='get-started'>
                <form className='get-started-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                        Age
                        <input type='text' name='age' value={this.state.fields.age} onChange={(e) => this.handleChange(e)} />
                    </label>
                    <div style={{display: 'inline-block', color: 'red'}}>{this.state.error_msg.age}</div>
                    <br/>
                    <input type='submit' value='Get Started'/>
                </form>
            </div>
        );
    }
}