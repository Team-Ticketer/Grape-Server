/*
 * TODO: 티켓 구매/양도와 같은 트랜잭션마다 티켓의 주인을 바꾸는 메소드
 * TODO: walletid로 가지고 있는 티켓의 정보 반환하기
 */

const router = require('express').Router();
const ctrl = require('./ticket.ctrl');

router.get('/')
  .post('/register');

module.exports = router;
