//to test JS, run in terminal from root folder ("road trip"): jasmine-node spec
describe("multiplication", function () {
  it("should multiply 2 and 3", function () {
    var product = calculator.multiply(2, 3);
    expect(product).toBe(6);
  });
});

