using System;
using NutrientAPI.Queries.Common;

namespace NutrientAPI.Interfaces
{
	public interface IQuery<TParameters, TResult>
	{
		DataSource QueryDataSource { get; set; }
		TResult Execute(TParameters parameters);
	}
}
