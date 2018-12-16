import React, { Component } from 'react';
import * as startUtils from './get-started/get-started-utils/GetStartedUtils';

export default class GetStarted extends Component{
    constructor(){
        super();
        this.state = {
            fields: {
                age: '',
                weight: '',
                height: '',
                activity: ''
            },
            error_msg: {
                age: '',
                weight: '',
                height: '',
                activity: '',
                goal: ''
            },
            goalOptionVal: 'instruction'
        };

        this.allnames = Object.keys(this.state.fields);
        this.options = ['fitness', 'lose-weight'];
    }

    handleChange(e){
        let newValues = startUtils.updateFields(this.state.fields, e.target);
        this.setState({
            fields: newValues
        });
    }

    clearErrorMessages(){
        this.setState({
            error_msg: this.createEmptyFieldObj()
        });
    }

    

    handleSubmit(e){
        e.preventDefault();
        let allGood = this.validateAllEverything();
        if(allGood){
            this.props.history.push('/results', this.state.fields);
        }
    }

    validateAllEverything(){
        let numsErrorMessages = this.validateNumericalFields();
        let numsWithGoalsErr = startUtils.validateGoalsOptions(numsErrorMessages, this.state.goalOptionVal);
        if(startUtils.checkIfEverythingIsGood(numsWithGoalsErr)){
            return true;
        }
        this.setState({
            error_msg: numsWithGoalsErr
        });
        return false;
    }

    
    validateNumericalFields(){
        let checkIfEmpty = startUtils.everythingFilled(this.state.fields);
        return checkIfEmpty;
    }

    

    handleGoalOptionsChange(e){
        this.setState({
            goalOptionVal: e.target.value
        });
    }

    render(){
        return(
            <div className='get-started'>
                <form className='get-started-form' onSubmit={(e) => this.handleSubmit(e)}>
                    {this.allnames.map((name, i) => (
                        <span key={i}>
                            <label>
                                {`${name[0].toUpperCase()}${name.substring(1)}`}
                                <input type='text' name={name} value={this.state.fields[name]} onChange={(e) => this.handleChange(e)} />
                                <div style={{display: 'inline-block', color: 'red'}}>{this.state.error_msg[name]}</div>
                            </label>
                            <br/>
                        </span>
                    ))}
                    <label>
                        Goal
                        <select value={this.state.optionVal} onChange={(e) => this.handleGoalOptionsChange(e)}>
                            <option 
                                style={{display: startUtils.displayGoalDefaultOrNot(this.state.goalOptionVal)}} 
                                value='instruction'>
                                    Choose your desired goal
                            </option>
                            {
                                this.options.map((option, i) => (
                                    <option key={i} value={option}>
                                        {startUtils.kebabCaseToWords(option)}
                                    </option>
                                ))
                            }
                        </select>
                        <div style={{display: 'inline-block', color: 'red'}}>{this.state.error_msg.goal}</div>
                    </label>
                    <br/>
                    <input type='submit' value='Get Started'/>
                </form>
            </div>
        );
    }
}