using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NutrientAPI.DataModels;
using NutrientAPI.Queries.Common;
using NutrientAPI.Queries;

using NutrientAPI.Queries.SearchParameters;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace NutrientAPI.Controllers
{
    [Route("api/[controller]")]
    public class AnimalController : Controller
    {
        private NutrientsContext db;
        private DataSource queryDataSource;
        
        public AnimalController()
        {
            this.db = new NutrientsContext();
            this.queryDataSource = new DataSource(db);
        }

        [Route("list")]
        public IActionResult GetList(AnimalSearchParameters param)
        {
            var query = new AnimalListQuery(queryDataSource).ExecuteQuery(param);
            return Ok(query);
        }

        [Route("breeds")]
        public IActionResult GetBreeds(string search)
        {
            return Ok();
        }
    }
}
