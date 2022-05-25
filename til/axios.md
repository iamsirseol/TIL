## Axios

> axios는 프로젝트 등을 통해서 깊이 있게는 아니지만 많이 사용해 보았다. <br>
> 하지만 axios.create를 통해서 원하는 config 데이터를 설정해주고 instace를 만들 수 있다.

```js 
import axios from "axios";

const remote = process.env.REACT_APP_URL

const instance = axios.create({
  baseURL: remote,
  timeout: 5000,
});
// instance를 이렇게 만들어 주면 

const api = {
  login: (data) =>
    aixosInstance({
      url: "/auth/login",
      method: "post",
      data,
   }),
}
// 위와 같이 api 오브젝트 안에 여러개의 api 함수들을 만들 수 있다.

``` 
```js
import api from './api/'

const loginReq = asycn (body) => {
  const res = await api.login(body)
 //  ... 중략
}

// 요청 사용이 가능하다.
```

> 추가적으로 이번에 프로젝트를 하면서 모든 요청에 엑세스 토큰을 사용하였는데 로그인 시에는 토큰이 필요하지 않아서 토큰 여부에 따라 interceptor를 이용하여 예외처리를 해 주었다.

```js
...
```
