var Environment;
(function (Environment) {
    Environment["local"] = "Sprint";
    Environment["development"] = "Pair_Programming";
    Environment["Staging"] = "QA_Release";
    Environment["Production"] = "Live_Release";
})(Environment || (Environment = {}));
function runTests(environment) {
    console.log("This test suite is executed for ".concat(environment, " purpose."));
}
runTests(Environment.local);
runTests(Environment.Production);
runTests(Environment.Staging);
runTests(Environment.development);
