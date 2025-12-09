using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.UnicodeCharacterLookup
{
    /// <summary>
    /// Query options for the Unicode Character Lookup API
    /// </summary>
    public class UnicodeCharacterLookupQueryOptions
    {
        /// <summary>
        /// The Unicode character to lookup
        /// Example: 👋
        /// </summary>
        [JsonProperty("character")]
        public string Character { get; set; }

        /// <summary>
        /// The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B')
        /// Example: 1F44B
        /// </summary>
        [JsonProperty("codepoint")]
        public string Codepoint { get; set; }
    }
}
