function updateDate() {
  const now = new Date();

  //Current Date.
  const day = now.toLocaleDateString(undefined, { weekday: "long" });
  document.getElementById("day").innerText = day;
  const date = now.getDate();
  document.getElementById("date").innerText = date;
  const month = now.toLocaleDateString(undefined, { month: "short" });
  document.getElementById("month").innerText = month;
  const year = now.getFullYear();
  document.getElementById("year").innerText = year;
}
 //Current time
 const now = new Date();
 const hours = now.getHours();
 const minutes = now.getMinutes().toString().padStart(2, "0");
 const seconds = now.getSeconds().toString().padStart(2, "0");
 const amPm = hours >= 12 ? "PM" : "AM";
 const formattedTime = `${hours % 12 || 12}:${minutes}:${seconds} ${amPm}`;

updateDate();
