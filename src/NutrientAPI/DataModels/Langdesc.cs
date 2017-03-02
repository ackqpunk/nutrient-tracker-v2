using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("LANGDESC")]
    public partial class Langdesc
    {
        public Langdesc()
        {
            Langual = new HashSet<Langual>();
        }

        [Column("Factor_Code", TypeName = "varchar(5)")]
        public string FactorCode { get; set; }
        [Required]
        [Column(TypeName = "varchar(140)")]
        public string Description { get; set; }

        [InverseProperty("FactorCodeNavigation")]
        public virtual ICollection<Langual> Langual { get; set; }
    }
}
