import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './getStarted.css'

class GetStarted extends Component{
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <form className='get-started-form' onSubmit={this.handleSubmit}>
                    <label>
                        Age
                        <input type='text' name='age' value={this.state.fields.age} onChange={this.handleChange} />
                    </label>
                    <div style={{display: 'inline-block', color: 'red'}}>{this.state.error_msg.age}</div>
                    <br/>
                    <input type='submit' value='Get Started'/>
                </form>
            </div>
        );
    }
}

export default GetStarted;