using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class Practices
    {
        public Practices()
        {
            Animals = new HashSet<Animals>();
            Physicians = new HashSet<Physicians>();
        }

        public long PracticeId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Animals> Animals { get; set; }
        public virtual ICollection<Physicians> Physicians { get; set; }
    }
}
