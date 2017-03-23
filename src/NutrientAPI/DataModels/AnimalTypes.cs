using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class AnimalTypes
    {
        public AnimalTypes()
        {
            Animals = new HashSet<Animals>();
            Breeds = new HashSet<Breeds>();
        }

        public long AnimalTypeId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Animals> Animals { get; set; }
        public virtual ICollection<Breeds> Breeds { get; set; }
    }
}
