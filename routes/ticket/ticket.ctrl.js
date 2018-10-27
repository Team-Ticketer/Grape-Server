const Concert = require('../../models/Concert');
const Ticket = require('../../models/Ticket');

const buyTicket = function buyTicketWithWallet(req, res) {
  const {
    encryptedTicket, ticketName, concertId, walletAddress,
  } = req.body;
  const newTicket = new Ticket({
    encryptedTicket,
    concertId,
    ticketName,
    walletAddress,
    isUsed: false,
  });
  newTicket.save()
    .then(() => res.status(201).json({ result: 'OK' }))
    .catch(() => res.stauts(200).json({ result: 'BAD' }));
};

const getTicketList = async function getTicketListWithWallet(req, res) {
  const { walletAddress } = req.query;
  let tickets = await Ticket.find({ walletAddress, isUsed: false }, 'concertId ticketName walletAddress');
  const concerts = await Concert.find({ contract: tickets.map(e => e.concertId) }, 'contract name placeName startDate');
  tickets = tickets.map(t => Object.assign(t, concerts.find(c => c.contract === t.concertId)));
  res.status(200).json(tickets);
};

const getTicketDetail = async function getTicketDetailWithId(req, res) {
  const { id } = req.params;
  const ticket = Ticket.findById(id, 'ticketName concertId');
  const concert = Concert.findOne({ contract: ticket.concertId });
  res.status(200).json({
    name: concert.name,
    ticketName: ticket.ticketName,
    date: concert.startDate,
    placeName: concert.placeName,
  });
};

const checkTicket = async function checkTicketWithGreateAwesomeWonjunsAlgorithm(req, res) {
  const { encryptedTicket } = req.query;
  const ticket = await Ticket.findOne(encryptedTicket);
  if (ticket) res.status(200).json({ result: 'OK' });
  else res.status(403).json({ result: 'BAD' });
};

module.exports = {
  buyTicket,
  getTicketDetail,
  getTicketList,
  checkTicket,
};
