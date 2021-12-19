using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace AsapSystems.Task.Models
{
    public class Person
    {[Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int Age { get; set; }
        [ForeignKey(nameof(Address))]
        public int AddressId { get; set; }
        public  Address Address { get; set; }
    }
}
