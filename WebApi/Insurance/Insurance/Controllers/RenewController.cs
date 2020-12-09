using Insurance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Insurance.Controllers
{
    [RoutePrefix("API/Demo")]
    public class RenewController : ApiController
    {
        [Route("AddRenewDetails")]
        public HttpResponseMessage setClaimDetails()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                //DateTime date = System.DateTime.Now.AddYears(Convert.ToInt32(httpRequest["period"]));
                //Save to DB
                using (General_InsuranceEntities db = new General_InsuranceEntities())
                {
                    int policyNo = Convert.ToInt32(httpRequest["policyno"]);
                    Policy policy = db.Policies.Find(policyNo);
                    policy.Period = (int)((int)System.DateTime.Now.Year - (int)policy.IssueDate.Value.Year) + Convert.ToInt32(httpRequest["period"]);
                    policy.ExpiryDate = policy.ExpiryDate.Value.AddYears(policy.Period);
                    db.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
