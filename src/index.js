import triangulate from "triangulate-image";

const params = {
  blur: 0,
  vertexCount: 200,
  accuracy: 1,
  transparentColor: true,
};
const image = document.querySelector(".animated-img");
image.style = "opacity: 0;";

const createElementFromHTML = (htmlString) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstElementChild;
};

const createPolgyon = ({ points, color }, time, idx) => {
  const polygon = document.createElement("div");
  polygon.classList.add("polygon");

  polygon.style = `
    clip-path: polygon(${points});
    background: ${color};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    opacity: 0;
    transition: opacity ${time}s cubic-bezier(.7,.3,0,1);`;

  const promise = new Promise((resolve) =>
    setTimeout(() => {
      polygon.style =
        polygon.getAttribute("style") +
        `
        opacity: 1;
      `;
      resolve(polygon);
    }, (100 * idx) / 100)
  );

  return { polygon, promise };
};

const animateImage = (image, params, time = 5) =>
  triangulate(params)
    .fromImage(image)
    .toSVG() // checkout toData method (probably better)
    .then(createElementFromHTML)
    .then((svgEl) => ({
      height: svgEl.getAttribute("height"),
      width: svgEl.getAttribute("width"),
      polygons: svgEl.querySelectorAll("polygon"),
    }))
    .then((svg) => ({
      ...svg,
      opacity: 1,
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
    }))
    .then((svg) =>
      Promise.all(
        svg.polygons.map((polygon, idx) => {
          const { polygon: polygonEl, promise } = createPolgyon(
            polygon,
            time,
            idx
          );
          document.querySelector(".content").append(polygonEl);
          return promise;
        })
      )
    );

const preParams = {
  ...params,
  vertexCount: 100,
};

animateImage(image, { ...preParams, blur: 10, vertexCount: 30 }, 1)
  .then(() => animateImage(image, preParams, 2))
  .then(() => animateImage(image, params, 3))
  .then(
    () =>
      (image.style =
        "opacity: 1; transition: opacity 2s 1s cubic-bezier(.7,.3,0,1); z-index: 2; position: relative;")
  );
