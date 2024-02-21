# 1장 다중 통화를 지원하는 Money 객체

개발자가 작성할 코드에 대한 테스트 케이스를 먼저 작성하고, 그 후에 테스트를 통과시키기 위한 확장이 가능한 최소한의 테스트 코드를 Money 예제를 통해 소개했다.

<br>

### TS / JEST 예제

```
// Dollar.ts
class Dollar {
  public amount: number;

  public constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): void {
    this.amount *= multiplier;
  }
}

export { Dollar };
```

```
// dollar.test.ts
const { Dollar } = require("./dollar");

describe("Dollar 테스트", () => {
  it("times 메서드 테스트", () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);

    five.times(3);
    expect(five.amount).toBe(15); //실패
  });
});

```

<br>
<br>

# 2장 타락한 객체

첫 장의 Dollar 테스트의 경우 five.times(2) 를 거치면 Dollar five의 amount는 10으로 바뀐다. 원래 객체의 5값이 변하는 타락한 객체이기 때문이다. 따라서 five라는 Dollar 객체의 값은 5로 고정되어있어야한다. five의 값을 지키기 위해 times함수가 새로운 객체를 반환해야 했다.

<br>

### TS / JEST 예제

```
// dollar.ts
class Dollar {
  public amount: number;

  public constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar { //return 값이 생겼으므로 void -> Dollar로 변경
    return new Dollar(this.amount * multiplier);
  }
}

export { Dollar };
```

```
// dollar.test.ts
const { Dollar } = require("./dollar");

describe("Dollar 테스트", () => {
  it("times 메서드 테스트", () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });
});

```

<br>
<br>

# 3장 모두를 위한 평등

전 장에서 Dollar 의 객체값을 생성자를 통해 설정된 이후에는 변하지 않기 때문에 새로운 값을 원한다면 새로운 객체를 더 만드는 방법을 만들었다면, 3장에서는 삼각 측량법을 통해 true와 false를 리턴하는 equals를 생성했다.

<br>

### TS / JEST 예제

```
// dollar.ts
class Dollar {
  ...

  public equals(object: object): boolean {
    const dollar = object as Dollar;
    return this.amount === dollar.amount;
  }
}
```

```
// dollar.test.ts
const { Dollar } = require("./dollar");

describe("Dollar 테스트", () => {
   it("equals 메서드 테스트", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});

```

<br>
<br>

# 4장 프라이버시

팩토리 메서드를 도입하여 dollar의 amount 변수를 public에서 사용하지 않고 private으로 선언하여 객체를 캡슐화해 테스트를 진행하는 방법을 소개했다.

<br>

### TS / JEST 예제

```
// dollar.test.ts
const { Dollar } = require("./dollar");

describe("Dollar 테스트", () => {

  it("팩토리 메서드 테스트", () => {
    const five = new Dollar(5); // product 변수를 선언하지 않고
    expect(new Dollar(10).equals(five.times(2))); // 객체에 바로 값을 주입해 비교한다 따라서 amount 변수를 public에서 사용할 필요가 없어졌다.
    expect(new Dollar(15).equals(five.times(3)));
  });
});

```

```
// dollar.ts
class Dollar {
  private amount: number; // public이었던 amount private 처리

  public constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: object): boolean {
    const dollar = object as Dollar;
    return this.amount === dollar.amount;
  }
}

export { Dollar };

```

<br>
<br>

# 5장 솔직히 말하자면

dollar만 지원했던 기존 객체를 다른 나라 통화 (Franc)으로 바꿔본다. 돈이 하는 일의 근본은 같은데 이름만 다른 객체 Franc이 등장한다.
이제 어떻게 공통된 메소드를 뽑고 통화별 다른 차이가 있는 메소드를 추가로 생성해야 할까?

<br>
<br>
