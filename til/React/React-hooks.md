# **useMemo**

> 함수의 값이 변화하지 않을 경우 리렌더링하지않고 memoization하여 필요한 값만 가져오고 리렌더링 하지 않는 기능이다.
```js
const exampleMemo = useMemo(() => {
    return '임의의 함수'
}, ['임의의 함수 값의 state']);
```
<br>

# **useContext**

> 상위 컴포넌트에서 하위 컴포넌트로 props drilling을 하지 않고 useContext를 사용하여 바로 데이터를 컴포넌트에서 사용 가능

# **useCallback**

*