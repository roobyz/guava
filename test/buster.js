// ###########################################################################
// Goal: Configure buster.js testing framework
//
var config = exports; // Vanity

config["Browser tests"] = {
    environment: "browser",    // options "browser" and "node"
    rootPath: "../",
    libs: [
        "public/js/vendor.js"
    ],
    sources: ["public/js/app.js"],
    tests: ["test/*-test.js"]
};

config["Server tests"] = {
    extends: "Browser tests",
    environment: "node"
};
