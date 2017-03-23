using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class Animals
    {
        public long AnimalId { get; set; }
        public string Name { get; set; }
        public long AnimalTypeId { get; set; }
        public long BreedId { get; set; }
        public string Notes { get; set; }
        public string Gender { get; set; }
        public long IsYouth { get; set; }
        public DateTime CreatedOn { get; set; }
        public long CreatedByPhysicianId { get; set; }
        public DateTime LastModified { get; set; }
        public long LastModifiedPhysicianId { get; set; }
        public long PracticeId { get; set; }
        public decimal Weight { get; set; }
        public string UnitOfMeasure { get; set; }

        public virtual AnimalTypes AnimalType { get; set; }
        public virtual Breeds Breed { get; set; }
        public virtual Physicians CreatedByPhysician { get; set; }
        public virtual Physicians LastModifiedPhysician { get; set; }
        public virtual Practices Practice { get; set; }
    }
}
