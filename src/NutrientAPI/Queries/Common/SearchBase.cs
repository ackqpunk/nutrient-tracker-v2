using System;
namespace NutrientAPI.Queries.Common
{
	public class SearchBase
	{
		public string Search { get; set; }
		public int Take { get; set; }
		public int Skip { get; set; }
		public string Sort { get; set; }
		public bool SortAscending { get; set; }
		public int Page { get; set; }
		public int PageSize { get; set; }
		public bool IncludeTotalPagedRows { get; set; }

		public SearchBase()
		{
			Search = "";
			IncludeTotalPagedRows = false;
		}
	}
}
