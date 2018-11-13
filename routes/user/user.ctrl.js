const User = require('../../models/User');

const checkWallet = function checkWalletWithKaKaoId(req, res) {
  /*
   * TODO:
   * 1. id가 컬렉션에 존재하는지 확인
   * 2. 있으면 True, 없으면 (등록해야하면) False
   */
  const { kakaoId } = req.query;
  User.findOne({ kakaoId })
    .then((u) => {
      if (u) res.status(200).json({ result: 'OK', isExist: true });
      else res.status(200).json({ result: 'OK', isExist: false });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ result: 'BAD' });
    });
};

const registerWallet = async function registerWalletWithId(req, res) {
  /*
   * TODO:
   * 1. walletId이 중복되지 않았는지 확인
   * 2. 저장
   */
  const { kakaoId, name, walletId } = req.body;
  const u = await User.findOne({ walletId });

  if (u) res.status(400).json({ result: 'BAD', msg: 'Already Exist!' });
  else {
    const newUser = await (User({ kakaoId, name, walletId }).save());
    console.log(newUser);
    res.status(201).json({ result: 'OK' });
  }
};

const getNickname = async function getNicknameWithWalletId(req, res) {
  /*
   * TODO:
   * 1. walletId를 배열로 받기
   * 2. walletId에 해당하는 닉네임들 그대로 반환
   */
  const { walletIdArr } = req.body;
  const names = await User.find({ walletId: { $in: walletIdArr } });
  res.status(200).json(names);
};

module.exports = {
  checkWallet,
  registerWallet,
  getNickname,
};
