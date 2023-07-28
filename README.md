# tpPlay_backend
## How to Run
1. Install dependencies: Make sure you have Node.js installed on your machine. Navigate to the root directory of your project in the terminal and run:
```bash
npm install express nodemon dotenv
```
2. Set up MongoDB: Ensure you have a MongoDB database running locally or on a remote server. Update the connection string in your project's configuration file (e.g., app.js or index.js) to point to your MongoDB database.

3. Start the server: In your terminal, run:

```bash
npm start
```
If you wanna verify the API you can use Postman to send HTTP requests to your API endpoints. The API should be accessible at http://localhost:3000/ by default.

## Folder Structure
```
.
├── controllers
│   ├── commentController.js
│   ├── productController.js
│   └── videoController.js
├── index.js
├── models
│   ├── commentModel.js
│   ├── productModel.js
│   └── videoModel.js
├── package.json
├── package-lock.json
├── routes
│   ├── commentRoute.js
│   ├── productRoute.js
│   └── videoRoute.js
└── services
    ├── commentService
    ├── productService.js
    └── videoService.js
```
## Database Structure
### Collections
#### Comment Collection
The 'comment' collection stores comments made by users on videos and products. Each document in the collection represents a single comment and contains the following fields:

- username (String, required): The username of the user who made the comment.
- comment (String, required): The actual comment text.
- timestamp (Date, default: Date.now): The date and time when the comment was made. It defaults to the current date and time if not provided.
- videoId (String, required): The ID of the video to which the comment is associated. This field establishes a relationship between the comment and the corresponding video.

#### Product Collection
The 'product' collection stores information about products related to videos. Each document in the collection represents a single product and contains the following fields:

- title (String, required): The title or name of the product.
- productUrl (String, required): The URL or link to the product.
- price (Number, required): The price of the product.
- videoId (String, required): The ID of the video with which the product is associated. This field establishes a relationship between the product and the corresponding video.

#### Video Collection
The 'video' collection stores information about videos. Each document in the collection represents a single video and contains the following fields:

- urlImgThumbnail (String, required): The URL of the video's thumbnail image. This field holds the link to the thumbnail image used to represent the video.

## API structure
**GET /api/videos/**
----
  Returns all videos.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**    
```
{
    "_id": "64c31c250e8dbb909359be3d",
    "urlImgThumbnail": "cat.png"
}
```

**GET /api/product/**
----
  Returns all product.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**    
```

  {
    "_id": "64c32dbc0e8dbb909359be44",
    "title": "Infinix Hot 11s",
    "productUrl": "infinix.com",
    "price": 2000000,
    "videoId": "64c31c250e8dbb909359be3d"
  }
]
```

**GET /api/product/:videoId**
----
  Returns one specific product.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**    
```
{
    "_id": "64c32dbc0e8dbb909359be44",
    "title": "Infinix Hot 11s",
    "productUrl": "infinix.com",
    "price": 2000000,
    "videoId": "64c31c250e8dbb909359be3d"
}
```

**GET /api/comments/:videoId**
----
  Returns all comments from 1 specific product.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**    
```
[
    {
        "_id": "64c3329a0e8dbb909359be46",
        "username": "user1",
        "comment": "This is the first comment.",
        "timestamp": "2023-07-28T13:15:00.000Z",
        "videoId": "64c31c250e8dbb909359be3d"
    },
    {
        "_id": "64c3375e448381482b7ab7da",
        "username": "user2",
        "comment": "This is the second comment.",
        "timestamp": "2023-07-28T03:34:54.930Z",
        "videoId": "64c31c250e8dbb909359be3d",
        "__v": 0
    },
    {
        "_id": "64c33989833b96627f96532b",
        "username": "user3",
        "comment": "This is the third comment.",
        "timestamp": "2023-07-28T03:44:09.615Z",
        "videoId": "64c31c250e8dbb909359be3d",
        "__v": 0
    }
]
```

**POST /comments/:videoId**
----
  Creates a new Comment.
* **URL Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
{
  "comment": "This is the third comment.",
  "videoId": "64c31c250e8dbb909359be3d",
  "username": "user3"
}
```
* **Success Response:**  
* **Code:** 200  
  **Content:**
```
{
  "message": "Comment added successfully"
}
``` 
