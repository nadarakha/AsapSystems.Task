using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AsapSystems.Task.Models;
using Microsoft.EntityFrameworkCore;

namespace AsapSystems.Task.Services
{
    public class AddressesService : IAddressesService
    {
        private readonly Context _context;
        public AddressesService(Context context)
        {
            this._context = context;
        }
        public async Task<Address> DeleteAddress(int id)
        {
            var address = await _context.Addresses.SingleOrDefaultAsync(m => m.Id == id);
            _context.Addresses.Remove(address);
            await _context.SaveChangesAsync();
            return  address;
        }

        public async Task<Address> GetAddress(int id)
        {
          return await _context.Addresses.SingleOrDefaultAsync(m => m.Id == id); 
        }

        public async Task<IEnumerable<Address>> GetAddresses()
        {
            return await _context.Addresses.ToListAsync();
        }

        public async System.Threading.Tasks.Task PostAddress(Address address)
        {
            _context.Addresses.Add(address);
            await _context.SaveChangesAsync();
        }

        public async System.Threading.Tasks.Task PutAddress( Address address)
        {
            _context.Entry(address).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
