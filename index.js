const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name){
    let matchingDrivers = array.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return matchingDrivers;
    }

  function fuzzyMatch(array, letters){
      let matchingDrivers = array.filter(driver => driver.slice(0, 2) === letters)
      return matchingDrivers;
  }  

  function matchName(array, par){
    let foundDrivers = array.filter(driver => driver.name === par)
    return foundDrivers;
  }