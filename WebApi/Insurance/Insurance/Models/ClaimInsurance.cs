using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Insurance.Models
{
    public class ClaimInsurance
    {
        public int PolicyID { get; set; }
        public string PolicyName { get; set; }
        
        public string Model { get; set; }
        public double PolicyAmount { get; set; }
        public int Period { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public ClaimInsurance(int policyid, string policyname, double policyamount, int period, DateTime? ExpiryDate, string model)
        {
            this.PolicyID = policyid;
            this.PolicyName = policyname;
            this.PolicyAmount = policyamount;
            this.Period = period;
            this.ExpiryDate = ExpiryDate;
            this.Model = model;
        }
    }
}