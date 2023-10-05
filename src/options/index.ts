const input = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

saveBtn!.addEventListener("click", () => {
  console.log((input! as HTMLInputElement).value);
  chrome.storage.sync.set(
    {
      name: (input! as HTMLInputElement).value,
    },
    () => {
      console.log("Name is set to: ", (input! as HTMLInputElement).value);
    }
  );
});

chrome.storage.sync.get(["name"], (res) => {
  (input! as HTMLInputElement).value = res.name;
});
