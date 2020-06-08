class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this)
        this.state = {
            toggle: false
        }
    }

    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    render() {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibilityToggle}>{this.state.toggle ? 'Hide details' : 'Show details'}</button>
            {this.state.toggle && <p>Here are your details</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))



// const appRoot = document.getElementById('app')

// let clicked = false
// const toggleDetails = () => {
//     clicked = !clicked
//     renderVisiblity()
// }

// const hideDetails = () => {
//     clicked = false
//     renderVisiblity()
// }

// const renderVisiblity = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>{clicked ? 'Hide details' : 'Show details'}</button>
//             <p>{clicked && 'These are your details'}</p>
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// renderVisiblity()