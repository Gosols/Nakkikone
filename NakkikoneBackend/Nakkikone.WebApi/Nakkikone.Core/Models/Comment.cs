using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nakkikone.WebApi.Models
{
    public class Comment
    {
        public string Text { get; set; }
        public User User { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
