import template from 'templates/todo';

export default Marionette.View.extend({
    tagName: 'div',
    className: 'todo list-group-item',
    template: template,

    ui: {
        checkBox: 'input[type="checkbox"]',
        text: 'label span'
    },

    triggers: {
        'change @ui.checkBox': 'change:completed'
    },
    events: {
        'click': 'onSelfClick'
    },

    modelEvents: {
        'change': 'onModelChange'
    },

    initialize: function()
    {
        this.updateCssContainer()
    },

    updateCssContainer: function () {

        if (this.model.get('isCompleted'))
        {
            this.$el.addClass('completed');
        }
        else
        {
            this.$el.removeClass('completed');
        }
    },

    onSelfClick: function () {
        this.model.set('isCompleted', !this.model.get('isCompleted'));
    },

    onChangeCompleted: function () {
        if (this.model.get('isCompleted') != this.ui.checkBox.prop('checked'))
        {
            this.model.set('isCompleted', this.ui.checkBox.prop('checked'));
        }
    },

    onModelChange: function ()
    {
        this.ui.checkBox.prop('checked', this.model.get('isCompleted'));
        this.updateCssContainer();
        this.render();
    }
});