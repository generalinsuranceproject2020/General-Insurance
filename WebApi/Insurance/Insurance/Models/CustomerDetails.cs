using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Insurance.Models
{
    public class CustomerDetails
    {
        public string CustomerName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string MobileNumber { get; set; }
        public string Email { get; set; }
        public CustomerDetails(string CustomerName, string Email, string MobileNumber, DateTime? DateOfBirth)
        {
            this.CustomerName = CustomerName;
            this.Email = Email;
            this.MobileNumber = MobileNumber;
            this.DateOfBirth = DateOfBirth;
        }
    }
}