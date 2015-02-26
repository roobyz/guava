// ###########################################################################
// Goal:  Define Knockout.js view model that concatenates first and last names.
//
// Register Knockout Component.
ko.components.register('ko-name-widget', {
  viewModel:
    // Define Model as a constructor function.
    function (params) {
      var self = this;

      // Uncomment and modify the following line to log to the browser console.
      //console.log('Sample log entry:', ko.toJS(params.first));
      self.firstName = ko.observable(params.first);
      self.lastName  = ko.observable(params.last);
      self.fullName  = ko.computed(function() {
        // Knockout tracks dependencies automatically.
        // It knows that fullName depends on firstName and lastName,
        // because these get called when evaluating fullName.
        if (self.firstName() && self.lastName())
        {
          return self.firstName() + " " + (self.lastName() || "");
        }
      });
    },
  template:
    // Define View as inline html.
    '<div class="row">\
      <div class="large-12 columns">\
        <section class="app">\
          <h4>Custom Element Example! <i class="fa fa-thumbs-o-up"></i></h4>\
          <div class="callout panel"> \
            <p>First name: <input data-bind="textInput: firstName" /></p>\
            <p>Last name: <input data-bind="textInput: lastName" /></p>\
            <p>Hello, <b><span data-bind="text: fullName"> </span></b>!</p> \
          </div>\
        </section>\
      </div> \
    </div>'
});
