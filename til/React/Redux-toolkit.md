# Redux Toolkit

> 리덕스의 경우 npm trends에서만 봐도 다른 상태관리 라이브러리보다 많은 다운로드 수를 가지고 있다. 
>  하지만 리덕스는 사용하기까지의 난이도와 러닝커브도 높고 추가적인 다른 라이브러리를 다운받아야 하는 경우가 많다.
>  이러한 문제점을 해결하기 위해서 리덕스툴킷을 사용한다.

inex.js는 기존의 셋팅과 동일하다.
```js
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

store.js를 만들어준다.
```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```
