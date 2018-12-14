import React, { Component } from 'react';

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
        let newValues = this.updateFields(this.state.fields, e.target);
        this.setState({
            fields: newValues
        });
    }

    updateFields(prevVals, target){
        return Object.keys(prevVals).reduce((newValues, field) => {
            if(field === target.name){
                newValues[field] = target.value; 
            }
            else{
                newValues[field] = prevVals[field];
            }
            return newValues;
        }, {});
    }

    clearErrorMessages(){
        this.setState({
            error_msg: this.createEmptyFieldObj()
        });
    }

    createEmptyFieldObj(){
        return this.allnames
        .reduce((emptyValues, name) => {
            emptyValues[name] = '';
            return emptyValues;
        }, {});
    }

    handleSubmit(e){
        e.preventDefault();
        let allGood = this.validateAllEverything();
        if(allGood){
            this.props.history.push('/results', this.state.fields);
        }
    }

    validateGoalsOptions(curr_err, goals_val){
        let isDefault = goals_val === 'instruction';
        curr_err.goal = (isDefault) ? 'Please select an option' : '';
        return curr_err;
    }

    everythingFilled(fieldsObj){
        let filled = true;
        let newErrorMessages = Object.keys(fieldsObj).reduce((newObj, field) => {
            let empty = !fieldsObj[field];
            newObj[field] = (empty) ? `Please fill in the ${field}` : '';
            if(!empty && filled) filled = false;
            return newObj;
        }, {});
        return newErrorMessages;
    }

    validateAllEverything(){
        let numsErrorMessages = this.validateNumericalFields();
        let numsWithGoalsErr = this.validateGoalsOptions(numsErrorMessages, this.state.goalOptionVal);
        if(this.checkIfEverythingIsGood(numsWithGoalsErr)){
            return true;
        }
        this.setState({
            error_msg: numsWithGoalsErr
        });
        return false;
    }

    
    validateNumericalFields(){
        let checkIfEmpty = this.everythingFilled(this.state.fields);
        return checkIfEmpty;
    }

    //If there are no error messages then it returns true
    checkIfEverythingIsGood(error_messages){
        return  Object.keys(error_messages).reduce((allGood, name) => {
            return allGood && error_messages[name] === '';
        }, true);
    }

    //check if the age, height and weight are numbers
    //this is only for testing and will not be integrated until the goals is done
    checkIfContinousFieldsAreNumbers(emptyOrNot){
        let newErrorMessages = this.allnames.reduce((acc, name) => {
            let goalsField = name === 'goals';
            if(!emptyOrNot[name] &&
                    !goalsField
                )
            {
                //there is some data in this field
                let isNum = this.checkIfFullNum(this.state.fields[name]);
                acc[name] = (!isNum) ? `${name[0].toUpperCase()}${name.substring(1)} must be a number!` : '';
            }
            else if(!goalsField){
                acc[name] = emptyOrNot[name]; //if empty keep the original error
            }
            return acc;
        }, {});

        return newErrorMessages;
    }

    //doesn't check for decimal places which might be required for height and/or weight 
    checkIfFullNum(field, fieldName){
        return !field
            .split('')
            .find((char) => !'1234567890'.includes(char));
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
                                style={{display: this.displayGoalDefaultOrNot(this.state.goalOptionVal)}} 
                                value='instruction'>
                                    Choose your desired goal
                            </option>
                            {
                                this.options.map((option, i) => (
                                    <option key={i} value={option}>
                                        {this.kebabCaseToWords(option)}
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

    displayGoalDefaultOrNot(optionVal){
        //This makes sure that the user doesn't ignore the goals option
        if(optionVal === 'instruction'){
            return 'block';
        }
        return 'none';
    }

    kebabCaseToWords(words){
        return words.split('-')
            .map((word) => word[0].toUpperCase() +word.substring(1))
            .join(' ');
    }
}