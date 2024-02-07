const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "blank",
  },
  children: "click here",
};

customRender(reactElement, mainContainer);

function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  mainContainer.append(domElement);
}
