# 원티드 프리온보딩 프론트엔드 코스 사전과제

## 배포 및 동작

https://corgi-world.github.io/wanted-pre-onboarding-fe/

|     Email     | Password |
| :-----------: | :------: |
| msw@inu.ac.kr | A123456& |

https://user-images.githubusercontent.com/83255812/174305841-af543a4b-d669-49dc-b708-6be29428eb6f.mp4

## 구현

### Assignment 1 - `Login`

- [x] 로그인 컴포넌트 개발

- [x] Ref를 사용한 랜더링 최적화

  - email과 password의 input value를 state로 관리하지 않고 input에 접근하여 value를 가져왔습니다.

- [x] 로그인 시 Local Storage에 정보 저장 후 메인 페이지로 이동

### Assignment 2 - `GNB`

- [x] 스크롤에 관계 없이 화면 상단에 고정되는 GNB 구현

- [x] 가운데 input은 모바일 사이즈에서 사라지고 space-between 정렬

- [x] 가장 오른쪽 아이콘에 Logout 버튼 구현

### Assignment 3 - `Validation`

- [x] 정규 표현식을 사용하여 Validation 함수를 만들고 분리

- [x] 이메일과 비밀번호의 유효성 확인

  - 이메일 조건 : `@`, `.` 포함

  - 비밀번호 조건 : 대문자, 숫자, 특수문자 포함 8자리 이상

- [x] Validation 상태를 CSS로 표현

  - 이메일과 비밀번호 조건을 만족하지 못하면 input의 border를 red 색상으로 변경

  - Validation을 모두 통과한 경우 Button 색상을 진하게 변경

### Assignment 4 - `Routing`

- [x] 로그인, 로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현

- [x] 로그인이 완료되면 메인 페이지로 이동 되도록 구현

- [x] 메인 페이지에서 로그아웃되면 로그인 페이지로 이동 되도록 구현

- [x] History Push 사용 금지

  - 로그인 화면과 메인 화면의 url을 동일하게 하고 로그인 혹은 로그아웃 됐을 때 `location.reload();`를 사용해 페이지 이동을 구현하였습니다.

    ```javascript
    /* App.js */

    <Routes>
      <Route element={isLogined ? <Navigation /> : <Login />}>
        <Route path="/" element={<Main />}></Route>
        <Route path="/A" element={<A />}></Route>
        <Route path="/B" element={<B />}></Route>
        <Route path="/C" element={<C />}></Route>
        <Route path="/D" element={<D />}></Route>
      </Route>
    </Routes>
    ```

### Assignment 5 - `Feeds`

- [x] 피드 컴포넌트 개발

- [x] 레이아웃을 인스타그램과 동일하게 구현

- [x] 각 피드의 정보는 public/data 디렉토리에 json 형식으로 구성 후 fetch

  - 구성한 json 양식

    ```javascript
    /* public/feeds/data.json */

    [
      {
        index: 1,
        name: 'dlwlrma',
        profileURL: '/feeds/images/profile/dlwlrma.jpg',
        postURL: '/feeds/images/post/dlwlrma.jpg',
        like: '34,580',
        comments: [
          {
            name: 'msw',
            comment: '안녕하세요?',
          },
          {
            name: 'msw',
            comment: '반갑습니다~',
          },
        ],
      },

      /* ... */
    ];
    ```

- [x] 각각의 피드에 댓글을 추가 및 게시 후 Input 초기화 기능 구현

- [x] 피드는 화면 중앙에 위치하며 모바일 대응이 가능하게 구현

  - 미디어 쿼리를 사용하여 모바일 대응

    ```CSS
    /* Feed.jsx */

    @media (max-width: 499px) {
      min-width: 0px;
      width: 95%;
    }
    ```

- [x] 피드의 이미지는 각각 다른 사이즈를 사용

  - public/feeds/images/post

    - 1440x1770
    - 1440x1440
    - 750x499
    - 750x938
    - 816x816

- [x] image.onload를 사용하여 이미지가 로딩이 완료된 후 컴포넌트가 로딩 되도록 구현

  ```javascript
  /* Feed.jsx */

  useEffect(() => {
    const image = new Image();
    image.src = process.env.PUBLIC_URL + postURL;
    image.onload = (e) => {
      setLoading(false);
    };
  }, []);

  const [isLoading, setLoading] = useState(true);
  if (isLoading) return <></>;

  return (
    /* ... */
  )
  ```
