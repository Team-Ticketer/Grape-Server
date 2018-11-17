# Grape Server

- 제주 블록체인해커톤 팀 Ticketer의 Grape 서버입니다~~~

## API

### POST /concert

#### Description
- 콘서트 만들기

#### Consume / Produce
- application/json

#### Parameters
- contract
  - Description: Contract
- name
  - Description: 콘서트 이름
- artist
  - Description: 아티스트 이름
- content
  - Description: 콘서트 소개, 내용
- video
  - Description: 비디오
- address
  - Description: 행사장 주소
- lat
  - Description: 행사장 위도
- lng
  - Description: 행사장 경도
- startDate
  - Description: 시작일
- endDate
  - Description: 종료일
- ownerName
  - Description: 주최자
- ownerEmail
  - Description: 주최자 이메일
- ownerDes
  - Description: 주최자 설명
- tickets
  - Description: 티켓 정보들
  - Type: Object Array
  - Example:
  ```json
  [{
    "name":"early bird",
    "description":"일찍 일어나는 새",
    "amount":100,
    "price":50
  }]
  ```

#### Reponse
- 201:
  - Description: 성공

### GET /concert

#### Description
- 콘서트 조회

#### Consume / Produce
- application/json

#### Parameters
- name
  - Description: 콘서트이름 (Concert Name)
- artist
  - Description: 아티스트 (Artist Name)
- date
  - Description: 날짜 (Date)
- address
  - Description: 주소 (Location)

#### Response
- 200
  - Description: 성공
  - Response:
    - _id picture name startDate endDate minPrice maxPrice location
  - Test: [테스트하기](https://grape-server.herokuapp.com/concert)

### GET /concert/:id

#### Description
- 콘서트 상세 조회

#### Consume / Produce
- application/json

#### Parameters
- id (path)
  - Description: 콘서트 id

#### Response
- 200
  - Description: 성공
  - Response:
    - name artist content video picture address placeName lat lng startDate endDate *owner*: Object *tickets*: Object Array
    - owner: { name, email, description }
    - tickets: [{ name, description, amount, price }]
  - Test: [테스트하기](https://grape-server.herokuapp.com/concert/test)

### GET /ticket

#### Description
- 가지고 있는 티켓 확인하기

#### Consume / Produce
- application/json

#### Parameters
- walletId
  - Description: 지갑 Id

#### Response
- 200
  - Description: 성공
  - Response: concert id의 Array
  - Example:
  ```json
  [
    "blah",
    "blah",
    "blah"
  ]
  ```


### POST /ticket

#### Description
- 티켓의 구매, 양도와 같은 작업 처리 시 주인 변경

#### Consume / Produce
- application/json

#### Parameters
- before
  - Description: 이전 티켓 주인의 walletId
- walletId
  - Description: 티켓을 구매 하는/양도 받는 사람의 walletId
- concertId
  - Description: 콘서트 아이디

#### Response
- 201
  - Description: 성공

### GET /user/check

#### Description
- 신규 유저인지, 기존 유저인지를 구분

#### Consume / Produce
- application/json

#### Parameters
- kakaoId
  - Description: 카카오 아이디

#### Response
- 200: 
  - Description: 성공
  - Example:
  ```json
  {
    "isExist": "true" // (or false)
  }
  ```

### POST /user/register

#### Description
- 유저와 walletId를 등록함

#### Consume / Produce
- application/json

#### Parameters
- kakaoId
  - Description: 카카오 아이디
- name
  - Description: 이름
- walletId
  - Description: 지갑 아이디

#### Response
- 201:
  - Description: 성공
- 400:
  - Description: walletId가 이미 존재함

### GET /user/nickname

#### Description
- walletId로 닉네임을 반환

#### Consume / Produce
- application/json

#### Parameters
- walletIdArr
  - Description: 지갑 아이디 배열
  - Example:
  ```json
  [
    "walletid1",
    "walletid2",
    "walletid3"
  ]
  ```

#### Response
- 200
  - Description: 성공
  - Example:
  ```json
  [
    "nickname1",
    "nickname2",
    "nickname3",
  ]
  ```
