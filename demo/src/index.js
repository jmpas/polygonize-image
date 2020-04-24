import { getTriangulationData, invokePolygons } from "polygonize-image";

const animateImage = async ({
  imageSelector,
  containerSelector,
  animation,
}) => {
  const image = document.querySelector(imageSelector);
  const container = document.querySelector(containerSelector);

  const params = {
    blur: 0,
    vertexCount: 300,
    accuracy: 1,
  };

  const preParams = {
    blur: 1000,
    vertexCount: 50,
    accuracy: 0.2,
  };

  const data1Promise = getTriangulationData({
    image,
    params: preParams,
  });

  const data2Promise = getTriangulationData({
    image,
    params,
  });

  await invokePolygons({
    data: await data1Promise,
    animation: {
      duration: 0.5,
      type: animation,
    },
    container,
  });

  await invokePolygons({
    data: await data2Promise,
    animation: {
      duration: 0.5,
      type: animation,
    },
    container,
  });

  image.classList.add("show");
};

const init = () => {
  animateImage({
    imageSelector: ".img",
    containerSelector: ".container",
    animation: "fly",
  });
  animateImage({
    imageSelector: ".img-2",
    containerSelector: ".container-2",
    animation: "fade",
  });
};

init();
