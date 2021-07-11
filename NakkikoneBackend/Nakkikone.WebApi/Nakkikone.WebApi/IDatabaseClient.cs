using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Nakkikone.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nakkikone.WebApi
{
    public interface IDatabaseClient
    {
        IMongoCollection<Ticket> GetTicketsCollection();
        IMongoCollection<User> GetUsersCollection();
    }

    public class DatabaseClient : IDatabaseClient
    {
        private readonly IMongoCollection<Ticket> _tickets;
        private readonly IMongoCollection<User> _users;
        public DatabaseClient(IOptions<DatabaseConfig> databaseConfig)
        {
            var client = new MongoClient("mongodb+srv://gosols:kosonen95@nakkikonecluster.pnooe.mongodb.net/NakkikoneDB?retryWrites=true&w=majority");
            var database = client.GetDatabase("NakkikoneDB");
            _tickets = database.GetCollection<Ticket>("Tickets");
            _users = database.GetCollection<User>("Users");
        }
        public IMongoCollection<Ticket> GetTicketsCollection() => _tickets;
        public IMongoCollection<User> GetUsersCollection() => _users;
    }
}
