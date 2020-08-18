# editron plugins



## remote-data plugin

> loads remote data configured from input data and stores it within data. requests are resolved via proxy-handler

- currently, plugin is only triggered for a created editor widget (`hidden: true` on location will disable fetching data)
- response mapping requires typed schema to store data or else it will be ignored

### usage

ensure the editron-proxy is configured with your data-handler and the plugin is
added. Per default `json`-handler will be called

```js
import { Controller, RemoteDataPlugin } from "editron";
const options = {
  proxy: {
    handlers: [{
      use: ({ source }) => /^https?:\/\/domain/.test(source),
      json: ({ source }) => fetch(source)
    }]
  },
  plugins: [ new RemoteDataPlugin() ]
}
const editron = new Controller(schema, data, options);
```

then setup the remoteData plugin in your schema

```js
// schema ...
{
  type: "object",
  "editron:ui": {
    remoteData: {
      /** proxy function to call for remote data. Default to "json" */
      proxyMethod: "json", // 'json' is default
      /** url to call. You can use {{property}}-syntax to 
      render values of target `source` */
      requestParam: "https://lala/{{type}}/{{id}}",
      /** relative json-pointer (from data-location) to data, 
      which should be used to create remote-url. currently 
      aborts if no data is retrieved from this pointer */
      requestParamValues: "/source",
      /** map of json-pointer from source to target */
      responseMapping: { 
        "/data/description": "/remote/values/description",
        "/title": "/remote/title"
      },
      /** set to true, to overwrite values */
      overwrite: true
    }  
  },

  properties: {
    source: { type: "object", properties: {
      id: { type: "string" },
      type: { type: "string" }
    }},
    remote: { type: "object", properties: {
      title: { type: "string" },
      values: { type: "object", properties: {
        description: { type: "string" }
      }}
    }}
  }
}
```

this example will send a request when source `type` and `id` have been set and store the result to object remote on title and values/description. Any update in source will trigger another request, overwriting the previous response in data.



## sync plugin

> copy a value from one location to another, until destination location changes

- currently, plugin works on strings only

### usage

ensure the plugin is added on options.

```js
import { Controller, SyncPlugin } from "editron";
const options = {
  plugins: [ new SyncPlugin() ]
}
const editron = new Controller(schema, data, options);
```

then setup the sync plugin in your schema

```js
{
  type: "object",
  "editron:ui": {
    sync: {
      /** map of relative json-pointer from source to target */
      mappingFromTo: {
        "source/id": "destination/values/description"
        "source/type": "destination/title"
      }
    }  
  },

  properties: {
    source: { type: "object", properties: {
      id: { type: "string" },
      type: { type: "string" }
    }},
    destination: { type: "object", properties: {
      title: { type: "string" },
      values: { type: "object", properties: {
        description: { type: "string" }
      }}
    }}
  }
}
```
