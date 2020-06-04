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


const appRoot = document.getElementById("app")

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
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