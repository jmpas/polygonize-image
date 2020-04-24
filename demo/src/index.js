import { getTriangulationData, invokePolygons } from "../../dist/polygons";

const image = document.querySelector(".img");

const params = {
  blur: 0,
  vertexCount: 300,
  accuracy: 1,
};

const preParams = {
  ...params,
  blur: 1000,
  vertexCount: 50,
  accuracy: 0.2,
};

const container = document.querySelector(".container");

const init = async () => {
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

init();
