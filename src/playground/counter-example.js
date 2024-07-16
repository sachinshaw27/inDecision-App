class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        try{
            const json = localStorage.getItem('count');
            const count = parseInt(json,10);
            if(!isNaN(count))
            this.setState(() => ({ count }))
            console.log("count: ",count);
        }
        catch(e) {}
    }
    componentDidUpdate(prevProps,prevState) {
        console.log('update');
        if(prevState.count!==this.state.count)
        {
            // const json = JSON.stringify();
            localStorage.setItem('count',this.state.count);
        }
    }
    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        });
        
        // console.log('handleAddOne');
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        });
        // console.log('handleMinusOne');
    }
    reset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        console.log('reset');
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count=0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count=0;
//     renderCounterApp();
// }



// const renderCounterApp = () => {
//     const template3=(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(template3,appRoot);
// };
// renderCounterApp();