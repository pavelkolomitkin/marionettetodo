import ToDoFormView from './ToDoFormView';
import ToDoListView from './TodoListView';
import Todo from 'models/ToDo';
import template from 'templates/todoListApp';

export default Marionette.View.extend({
    template: template,
    model: new Todo(),
    collection: new Backbone.Collection(),
    tagName: 'div',
    className: 'todo-app',
    regions: {
        list: '.list-container',
        form: '.form-container'
    },

    onRender: function ()
    {
        var form = new ToDoFormView({model: this.model});
        this.listenTo(form, ToDoFormView.Events.SUBMIT_SUCCESS, this.onFormSubmit);

        this.showChildView('list', new ToDoListView({collection: this.collection}));
        this.showChildView('form', form);
    },

    onFormSubmit: function (model)
    {
        this.collection.add(model);
    }
});