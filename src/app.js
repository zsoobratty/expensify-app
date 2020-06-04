console.log('App.js is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'An app for making decisions',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


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