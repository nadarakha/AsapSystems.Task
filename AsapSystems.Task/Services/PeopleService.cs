using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AsapSystems.Task.Models;
using Microsoft.EntityFrameworkCore;

namespace AsapSystems.Task.Services
{
    public class PeopleService : IPeopleService
    {
        private readonly Context _context;
        public PeopleService(Context context)
        {
            this._context = context;
        }
       

        public async Task<Person> DeletePersonAsync(int id)
        {
            var person = _context.People.SingleOrDefault(m => m.Id == id);
            _context.People.Remove(person);
            await _context.SaveChangesAsync();

            return person;
        }

        public async Task<IEnumerable<Person>> GetPeople()
        {
            return await _context.People.AsNoTracking().Include(p => p.Address).ToListAsync();
        }

        public async Task<Person> GetPerson(int id)
        {
            return await _context.People.SingleOrDefaultAsync(m => m.Id == id);
        }

        public async System.Threading.Tasks.Task PostPerson(Person person)
        {
            _context.People.Add(person);
            await _context.SaveChangesAsync();
        }

        public async System.Threading.Tasks.Task PutPerson(Person person)
        {
            _context.Entry(person).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
