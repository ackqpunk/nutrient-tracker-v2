using System;
using System.Linq.Expressions;
using nutrient_api.Models;
using nutrient_api.Queries.SearchParameters;
using DM = NutrientAPI.DataModels;
using Model = nutrient_api.Models;

namespace nutrient_api.Queries.Conversions {

	public static class FoodGroup {
    	public static Expression<Func<DM.FdGroup, Models.FoodGroup>> FoodDesToFoodExpr(FoodGroupSearchParameters param)
		{

			var expr = LinqKit.Linq.Expr((DM.FdGroup item) => new Models.FoodGroup()
			{
				FoodGroupID = item.FdGrpCd,
				Name = item.FdGrpDesc
			});

			return expr;
		}
	}
}