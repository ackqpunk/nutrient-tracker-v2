using System.Collections.Generic;

namespace nutrient_api.Models{
    public class FoodCategory{
        public int CategoryID {get;set;}
        public string Name {get;set;}
        public IEnumerable<Food> Foods {get;set;}

        public FoodCategory ()
        {
            Name = "";
        }
    }
}