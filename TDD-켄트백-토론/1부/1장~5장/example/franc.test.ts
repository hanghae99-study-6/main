const { Franc } = require("./franc");

describe("Franc 테스트", () => {
  it("times 메서드 테스트", () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  it("equals 메서드 테스트", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });

  it("팩토리 메서드 테스트", () => {
    const five = new Dollar(5);
    expect(new Dollar(10).equals(five.times(2)));
    expect(new Dollar(15).equals(five.times(3)));
  });
});
