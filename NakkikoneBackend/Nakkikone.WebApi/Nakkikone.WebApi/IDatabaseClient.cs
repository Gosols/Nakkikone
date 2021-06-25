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
            var client = new MongoClient(databaseConfig.Value.Connection_String);
            var database = client.GetDatabase(databaseConfig.Value.Database_Name);
            _tickets = database.GetCollection<Ticket>(databaseConfig.Value.Tickets_Collection_Name);
            _users = database.GetCollection<User>(databaseConfig.Value.Users_Collection_Name);
        }
        public IMongoCollection<Ticket> GetTicketsCollection() => _tickets;
        public IMongoCollection<User> GetUsersCollection() => _users;
    }
}
