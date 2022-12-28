# Image Processing API

This is an image-processing API that can be used in two different ways.

1. As a simple placeholder API, it allows placing images into the front-end with the size set via URL parameters for rapid prototyping.
2. The second use case is as a library to serve properly scaled versions of images to the front-end to reduce page load size.

Rather than needing to resize and upload multiple copies of the same image to be used throughout the site, this API will handle resizing and serving images for the user.

## More information

- To compile the TypeScript code into JavaScript, run `npm run build`

- To run the express server, run `npm run start`

- To test the created functionality, access the endpoint localhost:8000

  Example: [http://localhost:8000/api/images?filename=santamonica.jpg&width=200&height=200](http://localhost:8000/api/images?filename=santamonica.jpg&width=200&height=200)

- When accessing the appropriate endpoints, you will notice that the thumbnail images will be created automatically and returned.

- When accessing the same endpoint multiple times, the images won't be recreated after the first request.


## Filenames for test
- encenadaport.jpg

- fjord.jpg

- icelandwaterfall.jpg

- palmtunnel.jpg

- santamonica.jpg
