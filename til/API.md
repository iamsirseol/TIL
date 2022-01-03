# API란? 
> Application Programming Interface의 약자로,
응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 의미한다.
다음 그림과 같이 요리사가 고객의 주문을 하면 음식을 제공하게 해준 키오스크가 API로 볼 수 있다.
다시 말해 API는 프로그램들이 서로 소통하는 방법으로, 일종의 체계, 혹은 약속이라고 볼 수 있다.

<br>

* Private API : 기업내에서만 사용이 가능한 API
* Partner API : 정해져 있는 파트너들만 사용이 가능한 API
* Public API : 대중에게 공개되어 누구나 쓸 수 있는 API
![image](https://user-images.githubusercontent.com/85858672/147566993-e19419e6-2739-403c-8b07-cad12445d686.png)
이미지 출처 : [https://heysign.co.kr](https://heysign.co.kr)

<br>

## Geolocation API
> Geoloaction API는 어플리케이션에 위치정보를 제공할 수 있는 API다.
‘당연히’ 웹 보안 상 유저의 브라우저에서 위치의 정보 접근이 승인이 된 경우에만 위치 접근이 가능하다.
* 핸드폰 : GPS를 통해 위치 확인이 가능
* PC : WiFi를 통해 최선의 방법으로 위치 확인 (핸드폰보다 오차가 있을 수 있다.)
![image](https://user-images.githubusercontent.com/85858672/147567282-b9285219-408e-4d56-b22f-148b885af91b.png)

<br>

* clearWatch : 현재위치 추적 종료
* watchPosition : 네비게이션처럼 장치가 지속적으로 위치 추적
* getCurrentPosition : 현재의 위치 추적 (프로젝트에 사용한 함수)
```js
console.log(navigator.geolocation)
// 아래와 같은 값들을 조회 가능
[[Prototype]]: Geolocation
  clearWatch: ƒ clearWatch()
  getCurrentPosition: ƒ getCurrentPosition()
  watchPosition: ƒ watchPosition()
  constructor: ƒ Geolocation()
  Symbol(Symbol.toStringTag): "Geolocation"
  [[Prototype]]: Object
```

<br>

다음과 같이 결과를 확인해 보았을때 여러 정보들이 조회가 가능하다.
여기서 이번에 나는 필요한 데이터가 latitude(위도)와 longitude(경도)다.
```js
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
}) // 이와 같이 크롬개발자창에 입력할 경우 위 이미지와 같은 위치 허용 문구가 뜬다.
// 그런 다음 아래와 같은 값이 조회가 되는데 값을 불러오기까지 몇 초의 시간이 소요가 된다.
GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1641215776627}
  coords: GeolocationCoordinates {latitude: 37.5447519, longitude: 126.8809651, altitude: null, accuracy: 14.176, altitudeAccuracy: null, …}
  timestamp: 1641215776627
  [[Prototype]]: GeolocationPosition
```

<br>

## OpenWeatehr API
> 추가적으로 이번 프로젝트 간 날씨 API를 사용 하였는데 가장 보편적으로 사용하는 OpenWeatherAPI를 사용하였다. ~~다른 API로 변경 예정(최저/최고 기온이 가끔씩 동일)~~ <br>
> 아래 이미지는 OpenWeather API call 중에서 lat(위도)와 lon(경도)를 사용하여 조회를 할 수 있다.
```js
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={key} // 초기 api call
```
> apiid 즉 api key는 각 API 소스를 제공하는 곳에서 발급이 가능하다. 타인에게는 왠만해서 공유가 안되는 것이 좋다. *#표기로 대체*
![image](https://user-images.githubusercontent.com/85858672/147934310-df333846-7ee6-42ad-ab24-3e2983312778.png)
```js
api.openweathermap.org/data/2.5/weather?lat=37.5447519&lon=126.8809651&appid=######## 
// 그렇다면 찾은 값들을 각 {lat}, {lon}, {key}에 입력해 postman으로 조회해 보자.

{
    "coord": {
        "lon": 126.881,
        "lat": 37.5448
    },
    "weather": [
        {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 272.56,
        "feels_like": 270.66,
        "temp_min": 272.05,
        "temp_max": 273.99,
        "pressure": 1024,
        "humidity": 80
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.54,
        "deg": 150
    },
    "snow": {
        "1h": 0.4
    },
    "clouds": {
        "all": 75
    },
    "dt": 1641216145,
    "sys": {
        "type": 1,
        "id": 8105,
        "country": "KR",
        "sunrise": 1641163644,
        "sunset": 1641198344
    },
    "timezone": 32400,
    "id": 1948005,
    "name": "Kwangmyŏng",
    "cod": 200
}
```
> 원하는 값이 잘 나온 것 같다. 그러나 위치가 서울인데 아무래도 앞서 설명했듯이 PC에 GPS기능이 없다보니 근처 도시인 광명이 조회되는 듯하다.

