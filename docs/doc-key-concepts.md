# Key Concepts

There are three basic concepts that you should be familiar, when working with a JSON-Schema based editor:

1. **[JSON-Schema](https://json-schema.org/)** is a [declarative format for describing the structure of data](https://json-schema.org/understanding-json-schema/about.html) and itself is stored as a JSON-file. A JSON-Schema may be used to describe the data you need and also describe the user-interface to create this data.
2. **[JSON-Schema Validation](https://json-schema.org/latest/json-schema-validation.html)** extends the JSON-Schema with validation rules for the input values. These rules are used to further evaluate the corresponding data and respond with errors, if the given rules are not met.
3. **[JSON-Pointer](https://tools.ietf.org/html/rfc6901)** defines a string syntax for identifying a specific value within a JSON document and is [supported by JSON-Schema](https://json-schema.org/understanding-json-schema/structuring.html). Given a JSON document, it behaves similar to a [lodash path](https://lodash.com/docs/4.17.5#get) (`a[0].b.c`), which follows JS-syntax, but instead uses `/` separators, e.g. (`a/0/b/c`). In the end, you describe a path into the JSON data to a specific point.
