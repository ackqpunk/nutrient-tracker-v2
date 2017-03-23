using NutrientAPI.DataModels;
using NutrientAPI.Queries.SearchParameters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NutrientAPI.Queries.Filters
{
    public static class AnimalFilter
    {
        public static IQueryable<Animals> Filter(this IQueryable<Animals> query, AnimalSearchParameters param)
        {
            if (param.AnimalTypeID != 0)
                query = query.Where(x => x.AnimalTypeId == param.AnimalTypeID);

            if (param.BreedID != 0)
                query = query.Where(x => x.BreedId == param.BreedID);

            if (!string.IsNullOrEmpty(param.BreedName))
                query = query.Where(x => x.Breed.Name.Contains(param.BreedName));

            if (!string.IsNullOrEmpty(param.Name))
                query = query.Where(x => x.Name.Contains(param.Name));

            return query;
        }
    }
}
