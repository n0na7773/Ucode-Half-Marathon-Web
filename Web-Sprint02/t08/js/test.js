describe("checkBrackets", function() {
    it("Check brackets 1+", function() {
        assert.equal(checkBrackets('()(()()()))()'), 1);
    });
    it("Check brackets 2+", function() {
        assert.equal(checkBrackets('))()(('), 4);
    });
    it("Check brackets 3+", function() {
        assert.equal(checkBrackets('()()'), 0);
    });
    it("Check brackets 4+", function() {
        assert.equal(checkBrackets('((()))'), 0);
    });
    it("Check brackets 5+", function() {
        assert.equal(checkBrackets('(()))('), 2);
    });
    it("Check brackets 6+", function() {
        assert.equal(checkBrackets('()'), 0);
    });
    it("Check brackets 7+", function() {
        assert.equal(checkBrackets(')))((('), 6);
    });
    it("Check brackets 8+", function() {
        assert.equal(checkBrackets('))()(()((()()))))('), 4);
    });
    it("Check brackets 9+", function() {
        assert.equal(checkBrackets('()(())()('), 1);
    });
    it("Check brackets 10+", function() {
        assert.equal(checkBrackets(')))()()'), 3);
    });
    it("Check brackets 1-", function() {
        assert.equal(checkBrackets(' '), -1);
    });
    it("Check brackets 2-", function() {
        assert.equal(checkBrackets(false), -1);
    });
    it("Check brackets 3-", function() {
        assert.equal(checkBrackets(Math), -1);
    });
    it("Check brackets 4-", function() {
        assert.equal(checkBrackets('asd'), -1);
    });
    it("Check brackets 5-", function() {
        assert.equal(checkBrackets('123'), -1);
    });
});