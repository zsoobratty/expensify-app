'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'An app for making decisions',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderIndecisionApp();
};

var clearList = function clearList() {
    app.options = [];
    renderIndecisionApp();
};

var appRoot = document.getElementById("app");

var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: clearList },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
