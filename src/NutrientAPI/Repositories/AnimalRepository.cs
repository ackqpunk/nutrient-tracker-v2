using NutrientAPI.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NutrientAPI.Repositories
{
    public class AnimalRepository
    {
        private NutrientsContext db;
        public AnimalRepository(NutrientsContext db)
        {
            this.db = db;
        }

        public Animals Insert(Models.Animal item) { 
            return new Animals();
        }
    }
}
