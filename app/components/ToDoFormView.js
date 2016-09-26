import template from 'templates/todoForm';
import Todo from 'models/ToDo';


var ToDoFormView = Marionette.View.extend({
    model: new Todo() ,
    tagName: 'div',
    template: template,
    ui: {
        form: 'form',
        text: '#textInput'
    },
    modelEvents: {
        change: 'render'
    },

    triggers: {
        'submit @ui.form': 'add:todo:item'
    },

    initialize: function()
    {
        console.log('Initializing form...');
    },

    onAddTodoItem: function ()
    {
        if (this.model.set({title: this.ui.text.val()}, {validate: true}))
        {
            this.triggerMethod(ToDoFormView.Events.SUBMIT_SUCCESS, this.model.clone());
            this.model.set({title: ''});
        }
    }
});

ToDoFormView.Events = {
    SUBMIT_SUCCESS: 'todo:submit:success'
};

export default ToDoFormView;