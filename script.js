// Function to display the menu items dynamically
function showMenu() {
  const menuItems = [
    'Chocolate Milkshake - $5',
    'Vanilla Milkshake - $5',
    'Strawberry Milkshake - $5',
    'Oreo Milkshake - $6',
    'Caramel Milkshake - $6',
    // Add more items as needed
  ];

  const menuContainer = document.querySelector('#menu .menu-items');
  menuContainer.innerHTML = '';

  menuItems.forEach(item => {
    const menuItem = document.createElement('p');
    menuItem.textContent = item;
    menuContainer.appendChild(menuItem);
  });
}

// Functionality for photo gallery (adding images dynamically)
function loadGallery() {
  const galleryImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];

  const galleryContainer = document.querySelector('#gallery .photo-gallery');
  galleryContainer.innerHTML = '';

  galleryImages.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    galleryContainer.appendChild(imgElement);
  });
}

// Event listener for clicking on 'About' section
document.getElementById('about-section').addEventListener('click', function(event) {
  const aboutContent = document.querySelector('#about .about-content');

  // Toggle the visibility of 'About' content
  if (aboutContent.style.display === 'none' || !aboutContent.style.display) {
    aboutContent.style.display = 'block';
  } else {
    aboutContent.style.display = 'none';
  }
});

// Event listener for clicking on 'Contact' section
document.getElementById('contact-section').addEventListener('click', function(event) {
  const contactContent = document.querySelector('#contact .contact-form');

  // Toggle the visibility of 'Contact' content
  if (contactContent.style.display === 'none' || !contactContent.style.display) {
    contactContent.style.display = 'block';
  } else {
    contactContent.style.display = 'none';
  }
});

// Event listener for submitting the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Add functionality to handle form submission (e.g., sending data to a server)
});

// Functionality to add items to the cart
const cart = []; // Array to store cart items

function addToCart(item) {
  cart.push(item);
  console.log(`Added ${item} to cart.`);
}

// Event listener for clicking on 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    const itemName = event.target.dataset.itemName;
    addToCart(itemName);
  });
});
