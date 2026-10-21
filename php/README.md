# Unicode Character Lookup API - PHP Package

Unicode Character Lookup is a Unicode lookup API that inspects any character, symbol or hex codepoint to find its decimal value, hex notation, and UTF-16 encoding. The response also identifies the character category and supplies names for emoji.

## Installation

Install via Composer:

```bash
composer require apiverve/unicodelookup
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Unicodelookup\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'character' => '👋',
    'codepoint' => '1F44B'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Unicodelookup\Client;
use APIVerve\Unicodelookup\Exceptions\APIException;
use APIVerve\Unicodelookup\Exceptions\ValidationException;

try {
    $response = $client->execute(['character' => '👋', 'codepoint' => '1F44B']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/unicodelookup?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/unicodelookup?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/unicodelookup?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
