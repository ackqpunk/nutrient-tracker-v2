using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NutrientAPI.Queries.Common;

namespace NutrientAPI.Queries.SearchParameters
{
    public class AnimalSearchParameters : SearchBase
    {
        public string Name { get; set; }
        public long AnimalTypeID { get; set; }
        public long BreedID { get; set; }
        public string BreedName { get; set; }

        public AnimalSearchParameters()
        {
            Name = "";
            BreedName = "";
        }
    }
}
