# 안녕하세요 
### 저는 원티드 프리온보딩 프론트엔드 코스에 지원한 이진희라고 합니다! 
* 주로 React, Redux 기반으로 프론트엔드를 개발합니다.
* 최근에는 테스트(UI test, mock server), 웹 성능 최적화, 자동화 테스트/배포를 공부하고 있습니다.
* 더 자세한 제 소개는 [자기소개서](https://jinheeplan.notion.site/8b20dabed1ac40158f9aa8156412fa0d)에서 볼 수 있습니다!

# 과제 풀이
* 테스트 계정
  - email : test@test.com
  - password : test!4Test
 
* 저는 제일 먼저 노트에 컴포넌트 구성을 어떤 식으로 할 지, 유저입장에서 프로그램이 어떤 순서로 작동되게 될 지, 로직은 어떤 식으로 짜야할지 간단하게 생각한 후 개발을 하곤 합니다.
<image src="https://velog.velcdn.com/images/brill_be/post/70c4e9d8-ef69-4a4c-b2ec-07b3271ddc8f/image.jpeg" height="400px" alt="노트1"/>
<image src="https://velog.velcdn.com/images/brill_be/post/a3436b5b-0af2-43d0-9474-1ae195a905ca/image.jpeg" height="400px" alt="노트2"/>
<br />

# 특히 어려웠던 부분과 해결방법

###  1. 로그인 화면 렌더링을 최적화
  - input의 값이 변할 때마다 state값을 업데이트하게 되면 한 글자를 입력할 때 마다 재렌더링이 발생합니다.
  - 이를 막기 위해 input value에 직접 state를 연결하지 않고, 사용자가 로그인 버튼을 누르면 ref를 통해 value(id,password)를 가져와 로그인이 되도록 했습니다.
### 2. 로그인 정보 밸리데이션
- input 이벤트가 발생할 때 validation이 되도록 이벤트 핸들러를 작성했습니다. 단, input이벤트가 발생할 때마다 validation을 하는 것은 부적절하다고 생각해 1초마다 validation을 하도록 throttling 처리를 해주었습니다.
### 3. 이미지 로딩이 완료되면 컴포넌트를 렌더링 
  - display:none을 하면 컴포넌트는 화면에 렌더링이 되지 않지만, 이미지의 onload 함수는 동작하는 것을 확인했습니다.
- fetch해서 받아온 피드들의 이미지들이 전부 로딩이 완료되면, 1초뒤에 loading화면이 사라지고 피드가 렌더링되게 했습니다.
- 여러 장의 이미지가 있었기에 배열 안에 각 피드의 이미지가 로드됐는지를 확인하는 배열을 선언해주었고, 이미지 로딩이 완료될 때마다 모든 이미지가 로딩이 완료됐는지 확인해주었습니다. 이 때 모든 이미지가 로딩이 되었다면 1초후에 isAllLoaded state를 true로 업데이트 해 state의 업데이트에 의해 피드가 렌더링될 수 있게 했습니다.
- 각 피드의 이미지가 로드됐는지 확인하는 배열은 렌더링에 직접적으로 관여하지 않아 state로 다루지 않아도 되기에, useRef를 이용했습니다.
  
