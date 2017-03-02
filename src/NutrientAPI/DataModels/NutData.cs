using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("NUT_DATA")]
    public partial class NutData
    {
        [Column("NDB_No", TypeName = "varchar(5)")]
        public string NdbNo { get; set; }
        [Column("Nutr_No", TypeName = "varchar(3)")]
        public string NutrNo { get; set; }
        [Column("Nutr_Val", TypeName = "decimal")]
        public decimal NutrVal { get; set; }
        [Column("Num_Data_Pts")]
        public int NumDataPts { get; set; }
        [Column("Std_Error", TypeName = "decimal")]
        public decimal? StdError { get; set; }
        [Required]
        [Column("Src_Cd", TypeName = "varchar(2)")]
        public string SrcCd { get; set; }
        [Column("Deriv_Cd", TypeName = "varchar(4)")]
        public string DerivCd { get; set; }
        [Column("Ref_NDB_No", TypeName = "varchar(5)")]
        public string RefNdbNo { get; set; }
        [Column("Add_Nutr_Mark", TypeName = "varchar(1)")]
        public string AddNutrMark { get; set; }
        [Column("Num_Studies")]
        public int? NumStudies { get; set; }
        [Column(TypeName = "decimal")]
        public decimal? Min { get; set; }
        [Column(TypeName = "decimal")]
        public decimal? Max { get; set; }
        [Column("DF")]
        public short? Df { get; set; }
        [Column("Low_EB", TypeName = "decimal")]
        public decimal? LowEb { get; set; }
        [Column("Up_EB", TypeName = "decimal")]
        public decimal? UpEb { get; set; }
        [Column("Stat_cmt", TypeName = "varchar(10)")]
        public string StatCmt { get; set; }
        [Column("AddMod_Date", TypeName = "date")]
        public DateTime? AddModDate { get; set; }
        [Column("CC", TypeName = "varchar(1)")]
        public string Cc { get; set; }

        [ForeignKey("NdbNo")]
        [InverseProperty("NutDataNdbNoNavigation")]
        public virtual FoodDes NdbNoNavigation { get; set; }
        [ForeignKey("NutrNo")]
        [InverseProperty("NutData")]
        public virtual NutrDef NutrNoNavigation { get; set; }
        [ForeignKey("RefNdbNo")]
        [InverseProperty("NutDataRefNdbNoNavigation")]
        public virtual FoodDes RefNdbNoNavigation { get; set; }
        [ForeignKey("SrcCd")]
        [InverseProperty("NutData")]
        public virtual SrcCd SrcCdNavigation { get; set; }
    }
}
