import React, { useCallback } from 'react';

const scrollToAnchor = () => {
  // the id of the element is the part after # in the url
  const id = window.location.toString().split('#')[1];
  const element = document.getElementById(id);

  // if we can find the element, try to scroll to it
  if (element) {
    element.scrollIntoView();
  }  
}

const locationHref = location.href;
const useScrollToAnchor = useCallback(() => {
  document.addEventListener('DOMContentLoaded', scrollToAnchor);
}, [locationHref]);

export default useScrollToAnchor;
