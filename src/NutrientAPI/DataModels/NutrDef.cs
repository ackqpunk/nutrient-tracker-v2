using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class NutrDef
    {
        public NutrDef()
        {
            Datsrcln = new HashSet<Datsrcln>();
            NutData = new HashSet<NutData>();
        }

        public string NutrNo { get; set; }
        public string Units { get; set; }
        public string Tagname { get; set; }
        public string NutrDesc { get; set; }
        public string NumDec { get; set; }
        public int SrOrder { get; set; }

        public virtual ICollection<Datsrcln> Datsrcln { get; set; }
        public virtual ICollection<NutData> NutData { get; set; }
    }
}
