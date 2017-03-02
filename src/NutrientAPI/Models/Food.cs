using System.Collections.Generic;

namespace nutrient_api.Models {
    public class Food {
        public string FoodID {get;set;}
        public string Name {get;set;}
        public IEnumerable<Nutrient> Nutrients {get;set;}
        public IEnumerable<Measure> Measures {get;set;}

        public Food ()
        {
            Name = "";
            Nutrients = new List<Nutrient>();
            Measures = new List<Measure>();
        }
    }
}