exports.paths = {
  public: 'dist',
  watched: ['src']
};

exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!src|specs)/,
      'app.js': /^src/
    }
  },
  templates: {
    joinTo: 'app.js'
  },
  stylesheets: {
    joinTo: {
      'app.css': /^src/
    }
  }
};

exports.server = {
  port: 3000,
  stripSlashes: true
};

exports.plugins = {
  babel: {
    presets: [
      [ 'env', {
        targets: {
          browsers: '> 1%'
        },
        useBuiltIns: true
      }],
      'stage-3'
    ]
  },
  vue: {
    extractCSS: true,
    out: 'dist/components.css'
  },
  postcss: {
    modules: true,
    processors: [
      require('autoprefixer')()
    ]
  }
};
