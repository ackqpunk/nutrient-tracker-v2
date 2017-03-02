using System.Linq;
using nutrient_api.DataModels;
using nutrient_api.Models;
using nutrient_api.Queries.SearchParameters;

namespace nutrient_api.Queries.Filters {
    public static class FoodFilter {
        public static IQueryable<FoodDes> Filter(this IQueryable<FoodDes> query, FoodSearchParameters param){
            if(param.FoodCategoryID != 0)
                query = query.Where(x => x.FdGrpCd == param.FoodCategoryID.ToString());

            return query;
        }
    }
}