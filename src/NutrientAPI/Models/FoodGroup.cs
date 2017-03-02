namespace nutrient_api.Models {
    public class FoodGroup {
        public string FoodGroupID {get;set;}
        public string Name {get;set;}

        public FoodGroup ()
        {
            FoodGroupID = "";
            Name = "";
        }
    }
}