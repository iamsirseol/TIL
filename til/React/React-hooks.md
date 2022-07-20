# **useMemo**

> **상태**의 값이 변화하지 않을 경우 리렌더링하지않고 memoization하여 필요한 값만 가져오고 리렌더링 하지 않는 기능이다.
```js
const exampleMemo = useMemo(() => {
    return '값'
}, ['리렌더링이 될 경우의 state']);
```
<br>

# **useContext**

> 상위 컴포넌트에서 하위 컴포넌트로 props drilling을 하지 않고 useContext를 사용하여 바로 데이터를 컴포넌트에서 사용 가능
```js
// ExampleContext.js
import { createContext } from 'react';

export const ExampleContext = createContext(null);
```
```js
// App.js
import { ExampleContext } = from './';

const App = () => {
    const [state, setState] = useState(false);

    return (
        <ExampleContext.Provider value={{ state, setState}}>
            <Page state={state} setState={setState}/>
        <ExampleContext.Provider>
    )
}

export default App;
```
```js
// Page.js

const Page = () => {
    const { state, setState } = useContext(EampleContext);
// state와 setState 사용가능
    ...
}

```
> 만들고자하는 파일에 *createContext*를 해준다음 App.js에서 만든 Context를 Provider를 해준다음 value로 주고자하는 데이터를 삽입해주고 원하는 페이지에 props로 전달해주면 해당 페이지에서 사용이 가능하다.

<br>

# **useCallback**

> useMemo는 state를 memoization하여 불필요한 리렌더링을 막는 것처럼 useCallback은 **함수**를 불필요하게 작동시키지 않게 하기 위한 hook이다.
```js
const exampleCallback = useCallback(() => {
    return '값'
}, ['리렌더링이 될 경우의 state']);
```

<br>

# **useReducer**

> useReducer는 useState보다 복잡한 state를 관리할 수 있는 hook으로 reducer(state 업데이트), dispatch(state 업데이트 요청), action(업데이트 할 내용)의 세 요소로 상태를 관리한다.
```js
// 간단 예시
const ACTION_TYPES = {
    plus: 'plus',
    minus: 'minus'
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.plus: 
            return state + action.payload;
        case ACTION_TYPES.minus:
            return  state - action.payload;
        default:
            return state;
    }
}

// Redux와 동일하게 action의 타입 별 실행되는 리듀서가 다름을 알 수 있다.
```

<br>

[README.md로 이동](../../README.md)
