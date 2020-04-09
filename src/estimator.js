// sample data that can change according to input
const data = {   
    region: {       
      name: "Africa",       
      avgAge: 19.7,       
      avgDailyIncomeInUSD: 5,       
      avgDailyIncomePopulation: 0.71     },   
    periodType: "days",   
    timeToElapse: 58,   
    reportedCases: 674,   
    population: 66622705,   
    totalHospitalBeds: 1380614 
  }
  
  
  // function to normalise the duration input to days
  const normalisedDuration = (timeToElapse, periodType) => {
      switch (periodType) {
        case 'weeks':
          return timeToElapse * 7;
        case 'months':
          return timeToElapse * 30;
        default:
          return timeToElapse;
      }
    };
    
   
    // my estimator function
const covid19ImpactEstimator = (data) =>{
    
// data structure of the output from the estimator algorithm
const output = {
    data,
    impact: {},
    severeImpact: {}
  };

  // normalise all durations to days
  const days = normalisedDuration(data.timeToElapse, data.periodType);


  // estimating currently infected cases
  output.impact.currentlyInfected = data.reportedCases * 10;
  output.severeImpact.currentlyInfected = data.reportedCases * 50;


  // estimating infectionsByRequestedTime
  output.impact.infectionsByRequestedTime = output.impact.currentlyInfected * (2 ** (days / 3));
  output.severeImpact.infectionsByRequestedTime = output.severeImpact.currentlyInfected * (2 ** (days / 3));
 
  //return the new output data structure.
  return output;
};

export default covid19ImpactEstimator;
