const form = document.querySelector("form") as HTMLFormElement;
const addressInput = document.querySelector("#address") as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  console.log(enteredAddress);

  // send this to Google's API!
}

form.addEventListener("submit", searchAddressHandler);
