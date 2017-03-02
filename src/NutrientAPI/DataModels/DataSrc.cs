using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nutrient_api.DataModels
{
    [Table("DATA_SRC")]
    public partial class DataSrc
    {
        public DataSrc()
        {
            Datsrcln = new HashSet<Datsrcln>();
        }

        [Column("DataSrc_ID", TypeName = "varchar(6)")]
        public string DataSrcId { get; set; }
        [Column(TypeName = "varchar(255)")]
        public string Authors { get; set; }
        [Required]
        [Column(TypeName = "varchar(255)")]
        public string Title { get; set; }
        [Column(TypeName = "varchar(4)")]
        public string Year { get; set; }
        [Column(TypeName = "varchar(135)")]
        public string Journal { get; set; }
        [Column("Vol_City", TypeName = "varchar(16)")]
        public string VolCity { get; set; }
        [Column("Issue_State", TypeName = "varchar(5)")]
        public string IssueState { get; set; }
        [Column("Start_Page", TypeName = "varchar(5)")]
        public string StartPage { get; set; }
        [Column("End_Page", TypeName = "varchar(5)")]
        public string EndPage { get; set; }

        [InverseProperty("DataSrc")]
        public virtual ICollection<Datsrcln> Datsrcln { get; set; }
    }
}
