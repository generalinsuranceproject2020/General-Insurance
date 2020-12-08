//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Insurance.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Claim
    {
        public int ClaimID { get; set; }
        public Nullable<int> CustomerID { get; set; }
        public Nullable<int> VehicleID { get; set; }
        public Nullable<int> PolicyID { get; set; }
        public Nullable<System.DateTime> ClaimDate { get; set; }
        public double ClaimAmount { get; set; }
        public string CLaimReason { get; set; }
        public string ClaimStatus { get; set; }
        public string ClaimVehicleConditionURL { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Policy Policy { get; set; }
        public virtual Vehicle Vehicle { get; set; }
    }
}