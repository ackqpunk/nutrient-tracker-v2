using System;
namespace NutrientAPI.Queries.Common
{
	public class PagingData
	{
		public int Total { get; set; }
		public int Page { get; set; }
		public int PageSize { get; set; }

		public PagingData(int? page = null, int? pageSize = null, int? totalRowCount = null)
		{
			Total = totalRowCount.HasValue ? totalRowCount.Value : 0;
			Page = page.HasValue ? page.Value : 0;
			PageSize = pageSize.HasValue ? pageSize.Value : 0;
		}
	}
}
