# TDD

### Reference
[What is TDD (Test Driven Development)?](https://www.spiceworks.com/tech/devops/articles/what-is-tdd/)

## TDD는 무엇이고, 어떻게 사용하는가?

Kent Beck이 1990년대 후반 XP(eXtreme Programming) 소프트웨어 설계에서 도입한 방법론. 

테스트 중심 개발의 약어로, 애플리케이션의 각 구성 요소들을 구축하기 전에 테스트 케이스를 먼저 작성하여 테스트하고 리팩토링하는 반복적인 방법론이다. 

![제목을 입력해주세요_-001](https://github.com/yunieom/TDD-study/assets/67372083/167ec5b6-1300-4146-ac1d-cd686fdf7561)

### Red → Green → Refactor 주기를 가진 프로세스

1. Red
    1. 구현될 동작에 대한 테스트 생성
    2. 만들고 싶은 기능을 점검하는 테스트 코드로, 기능코드가 정의되지 않았기 때문에 테스트 결과는 실패로 반환된다.
2. Green
    1. 기능에 대한 코드 작성
    2. 테스트 코드를 만족시키는 것을 최우선으로 하는 코드 작성
3. Refactoring
    1. 기능의 성능 향상, 높은 재사용성, 가독성이 좋은 코드로 코드 개선
    2. 테스트 코드를 통해 다시 기능 코드를 점검

<br>

### 예시코드 (jest)

1. Red

```jsx
// addNums.ts
function addNums(a:number, b:number): number{

}
export default addNums;
```

```jsx
// addNums.spec.ts
import { addNums } from './addNums.ts';

test('should add two numbers correctly', () => {
  expect(addNums(2, 3)).toBe(5);
});

=> FAIL
```

1. Green

```jsx
// addNums.ts
function addNums(a:number, b:number): number{
	return a + b;
}
export default addNums;

=> PASS
```
<br>

## 왜 TDD를 사용해야하는가?

1. 테스트 기능 별로 작성해야 하기 때문에 간단하고 제일 작은 규모의 코드를 생성하게 한다. 
→ 높은 코드 품질과 적은 오류
2. 디버깅하는데 소요되는 시간을 줄여 작업 속도를 높일 수 있고 추후 유지보수가 용이하다.
→ 설계 수정시간 단축, 결과적으로 프로젝트 비용 절감
3. 통합 테스트에 국한되지 않고, TDD 테스팅을 자동화 시켜 더욱 정확산 테스트 근거를 바탕으로 정의서 작성이 가능하다. 
→ 테스트 문서 대체 기능

<br>

## TDD의 한계점

1. 타이트한 프로젝트에 적합하지 않다. TDD를 효과적으로 사용할 수 있는 수준까지 교육기간이 걸리며, 기능 별 테스트를 진행해 사전 준비기간이 오래 소요된다.
2. 단발성 개발 및 난이도가 낮은 프로젝트의 경우 테스트 코드를 작성하지 않아도, 예외상황이 보이기 때문에 비효율적일 수 있다.
