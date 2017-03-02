using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("FD_GROUP")]
    public partial class FdGroup
    {
        public FdGroup()
        {
            FoodDes = new HashSet<FoodDes>();
        }

        [Column("FdGrp_Cd", TypeName = "varchar(4)")]
        public string FdGrpCd { get; set; }
        [Required]
        [Column("FdGrp_Desc", TypeName = "varchar(60)")]
        public string FdGrpDesc { get; set; }

        [InverseProperty("FdGrpCdNavigation")]
        public virtual ICollection<FoodDes> FoodDes { get; set; }
    }
}
