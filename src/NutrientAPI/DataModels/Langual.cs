using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class Langual
    {
        public string NdbNo { get; set; }
        public string FactorCode { get; set; }

        public virtual Langdesc FactorCodeNavigation { get; set; }
        public virtual FoodDes NdbNoNavigation { get; set; }
    }
}
