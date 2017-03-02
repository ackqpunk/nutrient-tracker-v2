using System.Collections.Generic;

namespace nutrient_api.Interfaces {
    public interface IRepostory<T, P> {
        IEnumerable<T> Get(P param);
        void Update(P param);
        void Insert(P param);
        void Delete(P param);
    }
}