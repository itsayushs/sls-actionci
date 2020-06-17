const hellofunction = require('./handler');

test("Returns about-us for english language", () => {
    expect(typeof hellofunction.hello("DummyData")).toBe('object');
});