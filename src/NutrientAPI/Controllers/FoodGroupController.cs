using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NutrientAPI.DataModels;
using nutrient_api.Models;
using nutrient_api.Repositories;
using nutrient_api.Queries.SearchParameters;

namespace nutrient_api.Controllers
{
    [Route("api/[controller]")]
    public class FoodGroupController : Controller
    {
        private NutrientsContext db;
        private FoodGroupRepository repo;

        public FoodGroupController(NutrientsContext db) {
            this.db = db;
            this.repo = new FoodGroupRepository(db);
        }
        [Route("Get")]
        public async Task<ActionResult> Get(FoodGroupSearchParameters param) {
            var results = repo.Get(param);
            return Ok(results);
        }
    }
}