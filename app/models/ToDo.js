export default Backbone.Model.extend({
    defaults: {
        'title': '',
        'isCompleted': false
    },

    validate: function (attributes) {
        var errors = {};
        var hasErrors = false;

        if ($.trim(attributes.title) == '') {
            errors.title = 'Title can not be empty!';
            hasErrors = true;
        }

        if (hasErrors) {
            return errors;
        }
    }
});