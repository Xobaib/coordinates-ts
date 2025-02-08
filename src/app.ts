import axios from "axios";

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

const form = document.querySelector("form") as HTMLFormElement;
const addressInput = document.querySelector("#address") as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyA7N3VwrF0vDKIIiSD-Qk1fvxZ4qERGzRA";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        new Error("Could not fetch location!");
      }
      const coordinates = res.data.results[0].geometry.location;
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
