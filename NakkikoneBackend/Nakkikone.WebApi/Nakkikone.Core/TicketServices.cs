using System;
using System.Collections.Generic;

namespace Nakkikone.Core
{
    public interface ITicketServices
    {
        List<Ticket> GetTickets();
    }
    public class TicketServices : ITicketServices
    {
        public List<Ticket> GetTickets()
        {
            return new List<Ticket>
            {
                new Ticket
                {
                    Id = "1",
                    CreationDate = DateTime.Now,
                    LastModified = DateTime.Now,
                    Creator = new User
                            {
                                Id = "kulli",
                                FirstName = "Tenho",
                                LastName = "Tius",
                                Email = "Tenho.Tius@kusiperse.com",
                                Password = "bibbels",
                                Title ="Yliamiraali",
                                Level = "Senior",
                                ActiveTickets = new List<Ticket>()
                            },
                    TextContent ="Menkää kaikki töihin hähä",
                    Level = "Junior",
                    Category ="Bäkkärihomoilua",
                    Type = "Feature",
                    Status = "In Progress",
                    EstimationInHours = 5.5,
                    Comments = new List<Comment>()
                }

            };
        }
    }
}
