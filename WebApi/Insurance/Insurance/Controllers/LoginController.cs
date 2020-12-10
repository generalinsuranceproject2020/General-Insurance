using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Insurance.Models;

namespace Insurance.Controllers
{
    public class LoginController : ApiController
    {
        public static string CustEmail="";
        [HttpPost]
        public object createcontact(Registration Lvm)
        {
            try
            {
                General_InsuranceEntities DB = new General_InsuranceEntities();
                Customer Em = new Customer();
                if (Em.CustomerID == 0)
                {
                    string msg = "";
                    string password = Lvm.Password;
                    byte[] encode = new byte[password.Length];
                    encode = Encoding.UTF8.GetBytes(password);
                    msg = Convert.ToBase64String(encode);
                    Em.CustomerName = Lvm.CustomerName;
                    Em.Email = Lvm.Email;
                    Em.Password = msg;
                    Em.DateOfBirth = Lvm.DateOfBirth;
                    Em.ContactNumber = Lvm.ContactNumber;
                    Em.Address = Lvm.Address;
                    Em.City = Lvm.City;
                    Em.State = Lvm.State;
                    Em.Pincode = Lvm.Pincode;
                    Em.ConfirmPassword = msg;
                    Em.Country = Lvm.Country;
                    DB.Customers.Add(Em);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }
        [Route("Api/Login/UserLogin")]
        [HttpPost]
        public Response Login(Login Lg)
        {
            General_InsuranceEntities DB = new General_InsuranceEntities();
            // Obj = DB.Usp_Login(Lg.UserName, Lg.Password).ToList<Usp_Login_Result>().FirstOrDefault();
            /*int result = DB.CheckUser(Lg.UserName, Lg.Password);
            /*if (Obj.Status == 0)
                return new Response { Status = "Invalid", Message = "Invalid User." };
            if (Obj.Status == -1)
                return new Response { Status = "Inactive", Message = "User Inactive." };
            else
                return new Response { Status = "Success", Message = Lg.UserName };*/
            /*if (result==0)
            {
                return new Response { Status = "Success", Message = Lg.UserName };
            }
            else
            {
                return new Response { Status = "Invalid", Message = "Invalid User." };
            }*/
            try
            {
                List<Customer> emp = DB.Customers.ToList();
                string msg = "";
                string password = Lg.Password;
                byte[] encode = new byte[password.Length];
                encode = Encoding.UTF8.GetBytes(password);
                msg = Convert.ToBase64String(encode);
                foreach (var item in emp)
                {
                    if (item.Email == Lg.Email && item.Password == msg)
                    {
                        //session["user"] = item.Email;
                        CustEmail = Lg.Email;
                        return new Response { Status = "Success", Message = Lg.Email };

                    }

                }
            }
            catch(Exception)
            {
                return new Response { Status = "Invalid", Message = "Invalid User." };
            }
            return new Response { Status = "Invalid", Message = "Invalid User." };

        }
        public HttpResponseMessage Get()
        {
            General_InsuranceEntities DB = new General_InsuranceEntities();
            var emp = DB.Customers.ToList();
            if (emp.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, emp);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "no data found");
            }
        }
    }
}
