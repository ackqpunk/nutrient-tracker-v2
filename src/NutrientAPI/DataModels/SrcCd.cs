using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class SrcCd
    {
        public SrcCd()
        {
            NutData = new HashSet<NutData>();
        }

        public string SrcCd1 { get; set; }
        public string SrcCdDesc { get; set; }

        public virtual ICollection<NutData> NutData { get; set; }
    }
}
