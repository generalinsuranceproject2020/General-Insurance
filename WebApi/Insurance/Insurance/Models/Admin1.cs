using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Insurance.Models
{
    public class Admin1
    {
        public int PolicyID { get; set; }
        public double ClaimAmount { get; set; }
        public string CLaimReason { get; set; }
        public string ClaimStatus { get; set; }
        public string ClaimVehicleConditionURL { get; set; }

        public int ClaimID { get; set; }
        public Admin1(int a, double b, string c, string d, string e, int f)
        {
            this.PolicyID = a;
            this.ClaimAmount = b;
            this.CLaimReason = c;
            this.ClaimStatus = d;
            this.ClaimVehicleConditionURL = e;
            this.ClaimID = f;
        }
    }
}