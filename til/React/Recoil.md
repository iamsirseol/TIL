# Recoil

> useContext나 상태의 끌어올림, props drilling 등의 상태 관리 보다 더욱 개선된 상태관리를 하기위해 사용한다.

예제는 recoil 공식문서에서 가져왔다.

## Atoms
> Atom은 상태의 단위이며, 다른 컴포넌트에서도 구독과 업데이트가 가능하다. 이때 업데이트가 될 때 리렌더링된다.
```js
// Recoil은 atom이라는 상태 단위로 관리를 한다.
// atom은 다른 컴포넌트에서도 읽고 사용할 수 있다.

const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});

function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
// useState와 유사하게 useRecoilState-hook을 사용한다.
  return (
    <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
      Click to Enlarge
    </button>
  );
}

// 위와 같이 코드를 작성하였을 경우 버튼을 클릭할때마다 폰트의 사이즈가 1씩 늘어난다.
```

<br>

## Selectors
> *Selectors*는 atoms나 다른 selectors를 입력으로 받는 순수함수이다. 이 함수로 업데이트가 될 경우이거나 selectors가 변경될 때 리렌더링된다.
```js
// 위의 'Atoms'에서 아래의 selector 함수를 추가하여 상태를 업데이트 할 수 있다.

const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});

const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  }
});

function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
// useState와 유사하게 useRecoilState-hook을 사용한다.
  return (
    <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
      Click to Enlarge
    </button>
  );
```
