import triangulate from "triangulate-image";

const image = document.querySelector(".animated-img");

const animationTypes = {
  fade: {
    pre: ({ time, color, points }) => `
      clip-path: polygon(${points});
      background: ${color};
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      position: absolute;
      opacity: 0;
      transition: opacity ${time}s cubic-bezier(.7,.3,0,1);`,
    post: () => "opacity: 1;",
  },
  fly: {
    pre: ({ time, points }) => {
      const modifiedPoints = points
        .split(",")
        .map((xy) => xy.split(" "))
        .map(([x, y]) => `${x.replace("%", "") * 1 + Math.random() * 30}% ${y}`)
        .join(",");

      return `
        clip-path: polygon(${modifiedPoints});
        background: transparent;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        transition: -webkit-clip-path ${time}s cubic-bezier(.7, .3, 0, 1), clip-path ${time}s cubic-bezier(.7, .3, 0, 1), background-color ${time}s cubic-bezier(.7, .3, 0, 1);`;
    },
    post: ({ points, color }) =>
      `clip-path: polygon(${points}); background-color: ${color};`,
  },
};

const createElementFromHTML = (htmlString) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  return div.firstElementChild;
};

const getTriangulationData = ({ image, params }) =>
  triangulate(params)
    .fromImage(image)
    .toSVG()
    .then(createElementFromHTML)
    .then((svgEl) => ({
      height: svgEl.getAttribute("height"),
      width: svgEl.getAttribute("width"),
      polygons: svgEl.querySelectorAll("polygon"),
    }))
    .then((svg) => ({
      ...svg,
      polygons: Array.from(svg.polygons).map((polygon) => ({
        points: polygon
          .getAttribute("points")
          .split(" ")
          .map((values) => values.split(","))
          .map(
            ([a, b]) => `${(a / svg.width) * 100}% ${(b / svg.height) * 100}%`
          )
          .join(","),
        color: polygon.getAttribute("fill"),
      })),
    }));

const createPolgyon = ({ points, color, time, idx, type }) => {
  const polygon = document.createElement("div");
  polygon.classList.add("polygon");

  polygon.style = animationTypes[type].pre({ time, color, points });

  const promise = new Promise((resolve) =>
    setTimeout(() => {
      polygon.style =
        polygon.getAttribute("style") +
        animationTypes[type].post({ time, color, points });
      resolve(polygon);
    }, (100 * idx) / 20)
  );

  return { polygon, promise };
};

const invokePolygons = ({ data, time, type, container }) =>
  Promise.all(
    data.polygons.map((polygon, idx) => {
      const { polygon: polygonEl, promise } = createPolgyon({
        ...polygon,
        time,
        idx,
        type,
      });
      container.append(polygonEl);
      return promise;
    })
  );

const animateImage = ({ image, params, time = 5, type, container }) =>
  getTriangulationData({ image, params }).then((data) =>
    invokePolygons({ data, time, type, container })
  );

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

const container = document.querySelector(".content");

animateImage({
  image,
  params: preParams,
  time: 0.55,
  type: "fly",
  container,
});

setTimeout(
  () =>
    animateImage({ image, params, time: 0.55, type: "fly", container }).then(
      () =>
        (image.style =
          "opacity: 1; transition: opacity 2s cubic-bezier(.7,.3,0,1); z-index: 2; position: relative;")
    ),
  100
);
