# **Styled-Components**

* props로 전달하여 컴포넌트 재사용
```js
import sun from '../../images/sun.png';

 <WeatherIcon imgUrl={sun}></WeatherIcon>

// ============== //

export const WeatherIcon = styled.li`
    width: 22em;
    height: 22em;
    background-image: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`
 ```

 <br>

 > 3개의 div 엘리먼트가 있고 각 엘리먼트의 끝에 | 와 같은 분기선을 나타낸다고 한다.
 ```js

// 생략 //

 div {
      width: 30%;
      height: 10em;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;

      &:after {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        content: "";
        width: 1px;
        height: 2em;
        background-color: #fff;

      }
      &:nth-child(3) {  // 마지막 선을 삭제하는 코드
        &:after { 
          width: 0;  
        }
 }
 ```
