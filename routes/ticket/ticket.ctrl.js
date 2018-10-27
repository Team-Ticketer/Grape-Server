const crypto = require('crypto');
const Concert = require('../../models/Concert');
const Ticket = require('../../models/Ticket');

const buyTicket = function buyTicketWithWallet(req, res) {
  const { transactionId } = req.query;
  const [concertId, ticketName, walletAddress] = transactionId.split('.');
  const newTicket = new Ticket({
    ticketId: crypto.pbkdf2Sync(`${concertId}.${ticketName}.${walletAddress}`, process.env.SALT, 100, 100, 'sha512').toString('base64'),
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

module.exports = {
  buyTicket,
  getTicketList,
};
