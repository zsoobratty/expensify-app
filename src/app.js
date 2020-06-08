// to run - live-server public
// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets="env,react" --watch

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = "We'll decide for you!"
        const options = ['Thing one', 'Thing two', 'Thing four']

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props.options)
        // alert("Options Removed")
    }
    render() {
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
                <h3>{
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option}/>
                    } )
                }</h3>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim()

        if(option) {
            alert(option)
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))