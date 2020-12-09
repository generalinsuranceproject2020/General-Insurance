using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Insurance.Models
{
    public class Admin
    {
        public string adhar { get; set; }
        public string vehicledocument { get; set; }
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }
        public string License { get; set; }
        public string status { get; set; }

        public int PolicyID { get; set; }
        public Admin(int cid, string name, string a, string b, string c, string d, int id)
        {
            this.CustomerID = cid;
            this.CustomerName = name;
            this.adhar = a;
            this.vehicledocument = b;
            this.License = c;
            this.status = d;
            this.PolicyID = id;
        }
    }
}