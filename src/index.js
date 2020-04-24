import triangulate from "triangulate-image";

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

export const getTriangulationData = ({ image, params }) =>
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

export const invokePolygons = ({ data, time, type, container }) =>
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

export const animateImage = ({ image, params, time = 5, type, container }) =>
  getTriangulationData({ image, params }).then((data) =>
    invokePolygons({ data, time, type, container })
  );
