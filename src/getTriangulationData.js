import triangulate from "triangulate-image";

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

export default getTriangulationData;
