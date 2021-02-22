# How To Add A Custom Validator for Input Validation

_Clarifications_

- All references to _value_, refer to the data like a number (_2021_), a string (_"What a year"_), object (_{ year: 2021 }_) etc.
- A _corresponding json-schema_, refers to the json-schema, describing a _value_, that is for a _value: "What a year"_ its corrensponding _json-schema_ might be _{ type: "string", minLength: 1, title: "main title" }_


> You can add custom _json-schema_ validators to _editron_. Each validator will receive a _value_ and its corresponding _json-schema_ and possibly return an error-object. Data validation and error generation is a _json-schema_ feature and thus independent of an _editor_. The task of an _editor_ is to render the results.
> So you register _validation functions_ that are executed, if they are referenced within the json-schema. Suppose you need an email validation: You can add a _format: "email"_ to a json-schema like: _{ "type": "string", "format": "email" }_. Additionally, you add a _validation-function_ for this special format-field: `editron.addFormatValidator("mail", emailValidation);`

A custom validator consists of two parts: a json-schema configuration and a validation function. The validation function receives all required information: the value, its json-schema, its json-pointer and an instance of the validator (_Core_).

A json-schema configuration for validation can be assigned by the following options:

1. **custom format** value, e.g. `{ "format": "image-url" }` **or**
2. **custom keyword**, e.g. `{ "hasLicense": "true" }`

Each validation-function must have the following interface


```ts
validate(core, schema: JSONSchema, value: any, pointer: string):
  undefined|VError|Promise<VError>
```

with `VError` defined by

```ts
type VError = {
    type: "error";
    code: string;
    message: string; 
    data: { 
        pointer: string;
        [p: string]: any;
    }
}
```

**Example** To validate an url for a required image extension, you would do the following

```ts
function validate(core, schema, value, pointer) {
  const hasImageExtension = /\.(png|jpeg|jpg|gif|webp)$/.test(value);
  if (!hasImageExtension) {
      return {
          type: "error",
          code: "image-url-error",
          message: "url does not have a valid image extension of png, jpg, gif or webp",
          data: {
              pointer
          }
      };
  }
}
```



## Custom Format Validator

Following the example above, you can add a _format-validator_ by

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

_Note_ a _format-validator_ registers to all json-types like _string_, _object_, _etc_


## Custom Keyword Validator

Another example is a _keyword-validator_. You can add this validator by passing the json-schema type for it (_string_, _number_, _object_, etc), the keyword to register and the _validator-function_:

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
