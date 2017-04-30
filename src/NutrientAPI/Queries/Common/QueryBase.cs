using System;
using NutrientAPI.Interfaces;

namespace NutrientAPI.Queries.Common
{
	public abstract class QueryBase<TParam, TResult> : IQuery<TParam, TResult> where TParam : SearchBase
	{
		public DataSource QueryDataSource { get; set; }

		public QueryBase(DataSource dataSource)
		{
			this.QueryDataSource = dataSource;
		}

		public TResult Execute(TParam parameters)
		{
            return ExecuteQuery(parameters);
		}

		public abstract TResult ExecuteQuery(TParam parameters);
	}
}
