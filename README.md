# Grape Server

- 제주 블록체인해커톤 팀 Ticketer의 Grape 서버입니다~~~

## Server

### API

#### POST /signup

##### Description
- 회원가입

##### Consume / Produce
- application/json (Consume 한정으로 application/x-www-form-urlencoded도 받음)

##### Parameters
- id
  - Description: 아이디
  - Type: string
  - Required: YES
- pw
  - Description: 비밀번호
  - Type: string
  - Required: YES
- email
  - Description: 이메일
  - Type: string
  - Required: YES
- phonenum
  - Description: 전화번호
  - Type: string
  - Required: YES

##### Response
- 201
  - Description: 성공적인 회원가입!
  - Response: 없어요
- 418
  - Description: 저는 사실 찻잔임;; (id중복일 경우)
  - Response: 없어요

#### POST /signin

##### Description
- 로그인이요

##### Consume / Produce
- application/json (Consume 한정으로 application/x-www-form-urlencoded도 받음)

##### Parameters
- id
  - Description: 아이디
  - Type: string
  - Required: YES
- pw
  - Description: 비밀번호
  - Type: string
  - Required: YES

##### Response
- 200
  - Description: 성공적인 로그인!
  - Response: 없어요
- 401
  - Description: 로그인 실패
  - Response: 없어요


#### POST /concert

##### Description
- 콘서트 등록

##### Consume / Produce
- multipart/form-data (사진때문에)

##### Parameters
- contract
  - Description: 컨트랙트
  - Type: string
  - Required: YES
- picture
  - Description: 콘서트 대표 사진
  - Type: file
  - Required: YES
- content
  - Description: 콘서트 내용
  - Type: string
  - Required: YES
- lat
  - Description: 위도
  - Tpe: number(double)
  - Required: YES
- lng
  - Description: 경도
  - Tpe: number(double)
  - Required: YES

##### Response
- 201
  - Description: 성공적인 등록
  - Response: 없어요

### DB

#### User
```
id: string
pw: string
email: string
phonenum: string
```
 
#### Concert
```
contract: string
picture: string
content: string
lat: number(double)
lng: number(double)
```