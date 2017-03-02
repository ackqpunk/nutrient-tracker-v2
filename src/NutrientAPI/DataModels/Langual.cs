using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("LANGUAL")]
    public partial class Langual
    {
        [Column("NDB_No", TypeName = "varchar(5)")]
        public string NdbNo { get; set; }
        [Column("Factor_Code", TypeName = "varchar(5)")]
        public string FactorCode { get; set; }

        [ForeignKey("FactorCode")]
        [InverseProperty("Langual")]
        public virtual Langdesc FactorCodeNavigation { get; set; }
        [ForeignKey("NdbNo")]
        [InverseProperty("Langual")]
        public virtual FoodDes NdbNoNavigation { get; set; }
    }
}
