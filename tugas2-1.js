function calculateArrivalTime(startTime, travelSeconds) {
  // Pisahkan jam, menit, dan detik dari waktu mulai
  let [hours, minutes, seconds] = startTime.split(":").map(Number);

  // Konversi waktu mulai ke dalam total detik
  let totalSeconds = hours * 3600 + minutes * 60 + seconds + travelSeconds;

  // Hitung jam, menit, dan detik baru setelah perjalanan
  let newHours = Math.floor(totalSeconds / 3600) % 24;
  let newMinutes = Math.floor((totalSeconds % 3600) / 60);
  let newSeconds = totalSeconds % 60;

  // Format hasil agar selalu 2 digit
  newHours = String(newHours).padStart(2, "0");
  newMinutes = String(newMinutes).padStart(2, "0");
  newSeconds = String(newSeconds).padStart(2, "0");

  return `${newHours}:${newMinutes}:${newSeconds}`;
}

// Contoh penggunaan
let startTime = "08:52:45";
let travelSeconds = 5000;
let arrivalTime = calculateArrivalTime(startTime, travelSeconds);
console.log("Waktu tiba: ", arrivalTime);
