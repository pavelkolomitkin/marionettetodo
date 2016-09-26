import ToDoListAppView from './ToDoListAppView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {

    //this.showView(new ItemView())
    this.showView(new ToDoListAppView({
      collection: new Backbone.Collection([
        {title: "Task 1", isCompleted: true},
        {title: "Task 2", isCompleted: false},
        {title: "Some new", isCompleted: false},
        {title: "Old task", isCompleted: true}
      ])
    }))
  }
});