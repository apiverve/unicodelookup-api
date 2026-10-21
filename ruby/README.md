# Unicode Character Lookup API - Ruby Gem

Unicode Character Lookup is a Unicode lookup API that inspects any character, symbol or hex codepoint to find its decimal value, hex notation, and UTF-16 encoding. The response also identifies the character category and supplies names for emoji.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_unicodelookup'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_unicodelookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_unicodelookup'

# Initialize the client
client = APIVerve::Unicodelookup::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  character: "👋",
  codepoint: "1F44B"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ character: "👋", codepoint: "1F44B" })
  puts response["data"]
rescue APIVerve::Unicodelookup::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Unicodelookup::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Unicodelookup::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/unicodelookup?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/unicodelookup?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/unicodelookup?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
