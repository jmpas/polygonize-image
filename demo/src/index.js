import { invokePolygons } from "polygonize-image";
import { data1, data2 } from "./triangulation-data";

const animateImage = async ({
  imageSelector,
  containerSelector,
  animation,
  data,
}) => {
  const image = document.querySelector(imageSelector);
  const container = document.querySelector(containerSelector);

  await invokePolygons({
    data,
    animation: {
      duration: 0.5,
      type: animation,
    },
    container,
  });

  setTimeout(() => image.classList.add("show"), 500);
};

const init = () => {
  animateImage({
    imageSelector: ".img",
    containerSelector: ".container",
    animation: "fly",
    data: data1,
  });
  animateImage({
    imageSelector: ".img-2",
    containerSelector: ".container-2",
    animation: "fade",
    data: data2,
  });
};

init();
