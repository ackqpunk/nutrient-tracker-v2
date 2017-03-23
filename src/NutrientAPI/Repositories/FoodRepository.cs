using System.Collections.Generic;
using System.Linq;
using NutrientAPI.DataModels;
using nutrient_api.Models;
using nutrient_api.Queries.Filters;
using nutrient_api.Queries.SearchParameters;

namespace nutrient_api.Repositories {
    
    public class FoodRepository{

        private NutrientsContext db;

        public FoodRepository (NutrientsContext db)
        {
            this.db = db;
        }

        public IEnumerable<Food> Get(FoodSearchParameters param){
            var expr = nutrient_api.Queries.Conversions.Food.FoodDesToFoodExpr(param);
            return db.FoodDes.Filter(param).Select(expr);
        }
    }
}