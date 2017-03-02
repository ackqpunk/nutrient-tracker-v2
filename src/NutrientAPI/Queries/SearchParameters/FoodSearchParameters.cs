namespace nutrient_api.Queries.SearchParameters {
    public class FoodSearchParameters {
        public int FoodCategoryID {get;set;}
        public long FoodID {get;set;}
        public string Name {get;set;}

        public FoodSearchParameters ()
        {
            Name = "";
        }
    }
}