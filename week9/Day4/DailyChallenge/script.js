const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchButton = document.getElementById("switch");
fetchCurrencies();
calculateTotal();

document.getElementById("input").addEventListener("keyup", calculateTotal);
fromSelect.addEventListener("change", calculateTotal);
toSelect.addEventListener("change", calculateTotal);
switchButton.addEventListener("click", switchCurrencies);

function switchCurrencies() {
  [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
  calculateTotal();
  // OR
  //   const fromValue = fromSelect.value;
  //   const toValue = toSelect.value;
  //   fromSelect.value = toValue;
  //   toSelectValue = fromValue;
}

function fetchCurrencies() {
  const url =
    "https://v6.exchangerate-api.com/v6/4484097885e5516e9bd1ee64/codes";
  fetch(url)
    .then((res) => res.json())
    .then((res) => populateDropdown(res.supported_codes))
    .catch((error) => console.error(error));
}

function populateDropdown(codes) {
  const entries = Object.entries(codes);

  for (const entry of entries) {
    const [index, [code, name]] = entry;
    const option = document.createElement("option");
    const option2 = document.createElement("option");
    option.innerText = code + " , " + name;
    option2.innerText = code + " , " + name;
    option.value = code;
    option2.value = code;
    toSelect.appendChild(option);
    fromSelect.appendChild(option2);

    // OR
    // const currency = entry[0];
    // console.log("currency:", currency);
    // const rate = entry[1];
    // console.log("rate:", rate);
  }
}

async function calculateTotal() {
  const curr1 = fromSelect.value;
  const curr2 = toSelect.value;
  const input = document.getElementById("input");
  const summary = document.getElementById("summary");

  const url = `https://v6.exchangerate-api.com/v6/4484097885e5516e9bd1ee64/pair/${curr1}/${curr2}`;
  try {
    const res = await fetch(url);
    const resJson = await res.json();
    const rate = resJson.conversion_rate;
    const amount = Number(input.value);
    const total = amount * rate;
    summary.innerText = `${amount} ${curr1} = ${total} ${curr2}`;
  } catch (error) {
    console.error(error);
  }
}
