# Services

> frontend-services exposed by editron

Combines multiple services to help working with json-data manipulation, synchronisation and validation.

- The `DataService` manages application state and retrieval. Additional supports undo.
- The `ValidationService` validates any data by a given JSON-schema.
- The `SchemaService` returns the JSON-schema at the given JSON-pointer location

All services offer an interface based on [JSON-pointer](https://tools.ietf.org/html/rfc6901).


## Services


### Location-Service

get the location singleton from `editron.location()`

- Manages current user-focus as a json-pointer
- emits events
- unfortunately has a concept of "page", which is the first property of json-pointer

![Location Service Overview](../docs/images/location-service.jpg)


### DataService

Data can only be changed via the data-service methods. Each state is tracked within the services, enabling und/redo functionality.

```js
// get data at json-pointer
const dataService = new DataService(new State(), jsonData);
dataService.get("#/content/header/title");
```

#### Data manipulation methods

```js
// Set data at given path
dataService.set(pointer, data);
// Set data at given path
dataService.delete(pointer, data);
// Set last set/delete action
dataService.undo();
// redo last undo action
dataService.redo();
```

#### DataService events

```js

dataService.watch(event => {
    console.log(event.type, event.value);
    // called before any data changes of the action
    if (event.type === "data:update:before") {}
    // called after data changes, before observe events 
    if (event.type === "data:update:after") {}
    // called after all data changes have been sent
    if (event.type === "data:update:done") {}
})
// Events bubble up to root pointer (#), # is last event
dataService.observe(pointer, callback, true);
```

### ValidationService

Sends error notifications on changed data.

```js
// create a new data validation service
const validationService = new ValidationService(new State(), jsonSchema)
```

```js
// Validation Events bubble up to root pointer (#)
validationService.observe(pointer, callback, true)   
// validate data
validationService.validate(data).then((errors) => {})
```
