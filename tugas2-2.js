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

function calculateTravelTime(startTime, endTime) {
  let [startHours, startMinutes, startSeconds] = startTime
    .split(":")
    .map(Number);
  let [endHours, endMinutes, endSeconds] = endTime.split(":").map(Number);

  let startTotalSeconds = startHours * 3600 + startMinutes * 60 + startSeconds;
  let endTotalSeconds = endHours * 3600 + endMinutes * 60 + endSeconds;

  let travelSeconds = endTotalSeconds - startTotalSeconds;
  if (travelSeconds < 0) travelSeconds += 24 * 3600;

  let travelHours = Math.floor(travelSeconds / 3600);
  let travelMinutes = Math.floor((travelSeconds % 3600) / 60);
  let travelSecondsRemaining = travelSeconds % 60;

  return `${travelHours} jam, ${travelMinutes} menit, ${travelSecondsRemaining} detik`;
}

let startTime = "08:52:45";
let travelSeconds = 5000;
let arrivalTime = calculateArrivalTime(startTime, travelSeconds);
console.log("Waktu tiba: ", arrivalTime);

let endTime = "12:15:10";
let travelDuration = calculateTravelTime(startTime, endTime);
console.log("Waktu yang dihabiskan: ", travelDuration);
