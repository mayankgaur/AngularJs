using AngularJs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJs.Controllers
{
    public class HomeController : Controller
    {
        EmployeeDBEntities db = new EmployeeDBEntities();
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllEmployees()
        {
            var list = db.Employees.ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

    
    }
}