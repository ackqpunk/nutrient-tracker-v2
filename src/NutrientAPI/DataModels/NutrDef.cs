using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("NUTR_DEF")]
    public partial class NutrDef
    {
        public NutrDef()
        {
            Datsrcln = new HashSet<Datsrcln>();
            NutData = new HashSet<NutData>();
        }

        [Column("Nutr_No", TypeName = "varchar(3)")]
        public string NutrNo { get; set; }
        [Required]
        [Column(TypeName = "varchar(7)")]
        public string Units { get; set; }
        [Column(TypeName = "varchar(20)")]
        public string Tagname { get; set; }
        [Required]
        [Column(TypeName = "varchar(60)")]
        public string NutrDesc { get; set; }
        [Required]
        [Column("Num_Dec", TypeName = "varchar(1)")]
        public string NumDec { get; set; }
        [Column("SR_Order")]
        public int SrOrder { get; set; }

        [InverseProperty("NutrNoNavigation")]
        public virtual ICollection<Datsrcln> Datsrcln { get; set; }
        [InverseProperty("NutrNoNavigation")]
        public virtual ICollection<NutData> NutData { get; set; }
    }
}
