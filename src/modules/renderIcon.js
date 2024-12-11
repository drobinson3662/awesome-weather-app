export const renderIcon = (iconName, div, placement) => {
  const iconDiv = document.createElement("div");
  const img = document.createElement("img");
  iconDiv.classList.add(placement);

  // Dynamically import the SVG file using Webpack's import() method
  import(`../svg/${iconName}.svg`)
    .then((module) => {
      // Get the URL of the SVG file from the imported module
      const iconPath = module.default; // This is the actual path to the SVG file after Webpack processes it

      // Set the src to the processed SVG path
      img.src = iconPath;
      img.alt = `${iconName} icon`;

      // Set the size as needed
      img.setAttribute("width", "50");
      img.setAttribute("height", "50");

      // Append the image to the parent div
      iconDiv.appendChild(img);
      div.appendChild(iconDiv);
    })
    .catch((error) => {
      console.error("Error loading icon:", error);
    });
};
