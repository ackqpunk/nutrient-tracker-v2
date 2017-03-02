using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("FOOD_DES")]
    public partial class FoodDes
    {
        public FoodDes()
        {
            Datsrcln = new HashSet<Datsrcln>();
            Langual = new HashSet<Langual>();
            NutDataNdbNoNavigation = new HashSet<NutData>();
            NutDataRefNdbNoNavigation = new HashSet<NutData>();
            Weight = new HashSet<Weight>();
        }

        [Column("NDB_No", TypeName = "varchar(5)")]
        public string NdbNo { get; set; }
        [Required]
        [Column("FdGrp_Cd", TypeName = "varchar(4)")]
        public string FdGrpCd { get; set; }
        [Required]
        [Column("Long_Desc", TypeName = "varchar(200)")]
        public string LongDesc { get; set; }
        [Required]
        [Column("Shrt_Desc", TypeName = "varchar(60)")]
        public string ShrtDesc { get; set; }
        [Column(TypeName = "varchar(100)")]
        public string ComName { get; set; }
        [Column(TypeName = "varchar(65)")]
        public string ManufacName { get; set; }
        [Column(TypeName = "varchar(1)")]
        public string Survey { get; set; }
        [Column("Ref_desc", TypeName = "varchar(135)")]
        public string RefDesc { get; set; }
        public int? Refuse { get; set; }
        [Column(TypeName = "varchar(65)")]
        public string SciName { get; set; }
        [Column("N_Factor", TypeName = "decimal")]
        public decimal? NFactor { get; set; }
        [Column("Pro_Factor", TypeName = "decimal")]
        public decimal? ProFactor { get; set; }
        [Column("Fat_Factor", TypeName = "decimal")]
        public decimal? FatFactor { get; set; }
        [Column("CHO_Factor", TypeName = "decimal")]
        public decimal? ChoFactor { get; set; }

        [InverseProperty("NdbNoNavigation")]
        public virtual ICollection<Datsrcln> Datsrcln { get; set; }
        [InverseProperty("NdbNoNavigation")]
        public virtual ICollection<Langual> Langual { get; set; }
        [InverseProperty("NdbNoNavigation")]
        public virtual ICollection<NutData> NutDataNdbNoNavigation { get; set; }
        [InverseProperty("RefNdbNoNavigation")]
        public virtual ICollection<NutData> NutDataRefNdbNoNavigation { get; set; }
        [InverseProperty("NdbNoNavigation")]
        public virtual ICollection<Weight> Weight { get; set; }
        [ForeignKey("FdGrpCd")]
        [InverseProperty("FoodDes")]
        public virtual FdGroup FdGrpCdNavigation { get; set; }
    }
}
