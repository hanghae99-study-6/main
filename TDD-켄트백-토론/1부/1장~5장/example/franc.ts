class Franc {
  private amount: number;

  public constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  public equals(object: object): boolean {
    const franc = object as Franc;
    return this.amount === franc.amount;
  }
}

export { Franc };
