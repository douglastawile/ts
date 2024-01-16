type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type AirPlane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
};

const airplane: AirPlane = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Food Ltd",
    address: "484, Some street, New York",
    phone: 1452125,
  },
};
