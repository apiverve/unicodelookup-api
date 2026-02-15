# Unicode Character Lookup API - Go Client

Unicode Character Lookup is a tool for retrieving detailed information about Unicode characters. It provides codepoint, UTF-16 encoding, category, and emoji name information.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Go client for the [Unicode Character Lookup API](https://apiverve.com/marketplace/unicodelookup?utm_source=go&utm_medium=readme)

---

## Installation

```bash
go get github.com/apiverve/unicodelookup-api/go
```

---

## Configuration

Before using the Unicode Character Lookup API client, you need to obtain your API key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=go&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=go&utm_medium=readme)

The Unicode Character Lookup API documentation is found here: [https://docs.apiverve.com/ref/unicodelookup](https://docs.apiverve.com/ref/unicodelookup?utm_source=go&utm_medium=readme)

---

## Usage

```go
package main

import (
    "fmt"
    "log"

    "github.com/apiverve/unicodelookup-api/go"
)

func main() {
    // Create a new client
    client := unicodelookup.NewClient("YOUR_API_KEY")

    // Set up parameters
    params := map[string]interface{}{
        "character": "👋",
        "codepoint": "1F44B"
    }

    // Make the request
    response, err := client.Execute(params)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("Status: %s\n", response.Status)
    fmt.Printf("Data: %+v\n", response.Data)
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "character": "�",
    "codepoint": "U+D83D",
    "decimal": 55357,
    "hex": "D83D",
    "utf16": "\\uD83D",
    "category": "Control",
    "name": null
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=go&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=go&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=go&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=go&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
