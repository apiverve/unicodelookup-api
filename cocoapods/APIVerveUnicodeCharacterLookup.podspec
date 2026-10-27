Pod::Spec.new do |s|
  s.name             = 'APIVerveUnicodeCharacterLookup'
  s.version          = '1.2.3'
  s.summary          = 'Unicode Character Lookup is a Unicode lookup API that inspects any character, symbol or hex codepoint to find its decimal value, hex...'
  s.description      = <<-'DESC'
Unicode Character Lookup is a Unicode lookup API that inspects any character, symbol or hex codepoint to find its decimal value, hex notation, and UTF-16 encoding. The response also identifies the character category and supplies names for emoji.

This iOS/macOS SDK provides a convenient way to access the Unicode Character Lookup from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/unicodelookup?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/unicodelookup-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveUnicodeCharacterLookup/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
