export const scrollToAnchor = () => {
  const location = window.location;
  // the id of the element is the part after # in the url
  const id = location.toString().split('#')[1];

  const element = document.getElementById(id);

  // if we can find the element, try to scroll to it
  if (element) {
    element.scrollIntoView();
  }
};
