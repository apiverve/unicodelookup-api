from setuptools import setup, find_packages

setup(
    name='apiverve_unicodecharacterlookup',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Unicode Character Lookup is a Unicode lookup API that inspects any character, symbol or hex codepoint to find its decimal value, hex notation, and UTF-16 encoding. The response also identifies the character category and supplies names for emoji.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/unicodelookup?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
