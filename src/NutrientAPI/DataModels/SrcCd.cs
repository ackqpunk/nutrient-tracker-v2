using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("SRC_CD")]
    public partial class SrcCd
    {
        public SrcCd()
        {
            NutData = new HashSet<NutData>();
        }

        [Column("Src_Cd", TypeName = "varchar(2)")]
        public string SrcCd1 { get; set; }
        [Required]
        [Column("SrcCd_Desc", TypeName = "varchar(60)")]
        public string SrcCdDesc { get; set; }

        [InverseProperty("SrcCdNavigation")]
        public virtual ICollection<NutData> NutData { get; set; }
    }
}
