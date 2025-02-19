function calculateArrivalTime(startTime, travelSeconds) {

  let [hours, minutes, seconds] = startTime.split(":").map(Number);

  let totalSeconds = hours * 3600 + minutes * 60 + seconds + travelSeconds;

  let newHours = Math.floor(totalSeconds / 3600) % 24;
  let newMinutes = Math.floor((totalSeconds % 3600) / 60);
  let newSeconds = totalSeconds % 60;

  newHours = String(newHours).padStart(2, "0");
  newMinutes = String(newMinutes).padStart(2, "0");
  newSeconds = String(newSeconds).padStart(2, "0");

  return `${newHours}:${newMinutes}:${newSeconds}`;
}

let startTime = "08:52:45";
let travelSeconds = 5000;
let arrivalTime = calculateArrivalTime(startTime, travelSeconds);
console.log("Waktu tiba: ", arrivalTime);
