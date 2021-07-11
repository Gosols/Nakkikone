﻿using Microsoft.AspNetCore.Mvc;
using Nakkikone.WebApi.Models;
using Nakkikone.WebApi.Services;

namespace Nakkikone.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserServices _userServices;
        public UsersController(IUserServices userServices)
        {
            _userServices = userServices;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_userServices.GetUsers());
        }

        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult GetUser(string id)
        {
            return Ok(_userServices.GetUser(id));
        }

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            _userServices.AddUser(user);
            return CreatedAtRoute("GetUser", new { id = user.Id }, user);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(string id)
        {
            _userServices.DeleteUser(id);
            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateUser(User user)
        {
            return Ok(_userServices.UpdateUser(user));
        }
    }
}
