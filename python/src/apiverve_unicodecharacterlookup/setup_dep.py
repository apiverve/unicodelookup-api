from setuptools import setup, find_packages

setup(
    name='apiverve_unicodecharacterlookup',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Unicode Character Lookup is a tool for retrieving detailed information about Unicode characters. It provides codepoint, UTF-16 encoding, category, and emoji name information.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/unicodelookup?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
