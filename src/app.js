console.log('App.js is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'An app for making decisions',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value
    
    if(option){
        app.options.push(option);
        e.target.elements.option.value = ''
    }
    renderIndecisionApp()
}

const clearList = () => {
    app.options = []
    renderIndecisionApp()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
}


const appRoot = document.getElementById("app")

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={clearList}>Remove All</button>

            <ol>
                {
                    app.options.map((option)=> {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot)
}

renderIndecisionApp()