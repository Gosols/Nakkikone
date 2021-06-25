using MongoDB.Driver;
using Nakkikone.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nakkikone.WebApi.Services
{
    public interface IUserServices
    {
        List<User> GetUsers();
        User GetUser(string id);
        User AddUser(User user);
        void DeleteUser(string id);
        User UpdateUser(User user);
    }
    public class UserServices : IUserServices
    {
        private readonly IMongoCollection<User> _users;

        public UserServices(IDatabaseClient dbClient)
        {
            _users = dbClient.GetUsersCollection();
        }

        public User AddUser(User user)
        {
            _users.InsertOne(user);
            return user;
        }

        public void DeleteUser(string id)
        {
            _users.DeleteOne(user => user.Id == id);
        }

        public User GetUser(string id)
        {
            return _users.Find(user => user.Id == id).First();
        }

        public List<User> GetUsers()
        {
            return _users.Find(user => true).ToList();
        }

        public User UpdateUser(User user)
        {
            GetUser(user.Id);
            _users.ReplaceOne(u => u.Id == user.Id, user);
            return user;
        }
    }
}
