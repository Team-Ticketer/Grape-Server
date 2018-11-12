# Grape Server

- 제주 블록체인해커톤 팀 Ticketer의 Grape 서버입니다~~~

## API

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
    - _id picture name startDate endDate minPrice maxPrice
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
