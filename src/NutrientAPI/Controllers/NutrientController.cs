using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using nutrient_api.DataModels;
using nutrient_api.Models;

namespace nutrient_api.Controllers
{
    [Route("api/[controller]")]
    public class NutrientController : Controller
    {
        private NutrientsContext db;

        public NutrientController(NutrientsContext db) {
            this.db = db;
        }
        public IActionResult GetNutrients(){

            var data = db.NutrDef.Take(100);
            var test = new  {TEST = "true"};
            return new ObjectResult(data);
        }
    }
}