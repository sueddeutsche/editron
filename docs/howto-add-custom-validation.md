# How To Add A Custom Validator for Input Validation

> You can add custom _json-schema_ validators to _editron_. Each validator will receive the a _value_ and its corresponding _json-schema_ and possibly return an error-object. Data validation and error generation is a _json-schema_ feature and thus independent of an _editor_. The task of an _editor_ is to render the results.

A custom validator consists of two parts: a json-schema configuration and a validation function. A validation function receives all required information, that is the value, its json-schema, its json-pointer of the value and an instance of the validator (_Core_).

A json-schema configuration for validation can be assigned by the following options:

1. **custom format** value, e.g. `{ "format": "image-url" }` or
2. **custom keyword**, e.g. `{ "hasLicense": "true" }`

each validation-function must have the following interface

```ts
validate(core, schema: JSONSchema, value: any, pointer: string):
  undefined|VError|Promise<VError>
```

with `VError` defined by

```ts
type VError = {
    type: "error";
    message: string; 
    data: { 
        pointer: string;
        [p: string]: any;
    }
}
```

**Example** To validate an url for a required image extension, you would do the following

```ts
function validator(core, schema, value, pointer) {
  const hasImageExtension = /\.(png|jpeg|jpg|gif|webp)$/.test(value);
  if (!hasImageExtension) {
      return {
          type: "error",
          message: "url does not have a valid image extension of png, jpg, gif or webp",
          data: {
              pointer
          }
      };
  }
}
```



## Custom Format Validator

Following the example above, you add a _format-validator_ by

```ts
import Editron from "editron";
const editron = new Editron(mySchema);
editron.addFormatValidator("image-url", validator);
```

This will trigger the validator for each _json-schema_ definition, containing `format: "image-url"` like

```json
{
  "type": "string",
  "format": "image-url"
}
``` 



## Custom Keyword Validator

Following the example above, you add a _keyword-validator_ by passing the json-schema type for the validator (_string_, _number_, _object_, etc), the keyword to register and the _validator-function_:

```ts
import Editron from "editron";
const editron = new Editron(mySchema);
editron.addKeywordValidator("string", "hasLicense", validator);
```

This will trigger the validator for each _json-schema_ definition, containing `type: "string", hasLicense: "any-value"` like

```json
{
  "type": "string",
  "hasLicense": "test"
}
``` 

But it will not trigger on any non-strings, like `type: "number", hasLicense: "any-value"`.



## Further Reading

You can read more about the validation process in the [README of json-schema-library](https://github.com/sagold/json-schema-library)
