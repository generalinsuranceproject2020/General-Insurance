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
    public class PolicyController : ApiController
    {
        public static int CustomerID;
        [Route("AddPolicyDetails")]
        [HttpPost]
        public HttpResponseMessage setPolicyDetails()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                //Save to DB
                using (General_InsuranceEntities db = new General_InsuranceEntities())
                {
                    Policy policy = new Policy()
                    {
                        PolicyName = httpRequest["Policy"],
                        Period = Convert.ToInt32(httpRequest["Period"]),
                        PolicyAmount = Convert.ToDouble(httpRequest["Premium"]),
                        PolicyStatus = "Pending"
                    };
                    string email = httpRequest["Email"];
                    string model = httpRequest["Model"];
                    Customer customer = new Customer();
                    CustomerID = 0;
                    foreach (Customer c in db.Customers)
                    {
                        if (c.Email == email)
                        {
                            CustomerID = c.CustomerID;
                            break;
                        }
                    }
                    if (CustomerID > 0)
                    {
                        policy.CustomerID = CustomerID;
                    }
                    Vehicle vehicle = new Vehicle();
                    int VehicleID = 0;
                    foreach (Vehicle v in db.Vehicles)
                    {
                        if (v.Model == model && v.CustomerID == CustomerID)
                        {
                            VehicleID = v.VehicleID;
                            break;
                        }
                    }
                    if (VehicleID > 0)
                    {
                        policy.VehicleID = VehicleID;
                    }
                    db.Policies.Add(policy);
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
