const User = require('../../models/User');

const checkWallet = function checkWalletWithKaKaoId(req, res) {
  /*
   * TODO:
   * 1. id가 컬렉션에 존재하는지 확인
   * 2. 있으면 True, 없으면 (등록해야하면) False
   */
};

const registerWallet = function registerWalletWithId(req, res) {
  /*
   * TODO:
   * 1. walletId이 중복되지 않았는지 확인
   * 2. 저장
   */
};

const getNickname = function getNicknameWithWalletId(req, res) {
  /*
   * TODO:
   * 1. walletId를 배열로 받기
   * 2. walletId에 해당하는 닉네임들 그대로 반환
   */
};

module.exports = {
  checkWallet,
  registerWallet,
  getNickname,
};
