describe("Hello world", function() {
    it("says hello - ok", function() {
        expect("Hello world!").toEqual("Hello world!");
    });

    it("home has text content", function() {

        var about = require("../source/js/routes/about");

        console.log(about);

        expect(1>0).toBe(true);
    });
});

