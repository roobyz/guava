// Initialize HomeViewModel with default values.
$(function () {
    ko.applyBindings(
      new HomeViewModel("Data", "Binding")  // required to assign default values to any view models.
    );
});
