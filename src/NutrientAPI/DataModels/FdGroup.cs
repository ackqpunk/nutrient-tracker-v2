using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class FdGroup
    {
        public FdGroup()
        {
            FoodDes = new HashSet<FoodDes>();
        }

        public string FdGrpCd { get; set; }
        public string FdGrpDesc { get; set; }

        public virtual ICollection<FoodDes> FoodDes { get; set; }
    }
}
