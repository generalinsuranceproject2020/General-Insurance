using Insurance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Http;

namespace Insurance.Controllers
{
    public class ContactController : ApiController
    {
        [HttpPost]
        public async Task<int> SendEmail(Contact c)
        {
            string from = "generalinsuranceproject2020@gmail.com";
            string to = "hdivya09@gmail.com";
            string subject = c.Subject;
            string name = c.CustomerName;
            string message = c.Message;
            string body = "Please resolve this " + message + " of " + name;

            SmtpClient smtp = new SmtpClient();

            MailMessage mm = new MailMessage();
            mm.From = new MailAddress(from);
            mm.To.Add(to);
            mm.Subject = subject;
            mm.Body = body;
            await Task.Run(() => smtp.SendAsync(mm, null));
            return 1;
        }
    }
}
