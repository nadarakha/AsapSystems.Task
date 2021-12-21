using AsapSystems.Task.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AsapSystems.Task.Services
{
   public interface IAddressesService
    {
        Task<IEnumerable<Address>> GetAddresses();
        Task<Address> GetAddress(int id);
        System.Threading.Tasks.Task PutAddress(Address address);
        System.Threading.Tasks.Task PostAddress(Address address);
        Task <Address> DeleteAddress(int id);
    }
}

