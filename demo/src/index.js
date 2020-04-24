import { invokePolygons } from "polygonize-image";
import { data1, data2, data3, data4 } from "./triangulation-data";

const animateImage = async ({
  imageSelector,
  containerSelector,
  animation,
  data1,
  data2,
}) => {
  const image = document.querySelector(imageSelector);
  const container = document.querySelector(containerSelector);

  await invokePolygons({
    data: data1,
    animation: {
      duration: 0.5,
      type: animation,
    },
    container,
  });

  await invokePolygons({
    data: data2,
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
    data1: data1,
    data2: data2,
  });
  animateImage({
    imageSelector: ".img-2",
    containerSelector: ".container-2",
    animation: "fade",
    data1: data3,
    data2: data4,
  });
};

init();
