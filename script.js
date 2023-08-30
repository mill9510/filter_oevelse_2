const ulPointer = document.querySelector("ul");
const header = "  <li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>";
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", btn_klik);
});

function btn_klik(evt) {
  console.log(evt.target.dataset.filter);

  if (evt.target.dataset.filter === "all") {
    showTheseVehicles(vehicles);
  } else {
    let whatFilterFunc;
    if (evt.target.dataset.filter === "electric") {
      whatFilterFunc = onlyElectricVehicles;
    } else if (evt.target.dataset.filter === "ownedByJonas") {
      whatFilterFunc = electricOwnedByJonas;
    } else if (evt.target.dataset.filter === "bigger") {
      whatFilterFunc = onlyTwoSeatsFilter;
    } else if (evt.target.dataset.filter === "vehiclesFueledByFood") {
      whatFilterFunc = onlyFueledByFoodFilter;
    }
    showTheseVehicles(vehicles.filter(whatFilterFunc));
  }
}

const vehiclesThatAreEletric = vehicles.filter(onlyElectricVehicles);

function onlyElectricVehicles(vehicle) {
  if (vehicle.isElectric) {
    return true;
  } else {
    return false;
  }
}

const vehiclesWMoreThan2Seats = vehicles.filter(onlyTwoSeatsFilter);

function onlyTwoSeatsFilter(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  } else {
    return false;
  }
}
const vehiclesOwnedByJ = vehicles.filter(electricOwnedByJonas);

function electricOwnedByJonas(vehicle) {
  if (vehicle.isElectric && vehicle.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}

const vehiclesFueledByFood = vehicles.filter(onlyFueledByFoodFilter);

function onlyFueledByFoodFilter(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 2) {
    return true;
  } else {
    return false;
  }
}

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  ulPointer.innerHTML = "";
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;

    if (each.fuel === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    }

    ulPointer.innerHTML += `<li>${each.passengers}</li>`;

    if (each.stops === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.stops}</li>`;
    }

    if (each.ownedBy === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    }

    if (each.isElectric === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    }

    if (each.tandem === undefined) {
      ulPointer.innerHTML += `<li>-</li>`;
    } else {
      ulPointer.innerHTML += `<li>${each.tandem}</li>`;
    }
  });
}
