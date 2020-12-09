using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Insurance.Models
{
    public class Contact
    {
        public string CustomerName { get; set; }
        public string Email { get; set; }
        public int ContactNumber { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}