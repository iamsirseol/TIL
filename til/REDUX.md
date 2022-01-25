# **Redux**

> React는 상태 관리를 위한 라이브러리가 아니다. 그러나 컴포넌트 간 서로 느슨하게 결합되어(loose coupled), 구조적으로 코드작성이 가능하다. 따라서 *리덕스*는 다음과 같은 이유에서 사용한다.
1. props문법을 사용하여 상위 컴포넌트에서 하위 컴포넌트로 전달하지 않기 위해 사용 (하위의 하위 컴포넌트까지 상태가 전달되게 되면 상태 관리가 복잡해질 수 있음.)
2. state를 별도로 보관하여 관리하기 위해 사용 
3. `2번`의 이유와 같이 상태를 전역에서 관리할 수 있으므로 효율적인 상태 관리가 가능

<br>

## Redux 작동 원리
 `| component |` ➡️ `| action |` ➡️ `| reducer |` ➡️ `| store |` ➡️ `| component |`

1. component는 우리가 화면으로 보는 app이다.
2. store는 정보를 저장하고 있는 저장소이다.
3. component에서 상태가 변경이되면 store에 없데이트를 해줘야한다.
4. 이 때 직접적으로 store에 상태를 업데이트 하는 것이 아니라 중간의 action과 reducer를 사용하여 상태를 관리한다.
5. dispatch를 통해 component의 상태가 호출이 되고
6. action에 정의된 내용이 reducer에 의해 handle된다.
7. 이렇게 handle된 내용이 store에 업데이트가 된다.
8. 업데이트된 store에서 실시간으로 상태를 받아와 component가 업데이트가 된다.

## 코드 구조
```
npm install redux // 터미널에 리덕스를 설치한다.
```
```js
const redux = require('redux');
const createStore = redux.createStore;

// actions
// action-types
const ADD_ONE = 'ADD_ONE';
const addOne = () => {
    return {
        type: 'ADD_ONE'
    }
}

// reducers
const initialState = {
    members : 10000
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE: 
            return {
                ...state,
                members: state.members + 1
            }
        default: return state;
    }
}

// sotre
const store = createStore(reducer);
console.log(store); // 아래와 같이 객체에 여러 함수가 있다.
// {
//  dispatch: [Function: dispatch],
//  subscribe: [Function: subscribe],
//  getState: [Function: getState],
//  replaceReducer: [Function: replaceReducer],
//  '@@observable': [Function: observable]
// }

store.subscribe(() => {
    console.log('members -->>', store.getState());
})

store.dispatch(addOne());
store.dispatch(addOne());
store.dispatch(addOne());
// 아래와 같이 1씩 증가함을 볼 수 있다.
// members -->> { members: 10001 }
// members -->> { members: 10002 }
// members -->> { members: 10003 }
```
