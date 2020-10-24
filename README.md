# To-Buy API

To-buy is a CRUD API which serves the front-end side for creating a TODO like list for things you want to buy.
Constructed using node.js to create a bridge between front and database using REST API methods.

> Build for training and studying

<hr>


## List of content
* [API - Endpoints](#installation)
    * GET
        * [/items](#getItem)
        * [/items/id](#getItemId)
    * POST
        * [/items](#createItem)
    * PUT
        * [/items](#updateItem)
    * DELETE
        * [/items](#deleteItem)
* [Front-End](#front-end)
* [Team Members](#team-members)

<hr>

## API's endpoints
**Base URL: https://algumnome.herokuapis.com**

<hr>

### <a name="getItem"></a> **[GET] */items*** 

This endpoint contains pagination and item limit count, both of them can be change in que params of the request for the server.
<br>
Allowed parameters are:
* ?page=1 *Which sets the page requested*
* ?perPage=10 *Which sets how many items will come in the response*

**Both can be used together**. 
```json
{
    "docs": [
        {
            "siteUrls": [],
            "_id": "5f93595f6033401d2b66e29a",
            "title": "calderado",
            "price": 123,
            "currency": "USD",
            "description": "Calde lindo",
            "imageUrl": "https://picsum.photos/1000",
            "__v": 0
        },
        {
            "siteUrls": [],
            "_id": "5f936ac56033401d2b66e29b",
            "title": "Burgão Da Manolagem",
            "price": 150,
            "currency": "BRL",
            "description": "O produto é muito legal",
            "imageUrl": "https://picsum.photos/1000",
            "__v": 0
        },
        {
            "siteUrls": [],
            "_id": "5f936aca6033401d2b66e29c",
            "title": "Burgão Da Manolagem",
            "price": 150,
            "currency": "BRL",
            "description": "O produto é muito legal",
            "imageUrl": "https://picsum.photos/1000",
            "__v": 0
        }
    ],
    "total": 11,
    "limit": 3,
    "page": 1,
    "pages": 4
}    
    
```

### <a name="getItemId"></a>**[GET] */items/id***
**the */id** field is the _id returned in the response*
```json
{
    "siteUrls": [],
    "_id": "5f936ac56033401d2b66e29b",
    "title": "Burgão Da Manolagem",
    "price": 150,
    "currency": "BRL",
    "description": "O produto é muito legal",
    "imageUrl": "https://picsum.photos/1000",
    "__v": 0
}
``` 

### <a name="createItem"></a> **[POST] */items/***

To create one item, the following style of the request body is required.

##### Request body example:

```json
{
    "title": "Title for the item/object",
    "price": "20",
    "currency": "EUR",
    "description": "Object/item description",
    "imageUrl": "https://someurl.com",
    "siteUrls" :[
        "https://someurl.com",
        "https://someurl.com/"
    ]
}
```

##### Rule for request body
```javascript
title: {
    type: String,
    required: true,
},
price: {
    type: Number,
    required: false,
},
currency: {
    type: String,
    required: false
},
siteUrls: {
    type: [String],
    required: false
},
description: {
    type: String,
    required: false
},
imageUrl: {
    type: String,
    required: false
}
```

If the request body is correct the server will respond with **201** status code and send back the data created including the **_id** field generated for the object.

##### Response example
```json
{
    "siteUrls": [
        "https://someurl.com",
        "https://someurl.com/"
    ],
    "_id": "5f94508e87f4fe57ad723cb8",
    "title": "Title for the item/object",
    "price": 20,
    "currency": "EUR",
    "description": "Object/item description",
    "imageUrl": "https://someurl.com",
    "__v": 0
}
```
Otherwise, the response will contain the error founded

##### With error response example 
```json
{
    "errors": [
        {
            "message": "\"imageUrl\" must be a valid uri",
            "path": [
                "imageUrl"
            ],
            "type": "string.uri",
            "context": {
                "label": "imageUrl",
                "value": "https://som eurl.com",
                "key": "imageUrl"
            }
        }
    ]
}
```

### <a name="updateItem"></a> **[PUT] */items/id***

Used only for updating items within the database, cannot be used to create new ones


<hr>

# <a name="team-members"></a> Team Members
* [Felipe Calderaro](https://github.com/FelipeCalderaro/) - <felipecalderaro@calderaro.dev> 
* [Heydrigh Ribeiro](https://github.com/heydrigh) - <heydrigh@heyd.dev> 



<img alt="FelipeCalderaro languages" width="35%" src="https://github-readme-stats.vercel.app/api?username=felipecalderaro&show_icons=true&theme=dracula"/>
<img alt="FelipeCalderaro status" width="29%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=felipecalderaro&layout=compact&theme=dracula"/>

<hr>

## License
[MIT](https://choosealicense.com/licenses/mit/)

