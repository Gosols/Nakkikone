using System;

namespace Nakkikone.WebApi.Models
{
    public class Comment
    {
        public string Text { get; set; }
        public User User { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
