import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption: undefined
    };
    componentDidMount = () => {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options)
            this.setState(() => ({ options }))
        }
        catch(e) 
        {
            //do nothing
        }
        
    }
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
        
    }
    componentWillUnmount = () => {
        console.log('componentWillUnmount!');
    }

    handleDeleteOptions= () => {
        // const num = () => {} //function body
        // const nums = () => ({}) //object
        this.setState(() => ({
            options: []
        }));
    }
    handleDeleteOption = (optionToRemove) => {
        
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove!=option)
        }));
    }
    handlePick=()=> {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }
    handleAddOption=(option)=> {
        if(!option){
            return 'Enter valid value';
        }
        else if(this.state.options.indexOf(option)>-1){
            return `This option already exist`;
        }
        this.setState((prevState) => ({
            options : prevState.options.concat(option)
        }));
        // this.setState((prevState) => {
        //     return{
        //         options : prevState.options.concat(option)
        //     }
        // })
    }
    handleClearSelectedOption=()=>{
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        //const options = ['One', 'Two', 'Three'];
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget" >
                        <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions}/>
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}