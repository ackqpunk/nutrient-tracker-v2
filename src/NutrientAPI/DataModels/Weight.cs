using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class Weight
    {
        public string NdbNo { get; set; }
        public string Seq { get; set; }
        public decimal Amount { get; set; }
        public string MsreDesc { get; set; }
        public decimal GmWgt { get; set; }
        public short? NumDataPts { get; set; }
        public decimal? StdDev { get; set; }

        public virtual FoodDes NdbNoNavigation { get; set; }
    }
}
