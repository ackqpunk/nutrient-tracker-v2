using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class Langdesc
    {
        public Langdesc()
        {
            Langual = new HashSet<Langual>();
        }

        public string FactorCode { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Langual> Langual { get; set; }
    }
}
