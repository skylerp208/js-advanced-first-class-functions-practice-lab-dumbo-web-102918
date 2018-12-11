// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};
const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = function (drivers) {
  // debugger
  revenues = drivers.map((drivers) => drivers.revenue)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return revenues.reduce(reducer)
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
