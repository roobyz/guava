exports.config =
  # Goal:  Configure Brunch settings.
  # For detailed instructions on modifying this file, please check:
  # https://github.com/brunch/brunch/blob/stable/docs/config.md
  #
  paths:
    watched: ['app']
    public: 'public'

  server:
    port: 3333

  conventions:
      assets: /(assets|test(\/|\\)assets|font)/

  modules:
    wrapper: false,         # 'commonjs' (default), 'amd', false (no wrapping),
    definition: 'commonjs'  # 'commonjs' (default), 'amd' & false (no definition),

  # Custom file settings.
  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'js/app.js': /^app(\/|\\)(scripts|components)/
        'js/vendor.js': /^(vendor|bower_components)/
      order:
        before: [
          'bower_components/console-polyfill/home-page.js'
          'bower_components/modernizr/modernizr.js'
          'bower_components/jquery/dist/jquery.js'
          'bower_components/lodash/dist/lodash.js'
          'bower_components/knockoutjs/dist/knockout.js'
          'bower_components/pagerjs/dist/pager.min.js'
        ]
    stylesheets:
      joinTo:
        'css/app.css': /^(app|vendor|bower_components)/
      order:
        before: [
          'bower_components/normalize-css'
        ]

  # Custom plugin settings.
  plugins:
    autoReload:
      enabled: true
    sass:
      debug: false,
      mode: 'native',   # set to 'native' to force libsass, otherwise set to 'ruby'
      options:
        includePaths: [
          'bower_components/bourbon/'
          'bower_components/foundation/scss'
        ]
    cleancss:
      keepSpecialComments: 0
      removeEmpty: true
    imageoptimizer:
      smushit: true,    # if false it uses jpegtran and optipng, if set to true it will use smushit
      path: 'images'    # your image path within your public folder
    nunjucks:
      templatePath: /^app(\/|\\)templates(\/|\\)starter-nunjucks-theme/
      pathReplace: /^app(\/|\\)templates(\/|\\)starter-nunjucks-theme(\/|\\).*.html$/
      menu_default: 'Canvas'    # options: 'Canvas', 'Bar', 'Default'
      menu_sticky:  'sticky'    # options: 'sticky', ''
      footer_text:  'This is my footer.'

    #staticHandlebars:
      # set the context and configure Handlebars
      #includeFile: 'app/another_directory/include.js'
      #outputDirectory: 'app/assets'

  # Override default setting for production deployment.
  overrides:
    production:
      optimize: true
      sourceMaps: false
      plugins:
        autoReload:
          enabled: false

