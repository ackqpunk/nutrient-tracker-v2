using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("DATSRCLN")]
    public partial class Datsrcln
    {
        [Column("NDB_No", TypeName = "varchar(5)")]
        public string NdbNo { get; set; }
        [Column("Nutr_No", TypeName = "varchar(3)")]
        public string NutrNo { get; set; }
        [Column("DataSrc_ID", TypeName = "varchar(6)")]
        public string DataSrcId { get; set; }

        [ForeignKey("DataSrcId")]
        [InverseProperty("Datsrcln")]
        public virtual DataSrc DataSrc { get; set; }
        [ForeignKey("NdbNo")]
        [InverseProperty("Datsrcln")]
        public virtual FoodDes NdbNoNavigation { get; set; }
        [ForeignKey("NutrNo")]
        [InverseProperty("Datsrcln")]
        public virtual NutrDef NutrNoNavigation { get; set; }
    }
}
