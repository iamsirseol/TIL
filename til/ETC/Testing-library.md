## Testing Library

> _The more your tests resemble the way your software is used, the more confidence they can give you._

```js
import { render, screen } from "@testing-library/react";
import Signin from "components/Signin";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "Redux-tookit/store";

global.matchMedia = // 에러핸들링 이유에 대해서 좀 더 구체적으로 찾아야함.
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe("Siginin component test", () => {
  let utils; // beforeEach를 이용하여 매번 render를 해준다.
  beforeEach(() => {
    utils = render(
      <Provider store={store}>
        <BrowserRouter>
          <Signin />
        </BrowserRouter>
      </Provider>
    );
  });
  // Signin 컴포넌트가 잘 렌더링 되었는지 확인.
  it("should render <Signin />", () => {
      utils;
  });

  it("sign in button is enabled", () => {
    // Signin 컴포넌트에서 "sign in" 버튼이 작동이 되는지 확인.
    expect(screen.getByRole("button", { name: /sign in/i })).toBeEnabled();
  });
});
```

// TDD 계속 진행 중..

<br>

[README.md로 이동](../../README.md)
