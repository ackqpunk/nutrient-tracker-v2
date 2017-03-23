using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NutrientAPI.Models
{
    public class Animal
    {

        public long AnimalID { get; set; }
        public string Name { get; set; }
        public string AnimalTypeName { get; set; }
        public long AnimalTypeID { get; set; }
        public string BreedName { get; set; }
        public long BreedID { get; set; }
        public string Gender { get; set; }
        public bool IsYouth { get; set; }
        public DateTime CreatedOn { get; set; }
        public string CreatedByPhysicianName { get; set; }
        public long CreatedByPhysicianID { get; set; }
        public DateTime LastModified { get; set; }
        public string LastModifiedPhysicianName { get; set; }
        public long LastModifiedPhysicianID { get; set; }
        public decimal Weight { get; set; }
        public string UnitOfMeasure { get; set; }

        public Animal()
        {
            Name = "";
            AnimalTypeName = "";
            BreedName = "";
            Gender = "";
            CreatedByPhysicianName = "";
            LastModifiedPhysicianName = "";
            UnitOfMeasure = "";
        }


    }
}
