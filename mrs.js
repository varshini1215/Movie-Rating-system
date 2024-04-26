// handleRating that takes an event as a parameter. This function is designed to handle user interactions, 
// particularly when they click on a star rating element

function handleRating(event) {
  // if (event.target.tagName === 'SPAN') {: This conditional statement checks if the clicked element is a <span> tag. 
  // This is important because the function should only respond to clicks on the individual stars (assumed to be represented by <span> elements).
if (event.target.tagName === 'SPAN') {
  // const clickedIndex = Array.from(event.target.parentNode.children).indexOf(event.target);:
  // This line calculates the index of the clicked star within its parent container. It uses the Array.from method 
  // to convert the HTMLCollection of child elements into an array, and then indexOf to find the index of the clicked star.
    const clickedIndex = Array.from(event.target.parentNode.children).indexOf(event.target);

    // It changes the color of stars from the beginning up to the clicked index to "deeppink", effectively highlighting the selected stars.
    for (let i = 0; i <= clickedIndex; i++) {
        event.target.parentNode.children[i].style.color = "deeppink";
    }

    // Reset the color of unselected stars. It sets the color of stars from the clicked index onwards to 'grey', 
   //  making them appear unselected.
    for (let i = clickedIndex + 1; i < event.target.parentNode.children.length; i++) {
        event.target.parentNode.children[i].style.color = 'grey';
    }

    // You can now use the 'clickedIndex' variable to send the rating to your server or perform other actions.
    // For simplicity, let's just log the rating to the console.
    console.log('Rating:', clickedIndex + 1);
}
}