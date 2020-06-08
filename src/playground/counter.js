class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    
    handleAddOne() {
        console.log('count increased')
    }
    handleMinusOne() {
        console.log('count decreased')
    }
    handleReset() {
        console.log('counter reset to 0')
    }

    render() {

        return(
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+</button>
                <button onClick={this.handleMinusOne}>-</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0
// const addOne = () => {
//     count++
//     renderCounterApp()
// };
// const minusOne = () => {
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }


// const appRoot = document.getElementById("app")


// const renderCounterApp = () => {
  
// const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+</button>
//       <button onClick={minusOne}>-</button>
//       <button onClick={reset}>reset</button>
//     </div>
// )

//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCounterApp()