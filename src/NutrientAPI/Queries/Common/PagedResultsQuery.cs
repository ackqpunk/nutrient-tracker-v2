using System;
using System.Linq;
using System.Linq.Dynamic.Core;

namespace NutrientAPI.Queries.Common
{
	public abstract class PagedResultsQuery<TParam, TResult> : QueryBase<TParam, IQueryable<TResult>> where TParam : SearchBase
{
    public PagedResultsQuery(DataSource dataSource) : base(dataSource) { }

    public abstract string DefaultSortField { get; }

    public new ResultsList<TResult> Execute(TParam parameters)
    {
        IQueryable<TResult> results = null;
        results = ExecuteQuery(parameters);


        int totalRowCount = parameters.IncludeTotalPagedRows ? results.Count() : 0;
        var pagingData = parameters.IncludeTotalPagedRows ? new PagingData(parameters.Page, parameters.PageSize, totalRowCount) : null;

        if (parameters.IncludeTotalPagedRows)
        {

            var sortString = String.IsNullOrEmpty(parameters.Sort) ? DefaultSortField : parameters.Sort;

            //results = results.OrderBy(sortString + (parameters.SortAscending ? "" : " descending"));

            if (parameters.SortAscending)
            {
                results = results.OrderBy(sortString);
            }
            else
            {
                if (sortString.Contains("descending"))
                {
                    results = results.OrderBy(sortString);
                }
                else
                {
                    results = results.OrderBy(sortString + " descending");
                }
            }

            if (parameters.Skip != 0)
                results = results.Skip(parameters.Skip);

            if (parameters.Take != 0)
                results = results.Take(parameters.Take);
        }

        return new ResultsList<TResult>(results, pagingData);
    }
}
}
