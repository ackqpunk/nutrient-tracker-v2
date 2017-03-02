namespace nutrient_api.Models {

    public class Nutrient {
        public string Name {get;set;}
        public Measure UOM {get;set;}
        public decimal Threshold {get;set;}
        
        public Nutrient ()
        {
            Name = "";
        }
    }
}