using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
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

        public string NdbNo { get; set; }
        public string FdGrpCd { get; set; }
        public string LongDesc { get; set; }
        public string ShrtDesc { get; set; }
        public string ComName { get; set; }
        public string ManufacName { get; set; }
        public string Survey { get; set; }
        public string RefDesc { get; set; }
        public int? Refuse { get; set; }
        public string SciName { get; set; }
        public decimal? NFactor { get; set; }
        public decimal? ProFactor { get; set; }
        public decimal? FatFactor { get; set; }
        public decimal? ChoFactor { get; set; }

        public virtual ICollection<Datsrcln> Datsrcln { get; set; }
        public virtual ICollection<Langual> Langual { get; set; }
        public virtual ICollection<NutData> NutDataNdbNoNavigation { get; set; }
        public virtual ICollection<NutData> NutDataRefNdbNoNavigation { get; set; }
        public virtual ICollection<Weight> Weight { get; set; }
        public virtual FdGroup FdGrpCdNavigation { get; set; }
    }
}
