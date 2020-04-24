const animationTypes = {
  fade: {
    pre: ({ duration, color, points }) => `
      clip-path: polygon(${points});
      background: ${color};
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      position: absolute;
      opacity: 0;
      transition: opacity ${duration}s cubic-bezier(.7,.3,0,1);`,
    post: () => "opacity: 1;",
  },
  fly: {
    pre: ({ duration, points }) => {
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
        transition: -webkit-clip-path ${duration}s cubic-bezier(.7, .3, 0, 1), clip-path ${duration}s cubic-bezier(.7, .3, 0, 1), background-color ${duration}s cubic-bezier(.7, .3, 0, 1);`;
    },
    post: ({ points, color }) => `
      clip-path: polygon(${points});
      background-color: ${color};`,
  },
};

const createPolgyon = ({
  points,
  color,
  idx,
  type = "fade",
  duration = 0.5,
}) => {
  const polygon = document.createElement("div");
  polygon.classList.add("polygon");

  polygon.style = animationTypes[type].pre({ duration, color, points });

  const promise = new Promise((resolve) =>
    setTimeout(() => {
      polygon.style =
        polygon.getAttribute("style") +
        animationTypes[type].post({ duration, color, points });
      resolve(polygon);
    }, (100 * idx) / 20)
  );

  return { polygon, promise };
};

const invokePolygons = ({ data, animation, container }) =>
  Promise.all(
    data.polygons.map((polygon, idx) => {
      const { polygon: polygonEl, promise } = createPolgyon({
        ...polygon,
        idx,
        duration: animation.duration,
        type: animation.type,
      });
      container.append(polygonEl);
      return promise;
    })
  );

export default invokePolygons;
