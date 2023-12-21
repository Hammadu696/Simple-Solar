

const intersectionCallback = (entries) => {
    for (const entry of entries) { 
        if (entry.isIntersecting) { 
            entry.target.classList.add('animatedcard'); 
        }
    }
}


const observer = new IntersectionObserver(intersectionCallback);


const items = document.querySelectorAll('.anime');
for (const item of items) {
    observer.observe(item);
    console.log("observ");
}



// animation for hover on 3 images for width change
// Get all service items
const serviceItems = document.querySelectorAll('.service-item');

// Add event listener to each service item
serviceItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    // Expand the hovered service item
    item.classList.add('active');
    
    // Shrink the other service items
    serviceItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});
