using System;
using System.Linq;
using NutrientAPI.Queries.Common;
using NutrientAPI.Queries.SearchParameters;
using NutrientAPI.Queries.DataTransfer;

namespace NutrientAPI.Queries 
{
    public class AnimalListQuery : PagedResultsQuery<AnimalSearchParameters, AnimalPagedResults>
    {
		public AnimalListQuery(DataSource queryDataSource) : base(queryDataSource) { }

		public override string DefaultSortField
		{
			get { return "CreatedOn"; }
		}

        public override IQueryable<AnimalPagedResults> ExecuteQuery(AnimalSearchParameters param)
        {
            var db = this.QueryDataSource.DevContext;
            var query = db.Animals;
            return query.Select(x => new AnimalPagedResults(){
                AnimalID = x.AnimalId
            });
        }
    }
}
