using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class Datsrcln
    {
        public string NdbNo { get; set; }
        public string NutrNo { get; set; }
        public string DataSrcId { get; set; }

        public virtual DataSrc DataSrc { get; set; }
        public virtual FoodDes NdbNoNavigation { get; set; }
        public virtual NutrDef NutrNoNavigation { get; set; }
    }
}
