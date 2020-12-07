using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Insurance.Models;

namespace Insurance.Controllers
{
    [RoutePrefix("API/Demo")]
    public class BuyInsuranceController : ApiController
    {
        [Route("AddFileDetails")]
        [HttpPost]
        public HttpResponseMessage setVehicleDetails()
        {
            try
            {
                //Customer c = new Customer();
                string imageName = null;
                string imageName1 = null;
                string imageName2 = null;
                var httpRequest = HttpContext.Current.Request;

                //Upload Image
                var postedFile = httpRequest.Files["Image0"];
                var postedFile1 = httpRequest.Files["Image1"];
                var postedFile2 = httpRequest.Files["Image2"];
                //Create custom filename
                if (postedFile != null)
                {
                    imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
                    imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
                    var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName);
                    postedFile.SaveAs(filePath);
                }
                if (postedFile1 != null)
                {
                    imageName1 = new String(Path.GetFileNameWithoutExtension(postedFile1.FileName).Take(10).ToArray()).Replace(" ", "-");
                    imageName1 = imageName1 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
                    var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName1);
                    postedFile1.SaveAs(filePath);
                }
                if (postedFile2 != null)
                {
                    imageName2 = new String(Path.GetFileNameWithoutExtension(postedFile2.FileName).Take(10).ToArray()).Replace(" ", "-");
                    imageName2 = imageName2 + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile2.FileName);
                    var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageName2);
                    postedFile2.SaveAs(filePath);
                }

                DateTime d, date;
                //Save to DB
                using (General_InsuranceEntities db = new General_InsuranceEntities())
                {
                    Vehicle vc = new Vehicle()
                    {
                        VehicleType = httpRequest["vehicle"],
                        Manufacturer = httpRequest["manufacturer"],
                        Model = httpRequest["model"],
                        DrivingLicense = httpRequest["driving"],
                        RegisterationNumber = httpRequest["rno"],
                        EngineNumber = httpRequest["eno"],
                        ChassisNumber = httpRequest["cno"],
                        VehicleDocumentURL = imageName1,
                        AadharURL = imageName,
                        DrivingLicenseURL = imageName2
                    };
                    string s = httpRequest["pdate"];
                    if (DateTime.TryParseExact(s, "yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out d))
                    {
                        vc.PurchaseDate = d.Add(DateTime.Now.TimeOfDay);
                    }
                    string email = httpRequest["Email"];
                    Customer customer = new Customer();
                    int CustomerID = 0;
                    foreach(Customer c in db.Customers)
                    {
                        if(c.Email == email)
                        {
                            CustomerID = c.CustomerID;
                            break;
                        }
                    }
                    if(CustomerID > 0)
                    {
                        vc.CustomerID = CustomerID;
                    }
                    db.Vehicles.Add(vc);
                    db.SaveChanges();
                }
            }
            catch(Exception)
            {
                throw;
            }
            return Request.CreateResponse(HttpStatusCode.OK);
            /*string imageAadhar = null;
            string imageDriving = null;
            string imageVehicle = null;

            var httpRequest = HttpContext.Current.Request;
            //Upload Image
            vc.Manufacturer = httpRequest.Form["manufacturer"];
            vc.Model = httpRequest.Form["model"];
            string s = httpRequest.Form["pdate"];
            DateTime d;
            if (DateTime.TryParseExact(s, "dd-MM-yyyy", System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out d))
            {
                vc.PurchaseDate = d;
            }
            /*DateTime dt = DateTime.ParseExact(s, "dd/MM/yyyy", CultureInfo.InvariantCulture).Add(DateTime.Now.TimeOfDay);
            vc.PurchaseDate = dt;
            vc.DrivingLicense = httpRequest.Form["driving"];
            vc.RegisterationNumber = httpRequest.Form["rno"];
            vc.EngineNumber = httpRequest.Form["eno"];
            vc.ChassisNumber = httpRequest.Form["cno"];
            var postedFile1 = httpRequest.Files["image1"];
            var postedFile2 = httpRequest.Files["image2"];
            var postedFile3 = httpRequest.Files["image3"];
            if (postedFile1 != null)
            {
                imageAadhar = new String(Path.GetFileNameWithoutExtension(postedFile1.FileName).Take(10).ToArray()).Replace(" ", "-");
                imageAadhar = imageAadhar + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile1.FileName);
                var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageAadhar);
                postedFile1.SaveAs(filePath);
            }

            if (postedFile2 != null)
            {
                imageDriving = new String(Path.GetFileNameWithoutExtension(postedFile2.FileName).Take(10).ToArray()).Replace(" ", "-");
                imageDriving = imageDriving + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile2.FileName);
                var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageDriving);
                postedFile2.SaveAs(filePath);
            }

            if (postedFile3 != null)
            {
                imageVehicle = new String(Path.GetFileNameWithoutExtension(postedFile3.FileName).Take(10).ToArray()).Replace(" ", "-");
                imageVehicle = imageVehicle + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile3.FileName);
                var filePath = HttpContext.Current.Server.MapPath("~/Image/" + imageVehicle);
                postedFile3.SaveAs(filePath);
            }
            vc.AadharURL = imageAadhar;
            vc.DrivingLicenseURL = imageDriving;
            vc.VehicleDocumentURL = imageVehicle;
            int i = db.SaveChanges();
            if (i > 0)
            {
                result = "File uploaded sucessfully";
            }
            else
            {
                result = "File uploaded faild";
            }
        }
        catch (Exception e)
        {
            throw;
        }
        return Ok(result);*/
        }
    }
}
