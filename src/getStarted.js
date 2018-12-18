import React, { Component } from 'react';
import * as startUtils from './get-started/get-started-utils/GetStartedUtils';
import TextInputs from './get-started/text-fields/TextInputs';
import Dropdown from './get-started/dropdown/Dropdown';
import SubmitButton from './get-started/submit-button/SubmitButton';
import './GetStarted.css';

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

    changeAge(){
        this.setState({
            goalOptionVal: 'fitness'
        });
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
                <form className='get-started-form' onSubmit={(e) => this.handleSubmit(e)} >
                    <TextInputs 
                        names={this.allnames} 
                        fields={this.state.fields} 
                        errors={this.state.error_msg} 
                        textChangeEvent={(e) => this.handleChange(e)}
                    />
                    <Dropdown 
                        options={this.options} 
                        currVal={this.state.goalOptionVal} 
                        change={(e) => this.handleGoalOptionsChange(e)}
                        error={this.state.error_msg.goal}
                    />
                    <SubmitButton />
                </form>
            </div>
        );
    }
}