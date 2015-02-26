// ###########################################################################
// Goal:  Define Knockout.js view model that concatenates first and last names.
//
var HomeViewModel = function(first, last) {
    var self = this;

    self.firstName = ko.observable(first);
    self.lastName = ko.observable(last);
    self.fullName = ko.computed(function() {
        // Knockout tracks dependencies automatically.
        // It knows that fullName depends on firstName and lastName,
        // because these get called when evaluating fullName.
        if (self.firstName() && self.lastName())
        {
            return self.firstName() + " " + (self.lastName() || "");
        }
    });
};
