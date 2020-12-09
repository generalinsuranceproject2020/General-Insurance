using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Insurance.Models;

namespace Insurance.Controllers
{
    public class AdminClaimController : ApiController
    {
        General_InsuranceEntities db = new General_InsuranceEntities();
        public HttpResponseMessage Get()
        {

            var emp = db.Claims.ToList();
            var emp1 = db.Policies.ToList();
            List<Admin1> a = new List<Admin1>();
            try
            {
                foreach (var item in emp1)
                {
                    foreach (var item1 in emp)
                    {
                        if (item.PolicyID == item1.PolicyID)
                        {
                            if (item1.ClaimStatus == "Pending")
                            {
                                var PolicyID = item1.PolicyID;
                                var ClaimAmount = item1.ClaimAmount;
                                var CLaimReason = item1.CLaimReason;
                                var ClaimStatus = item1.ClaimStatus;
                                var ClaimVehicleConditionURL = item1.ClaimVehicleConditionURL;
                                var ClaimID = item1.ClaimID;
                                a.Add(new Admin1(Convert.ToInt32(PolicyID), ClaimAmount, CLaimReason, ClaimStatus, ClaimVehicleConditionURL, Convert.ToInt32(ClaimID)));
                            }
                        }
                    }

                }
            }
            catch(Exception)
            {
                throw;
            }
            if (a.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, a);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "no data found");
            }
        }
        public HttpResponseMessage Get([FromUri] int? id)
        {
            string res;
            var emp = db.Claims.Find(id);
            if (emp != null)
            {
                Claim p = db.Claims.Find(emp.ClaimID);
                p.ClaimStatus = "Approved";
                DateTime d = DateTime.Now;
                p.ClaimDate = d;
                db.SaveChanges();
                res = "1";
                return Request.CreateResponse(HttpStatusCode.OK, res);
            }
            else
            {
                string message = "Status not ubdated";
                return Request.CreateResponse(HttpStatusCode.BadRequest, message);
            }
        }
    }
}
