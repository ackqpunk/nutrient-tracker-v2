using System;
using System.Collections;
using System.Collections.Generic;

namespace NutrientAPI.Queries.Common
{
	public class ResultsList<T> : List<T>
	{
		public PagingData PagingData { get; set; }

		public ResultsList() { }

		public ResultsList(IEnumerable<T> results, PagingData pagingData = null) : base(results)
		{
			if (pagingData != null)
				this.PagingData = pagingData;
		}
	}
}
