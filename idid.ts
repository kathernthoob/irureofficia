// Assuming the element with ID 'year' exists in the DOM and is a span element.
// This code safely retrieves the element and types it as HTMLSpanElement.

// Retrieve the 'year' element with proper null checking.
const yearElement = document.getElementById('year');

// Check if the element is truly an HTMLSpanElement and exists in the DOM.
if (yearElement instanceof HTMLSpanElement) {
  // Now 'yearElement' is typed as HTMLSpanElement and can be safely used.
  // You can access properties specific to HTMLSpanElement here.
  // For example, setting the text content of the 'year' span element:
  yearElement.textContent = '2024'; // Example year value.
} else {
  // Handle the case where the element is not found or not a span element.
  console.error('The element with ID "year" is either not a span or does not exist in the DOM.');
}
