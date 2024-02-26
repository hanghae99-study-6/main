class Dollar {
  private amount: number;

  public constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    //this.amount *= multiplier;
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: object): boolean {
    const dollar = object as Dollar;
    return this.amount === dollar.amount;
  }
}

export { Dollar };
