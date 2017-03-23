using System;
using System.Collections.Generic;

namespace NutrientAPI.DataModels
{
    public partial class NutData
    {
        public string NdbNo { get; set; }
        public string NutrNo { get; set; }
        public decimal NutrVal { get; set; }
        public int NumDataPts { get; set; }
        public decimal? StdError { get; set; }
        public string SrcCd { get; set; }
        public string DerivCd { get; set; }
        public string RefNdbNo { get; set; }
        public string AddNutrMark { get; set; }
        public int? NumStudies { get; set; }
        public decimal? Min { get; set; }
        public decimal? Max { get; set; }
        public short? Df { get; set; }
        public decimal? LowEb { get; set; }
        public decimal? UpEb { get; set; }
        public string StatCmt { get; set; }
        public DateTime? AddModDate { get; set; }
        public string Cc { get; set; }

        public virtual FoodDes NdbNoNavigation { get; set; }
        public virtual NutrDef NutrNoNavigation { get; set; }
        public virtual FoodDes RefNdbNoNavigation { get; set; }
        public virtual SrcCd SrcCdNavigation { get; set; }
    }
}
