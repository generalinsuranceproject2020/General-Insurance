using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Insurance.Models
{
    public class Login
    {
        public string Email { set; get; }
        public string Password { set; get; }
    }
    public class Registration : Customer { }
}