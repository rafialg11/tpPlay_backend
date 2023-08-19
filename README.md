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
## Database Schema

### Videos Collection

The `videos` collection is designed to store information about the videos featured on the platform. Each document in this collection includes the following fields:

- `urlImgThumbnail`: URL of the video thumbnail image.
- `videoUrl`: Embedded YouTube video URL.
- `videoTitle`: Title of the video.
- `videoOwner`: Name of the video owner.
- `videoViews`: Number of video views.

**Example Document:**

```json
{
  "urlImgThumbnail": "https://i.pinimg.com/564x/4c/9a/b8/4c9ab8c37b93ef118defe2b2616a2ba8.jpg",
  "videoUrl": "https://www.youtube.com/embed/X5EXTKMnDuA",
  "videoTitle": "Diskon Sepatu Edisi HUT RI",
  "videoOwner": "Pentella",
  "videoViews": 1
}
```

### Products Collection

The `products` collection is utilized to store information about products associated with the videos on the platform. Each document in this collection contains these fields:

- `title`: Product title.
- `productUrl`: E-commerce product URL.
- `productImg`: Product image URL.
- `storeName`: Store or seller name.
- `price`: Product price.
- `videoId`: ID of the video associated with this product.

**Example Document:**

```json
{
  "title": "Sepatu Casual",
  "productUrl": "https://www.tokopedia.com/footstepfootwear/footstep-footwear-sepatu-loafers-pria-casual-patra-boat-shoes-boat-39",
  "productImg": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/22/a2b86d0e-99c1-4e65-95b2-b6e80c5f90b6.jpg",
  "storeName": "Pentella",
  "price": "325000",
  "videoId": "64df1c887d5a29001cd13069"
}
```

### Comments Collection

The `comments` collection is used to store comments left by users on the platform's videos. Each document in this collection consists of these fields:

- `username`: Name of the user who left the comment.
- `comment`: Comment content.
- `timestamp`: Time when the comment was made.
- `videoId`: ID of the video to which this comment is related.

**Example Document:**

```json
{
  "username": "Rafi",
  "comment": "Sepatu nya murah dan bagus",
  "timestamp": "2023-08-19T09:44:31.880Z",
  "videoId": "64df1c887d5a29001cd13069",
}
```


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
