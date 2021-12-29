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
![image](https://user-images.githubusercontent.com/85858672/147663975-bb7f735f-aa9c-4bd0-b12a-50dffbc3fb9e.png)

