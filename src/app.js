// to run - live-server public
// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets="env,react" --watch

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>We'll decide</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>Options Component Here</h3>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return(
            <div>
                <h4>AddOption Component Here</h4>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))