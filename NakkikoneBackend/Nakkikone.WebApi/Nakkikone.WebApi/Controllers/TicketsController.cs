using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nakkikone.WebApi.Models;
using Nakkikone.WebApi.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nakkikone.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TicketsController : ControllerBase
    {
        private readonly ITicketServices _ticketServices;
        public TicketsController(ITicketServices ticketServices)
        {
            _ticketServices = ticketServices;
        }
        [HttpGet]
        public IActionResult GetTickets()
        {
            return Ok(_ticketServices.GetTickets());
        }
        [HttpGet("{id}", Name = "GetTicket")]
        public IActionResult GetTicket(string id)
        {
            return Ok(_ticketServices.GetTicket(id));
        }

        [HttpPost]
        public IActionResult AddTicket(Ticket ticket)
        {
            _ticketServices.AddTicket(ticket);
            return CreatedAtRoute("GetTicket", new { id = ticket.Id }, ticket);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(string id)
        {
            _ticketServices.DeleteTicket(id);
            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateTicket(Ticket ticket)
        {
            return Ok(_ticketServices.UpdateTicket(ticket));
        }

    }
}
