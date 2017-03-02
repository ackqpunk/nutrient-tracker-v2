using System.Linq;
using nutrient_api.DataModels;
using nutrient_api.Models;
using nutrient_api.Queries.SearchParameters;

namespace nutrient_api.Queries.Filters {
    public static class FoodGroupFilter {
        public static IQueryable<FdGroup> Filter(this IQueryable<FdGroup> query, FoodGroupSearchParameters param){
            if(param.FoodGroupID != "")
                query = query.Where(x => x.FdGrpCd == param.FoodGroupID);

            return query;
        }
    }
}