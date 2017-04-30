using System;
using NutrientAPI.DataModels;
namespace NutrientAPI.Queries.Common
{
	public class DataSource
	{
		public NutrientsContext DevContext { get; set; }

		public DataSource(NutrientsContext devContext)
		{
            this.DevContext = devContext;
		}

	}
}
