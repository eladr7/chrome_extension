const timeElement = document.getElementById("time");
const timer = document.getElementById("timer");
const userName = document.getElementById("name");
userName!.textContent = "Your name is: hihihi";

document.addEventListener("DOMContentLoaded", function () {
  const timeElement = document.getElementById("time");
  const timer = document.getElementById("timer");
  const userName = document.getElementById("name");
  userName!.textContent = "Your name is: hihihi";
  userName!.classList.add("text-primary");
});

// const updateTimeElements = () => {
//   const time = new Date().toLocaleTimeString();
//   timeElement!.textContent = `The time is: ${time}`;

//   chrome.storage.local.get(["timer"], (res) => {
//     timer.innerText = `The time is: ${res.timer ?? 0} seconds`;
//   });
// };

// updateTimeElements();
// setInterval(() => {
//   updateTimeElements();
// }, 1000);

// chrome.storage.sync.get(["name"], (res) => {
//   userName.textContent = `Your name is: ${res.name ?? "???"}`;
// });

// chrome.action.setBadgeText(
//   {
//     text: "Time",
//   },
//   () => {
//     console.log("Set the badge text");
//   }
// );
