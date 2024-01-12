function findTheOldest(array){
    let thisYear = new Date().getFullYear();

        array.forEach((item) => {
            if (item.yearOfDeath === undefined){
                item.yearOfDeath = thisYear;
            }
        });
        
    let years = array.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return years[0];
  }

// Do not edit below this line
module.exports = findTheOldest;
