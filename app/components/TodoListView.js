import ToDoView from './ToDoView';

export default Marionette.CollectionView.extend({
    tagName: 'div',
    className: 'todo-list',
    childView: ToDoView
});