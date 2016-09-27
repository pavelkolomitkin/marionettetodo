module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'},
    templates: {
      defaultExtension: 'jst',
      joinTo: {'app.js': /^app\/templates/}
    }
  },
  npm: {
    globals: {
      $: 'jquery',
      Marionette: 'backbone.marionette',
      Backbone: 'backbone',
      _: 'underscore',
      stringUtil: 'underscore.string'
    },
    styles: {
      bootstrap: ['dist/css/bootstrap.min.css', 'dist/css/bootstrap-theme.min.css']
    },
    javascripts: {
      bootstrap: ['dist/js/bootstrap.min.js']
    }
  },
  plugins: {
    babel: {
      presets: ['es2015'],
      ignore: [
        /^(node_modules)/
      ]
    }
  }
};
