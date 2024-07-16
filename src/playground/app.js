class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        };
    }
    componentDidMount() {
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
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    handleDeleteOptions() {
        // const num = () => {} //function body
        // const nums = () => ({}) //object
        this.setState(() => ({
            options: []
        }));
    }
    handleDeleteOption(optionToRemove) {
        
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove!=option)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
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
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        //const options = ['One', 'Two', 'Three'];
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title : 'Indecision'
};
// class Header extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    );
}
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}>
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }
const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
            props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>)
        }
        </div>
    );
}
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key={option} optionText={option} />)
//             }
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        
        const error = this.props.handleAddOption(option);
        this.setState(() => ({  error }));
        // this.setState(() => {
        //     return {
        //         error
        //     };
        // });
        if(!error){
            e.target.elements.option.value=''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
const Option = (props) => {
    return (
        <div>
        {props.optionText}
        <button 
        onClick={(e) => {
            props.handleDeleteOption(props.optionText);
        }}
        >
        Remove
        </button>
        </div>
    );
}
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//             {this.props.optionText}
//             </div>
//         );
//     }
// }

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));