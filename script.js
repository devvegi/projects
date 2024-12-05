import _ from 'lodash';  // Example of importing a module
function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());

