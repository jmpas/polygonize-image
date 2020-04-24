import { getTriangulationData, invokePolygons } from "../../dist/polygons";

const animateGuru = async () => {
  const image = document.querySelector(".img-2");
  const container = document.querySelector(".container-2");

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
    time: 0.5,
    type: "fade",
    container,
  });

  await invokePolygons({
    data: await data2Promise,
    time: 0.5,
    type: "fade",
    container,
  });

  image.classList.add("show");
};

const animateShaman = async () => {
  const image = document.querySelector(".img");

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

  const container = document.querySelector(".container");

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
    time: 0.5,
    type: "fly",
    container,
  });

  await invokePolygons({
    data: await data2Promise,
    time: 0.5,
    type: "fly",
    container,
  });

  image.classList.add("show");
};

const init = () => animateGuru() && animateShaman();

init();
