using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("WEIGHT")]
    public partial class Weight
    {
        [Column("NDB_No", TypeName = "varchar(5)")]
        public string NdbNo { get; set; }
        [Column(TypeName = "varchar(2)")]
        public string Seq { get; set; }
        [Column(TypeName = "decimal")]
        public decimal Amount { get; set; }
        [Required]
        [Column("Msre_Desc", TypeName = "varchar(84)")]
        public string MsreDesc { get; set; }
        [Column("Gm_Wgt", TypeName = "decimal")]
        public decimal GmWgt { get; set; }
        [Column("Num_Data_Pts")]
        public short? NumDataPts { get; set; }
        [Column("Std_Dev", TypeName = "decimal")]
        public decimal? StdDev { get; set; }

        [ForeignKey("NdbNo")]
        [InverseProperty("Weight")]
        public virtual FoodDes NdbNoNavigation { get; set; }
    }
}
