using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NutrientApp.Controllers
{
    public class AnimalController : Controller
    {
        // GET: /<controller>/
        public IActionResult Choice()
        {
            return PartialView("_Choice");
        }

        public IActionResult Existing() {
            return PartialView("_ExistingList");
        }
    }
}
