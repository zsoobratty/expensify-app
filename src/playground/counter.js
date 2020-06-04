let count = 0
const addOne = () => {
    count++
    renderCounterApp()
};
const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}


const appRoot = document.getElementById("app")


const renderCounterApp = () => {
  
const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
      <button onClick={reset}>reset</button>
    </div>
)

    ReactDOM.render(templateTwo,appRoot);
}

renderCounterApp()