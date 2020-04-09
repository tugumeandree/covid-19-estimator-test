const covid19ImpactEstimator = (data) => {

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

    const days = normalisedDuration(data.timeToElapse, data.periodType);
    const availableBeds = 0.35 * totalHospitalbeds;
    const input = {
        region: {
                 name: "Africa",
                 avgAge: 19.7,
                 avgDailyIncomeInUSD: 5,
                 avgDailyIncomePopulation: 0.71
                },
         periodType: "days",
         timeToElapse: 58,
         reportedCases: 674,
         population: 66622705,
         totalHospitalBeds: 1380614
       }; 

       const bestCaseEstimation = {
        currentlyInfected : data.reportedCases * 10,
        infectionsByRequestedTime : impact.currentlyInfected * (2 ** (days / 3)),
        severeCasesByRequestedTime : 0.15 * impact.infectionsByRequestedTime,
        hospitalBedsByRequestedTime : impact.severeCasesByRequestedTime - availableBeds,
        casesForICUByRequestedTime : 0.05 * impact.infectionsByRequestedTime,
        casesForVentilatorsByRequestedTime : 0.02 * impact.infectionsByRequestedTime,
        ddollarsInFlight : impact.infectionsByRequestedTime * region.avgDailyIncomeInUSD * days
      };
       const severeCaseEstimation ={
        currentlyInfected : data.reportedCases * 50,
        infectionsByRequestedTime : severeImpact.currentlyInfected * (2 ** (days / 3)),
        severeCasesByRequestedTime : 0.15 * severeImpact.infectionsByRequestedTime,
        hospitalBedsByRequestedTime : severeImpact.severeCasesByRequestedTime - availabeleBeds,
        casesForICUByRequestedTime:0.05 * severImpact.infectionsByRequestedTime,
        casesForVentilatorsByRequestedTime : 0.02 * severeImpact.infectionsByRequestedTime,
        dollarsInFlight : severeImpact.infectionsByRequestedTime * region.avgDailyIncomeInUSD * days
      };

      return {
        data:input,
        impact: bestCaseEstimation,
        severeImpact:severeCaseEstimation
      };
    };
    export default covid19ImpactEstimator;