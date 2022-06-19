# Introduction

안녕하세요<br></br>본 레포지토리는 원티드 프리온보딩 프론트엔드 사전과제를 진행한 기록을 남긴 곳 입니다.

## 사전과제<br></br>

<img width="800" src="https://user-images.githubusercontent.com/99126860/174478423-f98a4f25-5021-4422-86a2-513ff4cfe55a.png" >

### 로그인 페이지

<img width="800" src="https://user-images.githubusercontent.com/99126860/174478450-87f9253c-be4e-4a0f-93f6-2d59d6ef6d77.png" >

### 메인 페이지, 네비게이션바

## 파일 구조

```
📦public
 ┣ 📂data
 ┃ ┣ 📜 FeedData.json
 ┃ ┗ 📜 userData.json
 ┣ 📂 images
 ┃ ┣ 📜 android_logo.png
 ┃ ┣ 📜 appstore_logo.png
 ┃ ┣ 📜 facebook_logo.png
 ┃ ┗ 📜 instagram_logo.png
 ┣ 📜 favicon.ico
 ┣ 📜 index.html
 ┣ 📜 logo192.png
 ┣ 📜 logo512.png
 ┣ 📜 manifest.json
 ┗ 📜 robots.txt
📦 src
 ┣ 📂 api
 ┃ ┗ 📜 api.js
 ┣ 📂 components
 ┃ ┣ 📂 common
 ┃ ┃ ┗ 📜 GNB.js
 ┃ ┗ 📂main
 ┃ ┃ ┣ 📜 Comment.js
 ┃ ┃ ┗ 📜 Feed.js
 ┣ 📂 pages
 ┃ ┣ 📂 login
 ┃ ┃ ┗ 📜 Login.js
 ┃ ┣ 📂main
 ┃ ┃ ┗ 📜 Main.js
 ┃ ┗ 📜 PreAssignmentGuide.jsx
 ┣ 📂styles
 ┃ ┣ 📜 constants.js
 ┃ ┗ 📜 globalStyles.js
 ┣ 📂 utils
 ┃ ┗ 📜 validator.js
 ┣ 📜 App.js
 ┗ 📜 index.js
```

# 구현사항 시연

## Assignment1 - `Login`

## Assignment4 - `Routing`

<details>
  <summary>로컬스토리지의 유저정보 유무에 따라 페이지 이동</summary>
  
  - 로컬스토리지에 유저정보가 있을 땐 main페이지로 유정정보가 없을 땐 로그인 페이지로 이동
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174485115-8d6b1806-ee87-4f5a-87b2-6f3fad6673b5.gif"/>
  
  - 유저정보가 없을 시 페이지 이동
  <br></br>
  <br></br>  
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174485307-a86a6675-7d7f-43be-bbc8-fb92769ec214.gif"/>

- 유저정보가 있을 시 페이지 이동
</details>
<details>
  <summary>로그인 시 메인페이지로 이동</summary>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174484409-3024438b-a209-4cbc-8965-3302064541ed.gif"/>

- 라우팅 로직을 통해 로컬스토리지에 유저정보가 저장이 되면서 메인페이지로 이동
- `userdata`에서 정보를 확인 한 후 확인이 되면 Local Storage에 정보가 저장 되며 main 페이지로 이동함.
- react-router-dom v6로 버전업 되면서 redirect가 navigate로 변경 됨.
</details>

<details>
  <summary>로그아웃 시 로그인페이지로 이동</summary>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174484084-7a625193-d93a-42a7-83be-979ff2c9e191.gif"/>
  <br></br>
  <br></br>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174484405-58b6b243-ede0-4930-a9bf-4d27d0ed7bdc.gif"/>

- navbar 맨 끝의 로그아웃 버튼을 누르면 로그아웃이 실행되며 Local Storage에서 유저정보가 삭제하며 로그인창으로 이동함.
</details>

## Assignment2 - `GNB`

<details>
  <summary>GNB</summary>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174486600-a0f416de-2f4a-4ba6-a510-4d023ce6f910.png"/>
  
  - web `width:1024px` 적용함.
  - space btween(flex로 대응) 사용함.
  <br></br>
  <br></br>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174486631-186355c7-3a74-4bf1-8e22-ee3ea58bb45d.png"/>

- 모바일 `width:576px` 적용함.
- input 제거함.
- 미디어쿼리 사용함.
</details>
<details>
  <summary>Sticky</summary>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174487230-208de747-d09c-4ce6-a11a-a70b1f43d90a.gif"/>

- `sticky` 적용하여 navbar 상단에 고정함.

</details>
<details>
  <summary>모바일반응형 input사라짐, 양옆 정렬</summary>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174487376-01bc69ce-0338-40d2-9c69-9ab7e8f20dee.gif"/>

- 모바일 반응형 미디어쿼리 사용하여 input사라짐.
- space btween 으로 정렬함.

- </details>

## Assignment3 - `Validation`

<details>
<summary>Validation check</summary>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174485913-15fa6acd-580a-4689-9ee3-124b5ded2d62.gif"/>

- 유효성 검사 input boder, button 색상 변경
- 이메일 조건 - @ , . 포함
- 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상
- 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인

</details>

<details>
  <summary>정규표현식 email, 비밀번호</summary>

- email, 비밀번호 정규표현식을 사용함.

```js
email =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
비밀번호 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

</details>
<details>
  <summary>Validation 함수 분리</summary>
  
  - `📂 utils`폴더에 `📜 validator.js` Validation 로직 함수 분리함
 ```
  📦 src
 ┣ 📂 utils
 ┃ ┗ 📜 validator.js
 ┣ 📜 App.js
 ┗ 📜 index.js
 ```

</details>

## Assignment5 - `Feeds`

<details>
  <summary>Feeds</summary>
   <img width="600" src="https://user-images.githubusercontent.com/99126860/174483486-ff1b1457-38ac-481c-9fda-bb208d88da90.gif"/>
  
  - map을 사용하여 feed 3개 이상 랜더링함.
  - 고정 `height`을 주지 않고 각각의 사이즈별로 feed 랜더링함.
  - `image.onload`사용 하여 Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현함.
</details>
<details>
  <summary>Axios</summary>
  
  - `axios` 사용하여  `public/data` 디렉토리에서 데이터 요청 (요청함수 분리), `상세코드 노션`에 정리함.

</details>
<details>
  <summary>댓글 추가</summary>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174482236-3590a84e-efda-4348-aafd-5e4fbdd33d7b.gif"/>

- 각각의 피드 따로 댓글추가 가능, 엔터 키와 게시 버튼으로 입력 가능함.
</details>

<details>
  <summary>모바일 반응형</summary>
  <img width="600" src="https://user-images.githubusercontent.com/99126860/174481817-e4842536-8453-4fb9-bed8-01f62a6f5b88.gif"/>

- 피드 전체적으로 반응형으로 퍼블리싱 되어있어 폰트사이즈만 모바일 사이즈에 맞게 대응함.
</details>
