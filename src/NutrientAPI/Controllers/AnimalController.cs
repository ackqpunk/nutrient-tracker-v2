using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NutrientAPI.DataModels;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NutrientAPI.Controllers
{
    [Route("api/[controller]")]
    public class AnimalController : Controller
    {
        private NutrientsContext db;
        
        public AnimalController(NutrientsContext db)
        {
            this.db = db;
        }

        [Route("breeds")]
        public IActionResult GetBreeds(string search)
        {
            return Ok();
        }
    }
}
