using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AsapSystems.Task.Models;
using Microsoft.AspNetCore.Cors;
using AsapSystems.Task.Services;

namespace AsapSystems.Task.Controllers
{
    [Produces("application/json")]
    [Route("api/People")]

    public class PeopleController : Controller
    {
        private readonly IPeopleService _peopleServices;

        public PeopleController(IPeopleService peopleServices)
        {
            _peopleServices = peopleServices;
        }

        // GET: api/People
        [HttpGet]
        public async Task<IEnumerable<Person>> GetPeople()
        {
            return await _peopleServices.GetPeople();
        }

        // GET: api/People/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPerson([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var person = await _peopleServices.GetPerson(id);

            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }

        // PUT: api/People/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPerson([FromRoute] int id, [FromBody] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.Id)
            {
                return BadRequest();
            }
            await _peopleServices.PutPerson(person);

            if (!await PersonExistsAsync(id))
            {
                return NotFound();
            }


            return NoContent();
        }

        // POST: api/People
        [HttpPost]
        public async Task<IActionResult> PostPerson([FromBody] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _peopleServices.PostPerson(person);

            return CreatedAtAction("GetPerson", new { id = person.Id }, person);
        }

        // DELETE: api/People/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePerson([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var person = await _peopleServices.DeletePersonAsync(id);

            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }

        private async Task<bool> PersonExistsAsync(int id)
        {
            var person = await _peopleServices.GetPerson(id);

            if (person != null)
                return true;

            return false;
        }
    }
}