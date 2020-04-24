# Polygonize Image

Animate images with polygons using css [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

### Animations

| Fly                                      | Fade                                     |
| ---------------------------------------- | ---------------------------------------- |
| ![polygons animation fade demo](fly.gif) | ![polygons animation fly demo](fade.gif) |

### Usage

You may use this code to pre generate triangulation data for your images and show to the user the polygons and the animation while the image is loading, or simply cause you feel like adding some "glitter" on your website, or both, feel free to use it however you feel it suits you.

###### Install it as a dependency

```
$ yarn add polygonize-image
```

###### Getting triangulation data from an image

```javascript
import { getTriangulationData } from "polygonize-image";

const triangulationData = await getTriangulationData({
  image,
  params: {
    blur: 0,
    vertexCount: 10,
    accuracy: 1,
  },
});
```

###### Rendering polygons using the triangulation data in a container

```javascript
import { invokePolygons } from "polygonize-image";

const imageContainer = document.querySelector(".container-element");

await invokePolygons({
  data: triangulationData,
  container,
  animation: {
    duration: 0.5,
    type: "fly",
  },
});
```

###### Triangulation data example

```json
{
  "height": "612",
  "width": "408",
  "polygons": [
    {
      "points": "0.9803921568627451% 37.745098039215684%,0% 99.83660130718954%,45.83333333333333% 66.66666666666666%",
      "color": "#fd6b08"
    },
    {
      "points": "0% 0%,0.9803921568627451% 37.745098039215684%,50% 0%",
      "color": "#272726"
    },
    {
      "points": "0.9803921568627451% 37.745098039215684%,34.31372549019608% 47.712418300653596%,50% 0%",
      "color": "#061c21"
    },
    {
      "points": "34.31372549019608% 47.712418300653596%,45.83333333333333% 66.66666666666666%,79.16666666666666% 49.01960784313725%",
      "color": "#807f7a"
    },
    {
      "points": "50% 0%,34.31372549019608% 47.712418300653596%,79.16666666666666% 49.01960784313725%",
      "color": "#c29688"
    },
    {
      "points": "45.83333333333333% 66.66666666666666%,0% 99.83660130718954%,99.75490196078431% 99.83660130718954%",
      "color": "#9b270f"
    },
    {
      "points": "45.83333333333333% 66.66666666666666%,99.75490196078431% 99.83660130718954%,112.5% 88.0718954248366%",
      "color": "#e2490c"
    },
    {
      "points": "79.16666666666666% 49.01960784313725%,45.83333333333333% 66.66666666666666%,112.5% 88.0718954248366%",
      "color": "#cf4010"
    },
    {
      "points": "79.16666666666666% 49.01960784313725%,112.5% 88.0718954248366%,116.66666666666667% 21.405228758169933%",
      "color": "#ed670f"
    }
  ]
}
```

### Inspiration

- Species in pieces
  - [Interactive exhibition](http://www.species-in-pieces.com/)
  - [Making Of blog post](https://www.smashingmagazine.com/2015/06/the-making-of-in-pieces/)
- [Triangulate image library](https://www.smashingmagazine.com/2015/06/the-making-of-in-pieces/)
- [How to use SVG as a Placeholder, and Other Image Loading Techniques](https://jmperezperez.com/svg-placeholders/)
