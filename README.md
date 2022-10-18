# 프리온보딩 프론트 개인 1번 미션

## 프로젝트 설명

- 룰루랩 웹 페이지를 통해 병원을 예약하고 예약한 내역을 조회합니다.
- 동적 라우팅을 통해 페이지를 구성합니다.
- 노쇼 이력이 있으면 예약이 불가능하도록 합니다.
- 웹/모바일 크기에 따라 반응형으로 구현합니다.
  <br/>
  <br/>

## 언어

- JavaScript
- React.js
  <br/>
  <br/>

## 라이브러리

- styled-components
- styled-reset
- react-icons
- react-router-dom
- react-datepicker
- react-bootstrap
- prettier
- axios
- bootstrap
  <br/>
  <br/>

# 프로젝트 설치 및 실행 방법

## ✅ 설치방법

1. Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다.

```
https://nodejs.org/
```

<br/>

2. 리포지토리를 클론해주세요.<br/>

```
git clone https://github.com/cratuss/pre-onboarding-lululab-leedongho.git
```

<br/>

3.dependencies를 설치해주세요.

```
npm install
```

<br/>
<br/>

## ✅ 실행방법

1. 다음 명령어를 이용해 Dev server를 실행시켜주세요.

```
npm run dev
```

<br/>

2. 브라우저에서 http://localhost:3000/pre-onboarding-lululab-leedongho/ 로 접속하거나,
[배포주소](https://cratuss.github.io/pre-onboarding-lululab-leedongho/)로 접속해주시면 됩니다.

   <br/>
   <br/>
   <br/>

# 저작권, 라이선스 정보

[저작권] (주)룰루랩
<br/>

- ✅ 프로젝트내 이미지는 모두 (주)룰루랩 에서 제공받았습니다.
  <br/>
  <br/>

# 기능

- [네비게이션] 전체 레이아웃 및 UI
- [네비게이션] 로고 및 예약조회/예약하기 버튼 추가
- [메인 페이지] 메인 비디오 레이아웃 및 UI
- [메인 페이지] 사용자 이름으로 간편 로그인 기능 추가(로컬 스토리지 저장)
- [예약날짜선택 페이지] 달력 라이브러리 추가
- [예약날짜선택 페이지] 날짜별 예약가능 시간 버튼 추가
- [예약날짜선택 페이지] 노쇼한사람 예약가능 시간 비표시
- [예약날짜선택 페이지] 폼으로 이동 버튼 추가(날짜 미선택시 비활성화)
- [예약날짜선택 페이지] 중복 예약의 경우 모달로 핸들링
- [예약날짜선택 페이지] 유저반응영역 및 하단 UI, 버튼 상호작용 추가
- [예약폼 페이지] 폼 레이아웃 밑 UI
- [예약폼 페이지] 완료 페이지로 이동 버튼 추가(폼 미작성시 비활성화)
- [예약완료 페이지] 난수로 예약번호 생성해서 출력
- [예약조회검색 페이지] 검색창 레이아웃 및 UI, 
- [예약조회검색 페이지] 결과페이지 이동 버튼 추가(검색내용없을시 비활성화)
- [예약조회검색 페이지] 검색내용에 해당하는 정보 없을시 모달로 핸들링
- [예약조회결과 페이지] 결과정보 레이아웃 및 UI
- [예약조회결과 페이지] 메인으로 이동 버튼 추가


<br/>

# 주요기능 및 설명

## ✅ 메인페이지 버튼 이동 및 사용자 설정

![로딩바](https://user-images.githubusercontent.com/87900492/194311898-63badb3c-47e5-4e4c-b603-f32661c5ab65.gif)
<br/>
<br/>

## ✅ 노쇼 사용자는 예약가능시간 비표시

![무한스크롤](https://user-images.githubusercontent.com/87900492/194322937-b0c899dd-5ecf-465b-af24-235b1c6c2587.gif)
<br/>
<br/>

## ✅ 카테고리별 Nav 구현

![카테고리메뉴](https://user-images.githubusercontent.com/87900492/194311912-1fbace32-067d-415b-95b8-30a13efb26f2.gif)
<br/>
<br/>

## ✅ 카테고리별 키보드 테마 표시 구현

![아이템리스트](https://user-images.githubusercontent.com/87900492/194311901-de6fc14e-6367-4b72-ad90-83242da55949.gif)
<br/>
<br/>

## ✅ 스토어/충전소/MY테마/설정 Click시 선택 구현

![풋터메뉴](https://user-images.githubusercontent.com/87900492/194322975-ae177802-a2f2-4603-ba74-e416d1614d3f.gif)
<br/>
<br/>

## ✅ 키보드 테마 클릭시 해당 키보드 상세페이지로 이동

![디테일이동](https://user-images.githubusercontent.com/87900492/194311892-ef3312ee-c098-405a-918e-4a3b0b39944b.gif)
<br/>
<br/>

## ✅ 맘에들어요/심쿵했어요/응원해요/갖고싶어요 Click시 선택 구현

![좋아요버튼](https://user-images.githubusercontent.com/87900492/194311911-3580e447-92f0-4378-8060-d061b5e8e6fe.gif)
<br/>
<br/>

## ✅ 반응형 메인페이지

![반응형메인](https://user-images.githubusercontent.com/87900492/194315784-f76bcc72-9977-46ef-a9e7-a3a7ca046670.gif)
<br/>
<br/>

## ✅ 반응형 상세페이지

![반응형상세](https://user-images.githubusercontent.com/87900492/194315771-3b1154ed-9482-4dba-90ae-6850b067fb31.gif)
<br/>
<br/>

## ✅ 키보드테마 img 클릭시 테스트 키보드 팝업 On/Off 기능구현

![팝업온오프](https://user-images.githubusercontent.com/87900492/194311918-533b0a0b-8888-4d37-9c1d-3cfa2b98be77.gif)
<br/>
<br/>

## ✅ 텍스트 삭제시 자음/모음 순서대로 제거되는 기능구현

![텍스트삭제](https://user-images.githubusercontent.com/87900492/194311914-37328604-c9df-4fe7-ae0f-4d6b0bcc53b3.gif)
<br/>
<br/>

## ✅ :-) / 스페이스바/ .(dot) / 한줄띄우기 기능구현

![스페이스바](https://user-images.githubusercontent.com/87900492/194311899-ab330cc0-a584-4747-88fe-a1a10cf1b14c.gif)
<br/>
<br/>

## ✅ shift 클릭시 쌍자음으로 바꾸고 쌍자음 클릭시 단자음으로 변경하는 기능 구현

![한영쌍자음](https://user-images.githubusercontent.com/87900492/194311922-575ea93c-1a2c-463f-b840-34cb0007267c.gif)

# 개인 깃허브, 블로그 
- 깃허브 https://github.com/cratuss
- 블로그 https://cratuss.tistory.com/
