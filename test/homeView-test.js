// ###########################################################################
// Goal: Setup test cases
// Note: This will be automatically required when using `brunch test` command.
//
var assert = buster.referee.assert;    // or short: buster.assert
var refute = buster.referee.refute;    // or short: buster.refute

// ###########################################################################
// Goal: assign view model values for testing.
// Note: testing requires browser mode (./node_modules/.bin/buster-server)
//       after launching test server, go to http://localhost:1111 and then
//       select "Capture Browser" to run the tests.
//
var vm = new HomeViewModel("Planet", "Earth");

// ###########################################################################
// Goal: Identify whether knockout binding worked as planned.
// Note: Change above values to ("John", "Smith") for successful test results.
//
buster.testCase("HomeViewModel test cases", {
    // Assertion tests
    "First and Last Name should be different.": function() {
        refute.equals(vm.firstName(), vm.lastName());
    },

    "First Name should be John.": function() {
        assert.equals(vm.firstName(), "John");
    },

    "Last Name should be Smith": function () {
        assert.equals(vm.lastName(), "Smith");
    },

    "Full Name should be John Smith": function () {
        assert.equals(vm.fullName(), "John Smith");
    }

    // "Doubles" tests (Mocks, Stubs, Spies)
    /* TODO: update these placeholders with valid doubles tests
    "Demonstrate stubbing": function () {
        // Overrides "aMethod" and restores when test finishes running
        this.stub(vm.fullName, "aMethod");
        myLib.otherThing();
        assert.calledOnce(vm.fullName.aMethod);
    },

    "Demonstrate spies": function () {
        // Wraps "aMethod". The original method is called, and you can also
        // do stub like assertions with it.
        this.spy(myLib, "aMethod");
        myLib.otherThing();
        assert.calledOnce(myLib.aMethod);
    }
    */
});
