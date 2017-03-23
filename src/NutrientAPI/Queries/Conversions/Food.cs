using System;
using System.Linq.Expressions;
using nutrient_api.Models;
using nutrient_api.Queries.SearchParameters;
using DM = NutrientAPI.DataModels;
using Model = nutrient_api.Models;

namespace nutrient_api.Queries.Conversions {

	public static class Food {
    	public static Expression<Func<DM.FoodDes, Models.Food>> FoodDesToFoodExpr(FoodSearchParameters param)
		{

			var expr = LinqKit.Linq.Expr((DM.FoodDes item) => new Models.Food()
			{
				FoodID = item.NdbNo,
				Name = item.LongDesc
			});

			return expr;
		}
	}
}