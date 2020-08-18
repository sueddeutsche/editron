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

ensure the plugin is added to editron options.

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



## sortable plugin

> enables arrays to be sortable and interchangable via drag and drop (sortablejs). This also enables arrays of the same type, e.g. by different editors, like the minimap, to be drag and dropped correctly. This also enables dummy containers to be dropped as array item (e.g. adding new modules from a list of items - see example)


### usage

ensure the plugin is added to editron options.

```js
import { Controller, SortablePlugin } from "editron";
const options = {
  plugins: [ new SortablePlugin() ]
}
const editron = new Controller(schema, data, options);
```

- currently, child-container for array items must match `CHILD_CONTAINER_SELECTOR` from `components/container`


Following are two configurations

1. sorting lists
2. adding new elements


#### usage, sorting lists within data

```js
// json-schema
{
  type: "object",
  properties: {
  listA: {
    type: "array",
    "editron:ui": {
    sortable: {
      group: "string-tags"
      // per default - the whole container is draggable (click target)
    }
    },
    items: {
    title: "people tags",
    type: "string"
    }
  },
  listB: {
    type: "array",
    "editron:ui": {
    sortable: {
      group: "string-tags",
      handle: ".drag-handle" // optionally, you set a html-element as drag-handle
    }
    },
    items: {
    title: "person tags",
    type: "string"
    }
  }
  }
}
```

The above example defines two sortable list. Each array may be drag and dropped within each array. With both lists (_listA_ and _listB_) sharing the same group-name `string-tags`, their items can be drag and dropped from one list to another.


#### usage, adding new items

Use the following guide to add a list of static elements to the list. Create a markup like the following, where the attribute `data-content` holds the stringified (as in `JSON.stringify`) content, to insert into the array:

```html
<div class="list">
  <div class="list__item" data-content='{ "type": "itemA", "content": { "title": "Any Description" } }'>
    Any Description of markup here
  </div>
  <div class="list__item" data-content='{ "type": "itemA", "content": { "title": "Fancy Item" } }'>
    Add a fancy item
  </div>
  <div class="list__item" data-content='{ "type": "itemB", "content": { "title": "Other Item" } }'>
    Add another item
  </div>
</div>
```

For drag and drop to work, use the [sortablejs](https://github.com/SortableJS/Sortable) dependency like:

```js
const sortable = new Sortable(document.querySelector(".list"), {
  group: {
    name: "string-tags", // choose the same group from json-schema, where the items may be inserted
    pull: () => "clone", // do not remove item-templates from original list
    put: false // prevent other items to be added to this list
  },
  sort: false // disallow sorting of the template-item list
});
```





