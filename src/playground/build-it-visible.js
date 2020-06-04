const appRoot = document.getElementById('app')

let clicked = false
const toggleDetails = () => {
    clicked = !clicked
    renderVisiblity()
}

const hideDetails = () => {
    clicked = false
    renderVisiblity()
}

const renderVisiblity = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{clicked ? 'Hide details' : 'Show details'}</button>
            <p>{clicked && 'These are your details'}</p>
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderVisiblity()