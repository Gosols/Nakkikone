using MongoDB.Driver;
using Nakkikone.WebApi.Models;
using System.Collections.Generic;

namespace Nakkikone.WebApi.Services
{
    public interface ITicketServices
    {
        List<Ticket> GetTickets();
        Ticket GetTicket(string id);
        Ticket AddTicket(Ticket ticket);
        void DeleteTicket(string id);
        Ticket UpdateTicket(Ticket ticket);
    }
    public class TicketServices : ITicketServices
    {
        private readonly IMongoCollection<Ticket> _tickets;
        public TicketServices(IDatabaseClient dbClient)
        {
            _tickets = dbClient.GetTicketsCollection();
        }

        public Ticket AddTicket(Ticket ticket)
        {
            _tickets.InsertOne(ticket);
            return ticket;
        }

        public void DeleteTicket(string id)
        {
            _tickets.DeleteOne(ticket => ticket.Id == id);
        }

        public Ticket GetTicket(string id)
        {
            return (_tickets.Find(ticket => ticket.Id == id).First());
        }

        public List<Ticket> GetTickets()
        {
            return _tickets.Find(ticket => true).ToList();
        }

        public Ticket UpdateTicket(Ticket ticket)
        {
            GetTicket(ticket.Id);
            _tickets.ReplaceOne(t => t.Id == ticket.Id, ticket);
            return ticket;
        }
    }
}
