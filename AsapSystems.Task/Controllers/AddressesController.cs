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
    [Route("api/Addresses")]

    public class AddressesController : Controller
    {
        private readonly IAddressesService _addressService;

        public AddressesController(IAddressesService addressService)
        {
            _addressService = addressService;
        }

        // GET: api/Addresses
        [HttpGet]
        public async Task<IEnumerable<Address>> GetAddresses()
        {
            return await _addressService.GetAddresses();
        }

        // GET: api/Addresses/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAddress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var address = await _addressService.GetAddress(id);

            if (address == null)
            {
                return NotFound();
            }

            return Ok(address);
        }

        // PUT: api/Addresses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAddress([FromRoute] int id, [FromBody] Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != address.Id)
            {
                return BadRequest();
            }

            if (!await AddressExistsAsync(id))
            {
                return NotFound();
            }

            await _addressService.PutAddress(address);

            return NoContent();
        }

        // POST: api/Addresses
        [HttpPost]
        public async Task<IActionResult> PostAddress([FromBody] Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _addressService.PostAddress(address);

            return CreatedAtAction("GetAddress", new { id = address.Id }, address);
        }

        // DELETE: api/Addresses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAddress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var address = await _addressService.DeleteAddress(id);
            if (address == null)
            {
                return NotFound();
            }

            return Ok(address);
        }

        private async Task<bool> AddressExistsAsync(int id)
        {
            var address = await _addressService.GetAddress(id);

            if (address != null)
                return true;

            return false;
        }
    }
}