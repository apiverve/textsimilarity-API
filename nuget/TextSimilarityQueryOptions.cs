using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TextSimilarity
{
    /// <summary>
    /// Query options for the Text Similarity API
    /// </summary>
    public class TextSimilarityQueryOptions
    {
        /// <summary>
        /// The first text to compare. Must be less than 1000 characters
        /// </summary>
        [JsonProperty("text1")]
        public string Text1 { get; set; }

        /// <summary>
        /// The second text to compare. Must be less than 1000 characters
        /// </summary>
        [JsonProperty("text2")]
        public string Text2 { get; set; }
    }
}
