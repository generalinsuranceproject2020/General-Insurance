using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Insurance.Models;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Text;

namespace Insurance.Controllers
{
    public class EmailController : ApiController
    {
        General_InsuranceEntities db = new General_InsuranceEntities();
        //[System.Web.Http.AcceptVerbs("GET", "POST")]
        //[System.Web.Http.HttpGet]
        public bool CheckEmail(string email)
        {
            var isValidEmail = db.Customers.Where(w => w.Email == email).FirstOrDefault();
            if (isValidEmail != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [Route("send-email")]
        [HttpGet]
        public async Task<int> SendEmail(string to)
        {
            if (CheckEmail(to) == true)
            {

                string from = "nand211098@gmail.com";
                string subject = "Welcome to Car Insurance";
                Random generator = new Random();
                int r = generator.Next(1000, 10000);
                string body = "Hello , Your otp is " + r;

                SmtpClient smtp = new SmtpClient();

                MailMessage mm = new MailMessage();
                mm.From = new MailAddress(from);
                mm.To.Add(to);
                mm.Subject = subject;
                mm.Body = body;
                await Task.Run(() => smtp.SendAsync(mm, null));
                return r;
            }
            else
            {
                return 0;
            }

        }
        [Route("update-password")]
        [HttpPut]
        public dynamic UpdatePassword(string email, string password)
        {
            //var query = from user in tblUser where user.email == email select user;
            //var query = db.Customers.Find(email);
            List<Customer> emp = db.Customers.ToList();
            string msg = "";
            string password1 = password;
            byte[] encode = new byte[password1.Length];
            encode = Encoding.UTF8.GetBytes(password1);
            msg = Convert.ToBase64String(encode);
            foreach (var item in emp)
            {
                if (item.Email == email)
                {
                    item.Password = msg;
                    item.ConfirmPassword = msg;
                    db.Entry(item).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Valid");
                }

            }
            return Request.CreateResponse(HttpStatusCode.NotFound, "NotFound");
        }

    }
}
