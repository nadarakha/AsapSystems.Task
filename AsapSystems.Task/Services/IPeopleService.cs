using AsapSystems.Task.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AsapSystems.Task.Services
{
  public  interface IPeopleService
    {
        Task<IEnumerable<Person>> GetPeople();
        Task<Person> GetPerson(int id);
        System.Threading.Tasks.Task PutPerson(Person person);
        System.Threading.Tasks.Task PostPerson(Person person);
        Task<Person> DeletePersonAsync(int id);
    }
}

