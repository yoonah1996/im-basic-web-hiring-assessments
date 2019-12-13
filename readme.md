# Basic Web Sections Hiring Assessments

## Intro

이번 HA 에서는 fullstack으로 영화 정보를 보여주는 application을 만드는 과제 입니다.
아래의 getting started를 client / server 각 각 읽고 프로젝트를 시작 할 준비를 합니다.

## CLIENT

### Getting Started

1. client 디렉토리로 들어갑니다.
2. (client 디렉토리 안에서) npm install로 의존성 모듈을 설치 합니다.
3. (client 디렉토리 안에서) npm start로 기본적으로 만들어져 있는 react app 개발서버를 켜봅니다.
4. (client 디렉토리 안에서) npm test로 test를 실행 하여, test 요구조건에 application을 맞춥니다.

### Requirements

1. 각 컴포넌트들을 static data로 render 하고 있는 컴포넌트들을 dynamic하게 데이터를 받아서 렌더 할 수 있도록 합니다.
2. MovieRankList 컴포넌트가 movie 의 갯수에 따라 동적으로 component들이 렌더 되도록 수정합니다.
3. 우측의 Movie를 클릭 했을 때, CurrentMovie의 data가 바뀔 수 있도록 이벤트를 설정 합니다.
4. 영화 데이터를 본인이 작성한 서버에서 api 호출로 받아 옵니다.

## SERVER

### Getting Started

1. server 디렉토리로 들어갑니다.
2. (server 디렉토리 안에서) npm install로 의존성 모듈을 설치 합니다.
3. (server 디렉토리 안에서) node 로 index.js를 실행 합니다.
4. (server 디렉토리 안에서) nodemon 등의 셋팅이 필요하다면, package.json에서 script를 설정합니다.
5. (server 디렉토리 안에서) npm test로 test를 실행하여, test 요구조건에 맞추어 server web

### Requirements

1. 영화 리스트를 모두 내려주는 api를 제작 합니다.
2. 특정 id를 받았을 때 특정 영화 데이터만 내려주는 api를 제작 합니다.(id를 express에서 URL params로 받는 방법을 검색 해보세요.)
3. data.json을 활용하여 api를 설계 합니다.
4. 실제 클라이언트 요청을 받을 수 있게 필요한 처리를 합니다.

## Submission

1. server & client 각 각 폴더에서 `npm test`로 테스트를 실행하여 각 디렉토리에서 server-result.json or client-result.json 파일이 생성된 것을 확인 하세요
2. student.json 파일을 본인의 정보에 맞게 수정 합니다.
3. npm run submit 스크립트를 통해 과제를 제출 합니다.(최신 테스트 결과를 반영하여 제출합니다. 제출 전 테스트를 꼭 돌려주세요.)
