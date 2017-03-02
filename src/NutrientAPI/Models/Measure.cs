namespace nutrient_api.Models {
    public class Measure {
        public string Name {get;set;}
        public string Abbreviation {get;set;}

        public Measure()
        {
            Name = "";
            Abbreviation = "";
        }
    }
}