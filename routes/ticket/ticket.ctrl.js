const Ticket = require('../../models/Ticket');

// TODO: walletId로 가지고 있는 티켓의 정보 반환하기
const getTickets = async function getTicketsWithWalletId(req, res) {
  const { walletId } = req.query;
  const { tickets } = await Ticket.findOne({ walletId });
  res.status(200).json(tickets);
};

// TODO: 티켓 구매/양도와 같은 트랜잭션마다 티켓의 주인을 바꾸는 메소드, 파라미터에 이전 주인 walletId로 추적
const registerOwner = function registerOwnerWithWalletId(req, res) {
  const { before, walletId, concertId } = req.body;
  Promise.all([
    Ticket.findOneAndUpdate({ walletId: before }, { $pull: { tickets: concertId } }),
    Ticket.findOneAndUpdate({ walletId }, { $push: { tickets: concertId } }),
  ]).then(() => {
    res.status(201).json({ result: 'OK' });
  });
};

module.exports = {
  getTickets,
  registerOwner,
};
