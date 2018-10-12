var leftright;
leftright = 0;


// When the user clicks on the button, scroll to the other side of the document
function scrollSide() {
    leftright = (leftright+1) % 2;
    document.body.scrollLeft = leftright*10000; // For Safari
    document.documentElement.scrollLeft = leftright*10000; // For Chrome, Firefox, IE and Opera
}
s
