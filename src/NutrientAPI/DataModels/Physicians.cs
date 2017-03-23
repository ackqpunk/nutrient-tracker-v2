using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class Physicians
    {
        public Physicians()
        {
            AnimalsCreatedByPhysician = new HashSet<Animals>();
            AnimalsLastModifiedPhysician = new HashSet<Animals>();
        }

        public long PhysicianId { get; set; }
        public long PracticeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Animals> AnimalsCreatedByPhysician { get; set; }
        public virtual ICollection<Animals> AnimalsLastModifiedPhysician { get; set; }
        public virtual Practices Practice { get; set; }
    }
}
