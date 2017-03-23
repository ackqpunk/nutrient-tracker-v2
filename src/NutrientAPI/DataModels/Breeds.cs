using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class Breeds
    {
        public Breeds()
        {
            Animals = new HashSet<Animals>();
        }

        public long BreedId { get; set; }
        public long AnimalTypeId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Animals> Animals { get; set; }
        public virtual AnimalTypes AnimalType { get; set; }
    }
}
