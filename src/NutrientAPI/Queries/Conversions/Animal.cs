using NutrientAPI.Queries.SearchParameters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using DM = NutrientAPI.DataModels;

namespace NutrientAPI.Queries.Conversions
{
    public class Animal
    {
        public static Expression<Func<DM.Animals, Models.Animal>> FoodDesToFoodExpr(AnimalSearchParameters param)
        {

            var expr = LinqKit.Linq.Expr((DM.Animals item) => new Models.Animal()
            {
                AnimalID = item.AnimalId,
                AnimalTypeID = item.AnimalTypeId,
                AnimalTypeName = item.AnimalType.Name,
                BreedID = item.BreedId,
                BreedName = item.Breed.Name,
                CreatedByPhysicianID = item.CreatedByPhysicianId,
                CreatedByPhysicianName = item.CreatedByPhysician.FirstName + " " + item.CreatedByPhysician.LastName,
                CreatedOn = item.CreatedOn,
                Gender = item.Gender,
                IsYouth = item.IsYouth == 0,
                LastModified = item.LastModified,
                LastModifiedPhysicianID = item.LastModifiedPhysicianId,
                LastModifiedPhysicianName = item.LastModifiedPhysician.FirstName + " " + item.LastModifiedPhysician.LastName,
                Name = item.Name,
                UnitOfMeasure = item.UnitOfMeasure,
                Weight = item.Weight
            });

            return expr;
        }
    }
}
