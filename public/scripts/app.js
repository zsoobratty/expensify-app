'use strict';

var appRoot = document.getElementById('app');

var clicked = false;
var toggleDetails = function toggleDetails() {
    clicked = !clicked;
    renderVisiblity();
};

var hideDetails = function hideDetails() {
    clicked = false;
    renderVisiblity();
};

var renderVisiblity = function renderVisiblity() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            clicked ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'p',
            null,
            clicked && 'These are your details'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderVisiblity();
