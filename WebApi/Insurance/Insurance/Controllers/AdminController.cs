using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Insurance.Models;

namespace Insurance.Controllers
{
    public class AdminController : ApiController
    {
        General_InsuranceEntities db = new General_InsuranceEntities();
        public HttpResponseMessage Get()
        {
            var emp = db.Vehicles.ToList();
            var emp1 = db.Policies.ToList();
            List<Admin> a = new List<Admin>();
            try
            {
                foreach (var item in emp)
                {
                    foreach (var item1 in emp1)
                    {
                        if (item.VehicleID == item1.VehicleID)
                        {
                            if (item1.PolicyStatus == "Pending")
                            {
                                int cid = Convert.ToInt32(item.CustomerID);
                                Customer c = db.Customers.Find(cid);
                                string name = c.CustomerName;
                                var adhar = item.AadharURL;
                                var vehicledocument = item.VehicleDocumentURL;
                                var License = item.DrivingLicenseURL;
                                var status = item1.PolicyStatus;
                                int PolicyID = item1.PolicyID;
                                a.Add(new Admin(cid, name, adhar, vehicledocument, License, status, PolicyID));
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

        public HttpResponseMessage GetTax([FromUri] int? id)
        {
            string res;
            var emp = db.Policies.Find(id);
            if (emp != null)
            {
                Policy p = db.Policies.Find(emp.PolicyID);
                p.PolicyStatus = "Approved";
                DateTime d = DateTime.Now;
                p.IssueDate = d;
                DateTime d1 = d.AddYears(p.Period);
                p.ExpiryDate = d1;
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
