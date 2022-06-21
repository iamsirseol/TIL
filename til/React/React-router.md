## React-router

<br>

> 로그인이 되지 않은 상태에서 임의의 페이지 `localhost:3000/dashboard`로 라우팅을 하였을때 authority를 확인 한 후 로그인 화면으로 redirect되는 상황이다.

```js
import "./App.css";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// 위와 같이 기존의 App.js가 있다. 초기 화면은 `Signin` 페이지이다.
```

<br>

> 여기서 `/dahsboard`로 라우팅되지 않게 아래의 `PrivateRoute`를 하나 만들어준다.

```js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const auth = window.sessionStorage.getItem("access");

  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;

// 나는 프로젝트 중 세션스토리지에 토큰의 여부에 따라 접근가능하도록 하였다.
// <Outlet /> 은 상위 컴포넌트를 레이아웃 시킨다.
```

<br>

> 이제 `PrivateRoute`를 `App.js`에 다음과 같이 수정해준다.

```js
import "./App.css";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

<br>

참조: [stack overflow](https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou) <br />
[README.md로 이동](../../README.md)
