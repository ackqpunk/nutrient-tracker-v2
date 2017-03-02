using System.Collections.Generic;
using nutrient_api.DataModels;
using nutrient_api.Models;
using nutrient_api.Queries.Filters;
using nutrient_api.Queries.SearchParameters;
using nutrient_api.Interfaces;
using System.Linq;
using System;

namespace nutrient_api.Repositories {
    public class FoodGroupRepository : IRepostory<FoodGroup, FoodGroupSearchParameters> {
        private NutrientsContext db;
        public FoodGroupRepository (NutrientsContext db)
        {
          this.db = db;
        }

        public void Delete(FoodGroupSearchParameters param)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<FoodGroup> Get(FoodGroupSearchParameters param){
            var expr = nutrient_api.Queries.Conversions.FoodGroup.FoodDesToFoodExpr(param);
            return db.FdGroup.Filter(param).Select(expr).ToList();
        }

        public void Insert(FoodGroupSearchParameters param)
        {
            throw new NotImplementedException();
        }

        public void Update(FoodGroupSearchParameters param)
        {
            throw new NotImplementedException();
        }
    }
}