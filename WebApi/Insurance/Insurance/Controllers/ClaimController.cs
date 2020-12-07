using Insurance.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Insurance.Controllers
{
    [RoutePrefix("API/Demo")]
    public class ClaimController : ApiController
    {
        [Route("AddClaimDetails")]
        [HttpPost]
        public HttpResponseMessage setClaimDetails()
        {
            try
            {
                //Customer c = new Customer();
                string imageName = null;
                var httpRequest = HttpContext.Current.Request;

                //Upload Image
                var postedFile = httpRequest.Files["Image"];
                //Create custom filename
                if (postedFile != null)
                {
                    imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
                    imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
                    var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
                    postedFile.SaveAs(filePath);
                }
                DateTime d, date;
                //Save to DB
                using (General_InsuranceEntities db = new General_InsuranceEntities())
                {
                    Claim claim = new Claim()
                    {
                        PolicyID = Convert.ToInt32(httpRequest["policyno"]),
                        CLaimReason = httpRequest["reason"],
                        ClaimStatus = "Pending",
                        ClaimAmount = Convert.ToDouble(httpRequest["claim"]),
                        ClaimVehicleConditionURL = imageName

                    };
                    var polic= db.Policies.ToList();
                    foreach (var item in polic)
                    {
                        if(Convert.ToInt32(httpRequest["policyno"]) == item.PolicyID)
                        {
                            claim.CustomerID = item.CustomerID;
                            claim.VehicleID = item.VehicleID;
                        }
                    }
                    db.Claims.Add(claim);
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
