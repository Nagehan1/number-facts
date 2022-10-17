
let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"],
  };
  
  let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"],
  };
  
  let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"],
  };
  
  let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"],
  };
  
  let travelDestinations = [
    destination1,
    destination2,
    destination3,
    destination4,
  ];
  
  /*
  DO NOT EDIT ANYTHING ABOVE THIS LINE
  WRITE YOUR CODE BELOW
  */

  let destinationNameReachableByFerry = destination.inculedes ("ferry")
  let namedestinationNameReachableByFerry  =travelDestinations.filter()
                                             travelDestinations.map()
 
  let destinationNamesMoreThan300KmsAwayByTrain = destinations.Name ((destination)=>destination.distanceKms>300 && destination.transportations.inculedes("train") )
  
  

  /*    Filter the travelDestinations array to return all destination names reachable within 500 kms.
    Find a destination name reachable by ferry.
    Print in the console all the destination names more than 300 kms far away and reachable by train.*/