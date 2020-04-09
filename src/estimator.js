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
      return {
        data: {
          region:{
          name: 'Africa',
          avgAge: 19.7,
          avgDailyIncomeInUSD: 5,
          avgDailyIncomePopulatio: 0.71
        },
        periodType: 'Days',
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614
      } ,
        impact: {
          currentlyInfected:data.reportedCases * 10,
          infectionsByRequestedTime:impact.currentlyInfected * (2 ** (days / 3))
        },
        severeImpact: {
          currentlyInfected:data.reportedCases * 50,
          infectionsByRequestedTime:severeImpact.currentlyInfected * (2 ** (days / 3))
        }
      };
    };
    export default covid19ImpactEstimator;