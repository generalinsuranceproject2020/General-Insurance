using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using Insurance.Models;

namespace Insurance.Controllers
{
    [RoutePrefix("API/Demo")]
    public class CustomerController : ApiController
    {
        General_InsuranceEntities db = new General_InsuranceEntities();
        
        string CustEmail = LoginController.CustEmail;
        int Customerid = 0;
        [Route("CustomerDetails")]
        public HttpResponseMessage GetDetails()
        {
            //return Request.CreateResponse(HttpStatusCode.OK, CustEmail);
            var httpRequest = HttpContext.Current.Request;
            
            //CustEmail = session["user"].ToString();
            var emp = db.Customers.ToList();
            
            foreach (var item in emp)
            {
                if(CustEmail == item.Email)
                {
                    Customerid = item.CustomerID;
                }
            }
            List<CustomerDetails> customers = new List<CustomerDetails>();
            foreach (var item in emp)
            {
                if(Customerid == item.CustomerID)
                {
                    string CustomerName = item.CustomerName;
                    string Email = item.Email;
                    string MobileNumber = item.ContactNumber;
                    DateTime? DateOfBirth = item.DateOfBirth;
                    customers.Add(new CustomerDetails(CustomerName, Email, MobileNumber, DateOfBirth));
                }
            }
            if (Customerid > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, customers);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "no data found");
            }
        }
        [Route("PolicyDetails")]
        public HttpResponseMessage Get()
        {
            var emp = db.Vehicles.ToList();
            var emp1 = db.Policies.ToList();
            var emp2 = db.Customers.ToList();

            foreach (var item in emp2)
            {
                if ("hdivya09@gmail.com" == item.Email)
                {
                    Customerid = item.CustomerID;
                }
            }
            List<ClaimInsurance> a = new List<ClaimInsurance>();
            foreach (var item in emp)
            {
                foreach (var item1 in emp1)
                {
                    if (item.CustomerID == item1.CustomerID && item.VehicleID == item1.VehicleID && item.CustomerID == Customerid)
                    {

                        if (item1.PolicyStatus == "Approved")
                        {
                           int policyid = item1.PolicyID;
                            string model = item.Model;
                            string policyname = item1.PolicyName;
                            double policyamount = item1.PolicyAmount;
                            int period = item1.Period;
                            DateTime? expirydate = item1.ExpiryDate; 
                            a.Add(new ClaimInsurance(policyid, policyname, policyamount, period, expirydate, model));
                        }

                    }
                }

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

            /*[Route("GetCustomer")]
            public IEnumerable<Customer> GetEmployees()
            {
                return db.Customers.ToList();
            }

            Policy policy = new Policy();
            //int CustomerID = 6;
            int CustomerID;
            [Route("GetPolicies")]
            public List<int> getPolicies()
            {
                return db.Policies.Where(s => s.CustomerID == CustomerID && s.PolicyStatus == "Approved").Select(s => s.PolicyID).ToList();
            }

            Customer customer = new Customer();
            string email = "hdivya09@gmail.com";
            public int Cust()
            {
                foreach (Customer c in db.Customers)
                {
                    if (c.Email == email)
                    {
                        CustomerID = c.CustomerID;
                    }
                }
                return CustomerID;
            }*/
        }
}
