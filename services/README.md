# Services

> frontend-services exposed by editron-core

## Location-Service

get the location singleton from `controller.location()`

- Manages current user-focus as a json-pointer
- emits events
- unfortunately has a concept of "page", which is the first property of json-pointer

![Location Service Overview](../docs/images/location-service.jpg)


