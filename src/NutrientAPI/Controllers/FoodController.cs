using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using nutrient_api.DataModels;
using nutrient_api.Models;
using nutrient_api.Repositories;

namespace nutrient_api.Controllers
{
    [Route("api/[controller]")]
    public class FoodController : Controller
    {
        private NutrientsContext db;
        private FoodRepository repo;

        public FoodController(NutrientsContext db) {
            this.db = db;
            this.repo = new FoodRepository(db);
        }
    }
}