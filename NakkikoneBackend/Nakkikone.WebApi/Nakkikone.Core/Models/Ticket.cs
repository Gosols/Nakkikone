using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace Nakkikone.WebApi.Models
{
    public class Ticket
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id;
        public DateTime CreationDate { get; set; }
        public DateTime LastModified { get; set; }
        public User Creator { get; set; }
        public string TextContent { get; set; }
        public string Level { get; set; } // junior, senior, lead
        public string Category { get; set; } // e.g. Backend, or Frontend
        public string Type { get; set; } // e.g. bug, feature
        public string Status { get; set; } // e.g. in progress
        public double EstimationInHours { get; set; }
        public List<Comment> Comments { get; set; } // We'll see if I keep this
    }
}
