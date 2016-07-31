function helloWorld() {
    return "Hello world!";
}

describe("Hello world", function() {
    it("says hello - ok", function() {
        document.write("ok hello");
        expect(helloWorld()).toEqual("Hello world!");
    });
});

