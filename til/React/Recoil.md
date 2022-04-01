# Recoil

> useContext나 상태의 끌어올림, props drilling 등의 상태 관리 보다 더욱 개선된 상태관리를 하기위해 사용한다.

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
```