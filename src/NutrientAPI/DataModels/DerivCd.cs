using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("DERIV_CD")]
    public partial class DerivCd
    {
        [Column("Deriv_Cd", TypeName = "varchar(4)")]
        public string DerivCd1 { get; set; }
        [Required]
        [Column("Deriv_Desc", TypeName = "varchar(120)")]
        public string DerivDesc { get; set; }
    }
}
