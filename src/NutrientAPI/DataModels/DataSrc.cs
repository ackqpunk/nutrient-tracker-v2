using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class DataSrc
    {
        public DataSrc()
        {
            Datsrcln = new HashSet<Datsrcln>();
        }

        public string DataSrcId { get; set; }
        public string Authors { get; set; }
        public string Title { get; set; }
        public string Year { get; set; }
        public string Journal { get; set; }
        public string VolCity { get; set; }
        public string IssueState { get; set; }
        public string StartPage { get; set; }
        public string EndPage { get; set; }

        public virtual ICollection<Datsrcln> Datsrcln { get; set; }
    }
}
