import template from 'templates/todo';

export default Marionette.View.extend({
    tagName: 'div',
    className: 'todo',
    template: template
});