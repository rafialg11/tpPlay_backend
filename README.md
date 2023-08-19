# tpPlay_backend
## How to Run
1. Install dependencies: Make sure you have Node.js installed on your machine. Navigate to the root directory of your project in the terminal and run:
```bash
npm install express nodemon dotenv
```
2. Setup MongoDB    

   Before running the application, you need to configure MongoDB. Follow these steps:
    - **Database Setup**:
       - Ensure you have a MongoDB database running locally or on a remote server.
       - If you're using a remote server, collect the database connection string.
    
    - **Environment Variables**:
    
       - In your project's root directory, create a `.env` file if it doesn't exist.
       - Inside the `.env` file, set the following environment variables:
       
         - `PORT`: Set the desired port number for your application (e.g., `PORT=3000`).
         - `DATABASE_URL`: Set the MongoDB database connection string using the appropriate URL for your setup.
    
       Example `.env` file content:
    
       ```plaintext
       PORT=3000
       DATABASE_URL=mongodb://localhost:27017/mydatabase

4. Start the server: In your terminal, run:

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
[
    {
        "_id": "64df1c887d5a29001cd13069",
        "urlImgThumbnail": "https://i.pinimg.com/564x/4c/9a/b8/4c9ab8c37b93ef118defe2b2616a2ba8.jpg",
        "videoUrl": "https://www.youtube.com/embed/X5EXTKMnDuA",
        "videoTitle": "Diskon Sepatu Edisi HUT RI",
        "videoOwner": "Pentella",
        "videoViews": 1
    },
    {
        "_id": "64df1ca1331936001c669adb",
        "urlImgThumbnail": "https://i.pinimg.com/564x/6f/d9/45/6fd945b2cc8a7e07a715496c10a5dc0f.jpg",
        "videoUrl": "https://www.youtube.com/embed/5Ez9YURgpfQ",
        "videoTitle": "Kemeja murah meriah hanya hari ini!!",
        "videoOwner": "KingKemeja",
        "videoViews": 111
    },
    {
        "_id": "64df1caffab1da001c63967a",
        "urlImgThumbnail": "https://i.pinimg.com/564x/0e/92/76/0e92767de4ca131f0aef32b5ed6d60cb.jpg",
        "videoUrl": "https://www.youtube.com/embed/8AQLHUBPTuw",
        "videoTitle": "Mix and Match Kemeja",
        "videoOwner": "FashionForward",
        "videoViews": 5200
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
[
    {
        "_id": "64df8f61a77f75001c0b836e",
        "title": "Sepatu Casual",
        "productUrl": "https://www.tokopedia.com/footstepfootwear/footstep-footwear-sepatu-loafers-pria-casual-patra-boat-shoes-boat-39",
        "productImg": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/22/a2b86d0e-99c1-4e65-95b2-b6e80c5f90b6.jpg",
        "storeName": "Pentella",
        "price": 325000,
        "videoId": "64df1c887d5a29001cd13069"
    },
    {
        "_id": "64df8fd3dc2da8001c2c395e",
        "title": "Sepatu ThunderBear",
        "productUrl": "https://www.tokopedia.com/thunderbear/sepatu-thunderbear-slip-on-voltaire-gf-green-38-9d04e?extParam=ivf%3Dfalse&src=topads",
        "productImg": "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/3/29/5124a298-c5b6-487f-b9ba-7c20a08e1604.jpg",
        "storeName": "Pentella",
        "price": 123629,
        "videoId": "64df1c887d5a29001cd13069"
    }
]
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
        "_id": "64e08eff72c5a80342ad8a14",
        "username": "Rafi",
        "comment": "Sepatu nya murah dan bagus",
        "timestamp": "2023-08-19T09:44:31.880Z",
        "videoId": "64df1c887d5a29001cd13069",
        "__v": 0
    },
    {
        "_id": "64e0c78872c5a80342ad8a9f",
        "username": "Yadi",
        "comment": "Jadi pengen beli juga ni",
        "timestamp": "2023-08-19T13:45:44.440Z",
        "videoId": "64df1c887d5a29001cd13069",
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
    "username": "Andi",
    "comment": "Barang bagus ga mengecewakan, recommended buat kalian yang belum beli",
    "videoId": "64df1c887d5a29001cd13069",
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
