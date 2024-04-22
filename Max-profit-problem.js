function maxProfit(timeUnit) {
    // Estimated Earnings 
    const theatreEarning = 1500;
    const pubEarning = 1000;
    const commercialParkEarning = 3000;

    // Estimated Building Units 
    const buildingTimes = [5, 4, 10];
    const buildingEarnings = [theatreEarning, pubEarning, commercialParkEarning];

    // Maximum Buildings Can be Constructed
    const maxBuildings = [];
    for (let i = 0; i < buildingTimes.length; i++) {
        maxBuildings.push(Math.floor(timeUnit / buildingTimes[i]));
    }

    let maxEarnings = 0;
    let bestSolution = [];

    // Calculations
    for (let theatres = 0; theatres <= maxBuildings[0]; theatres++) {
        for (let pubs = 0; pubs <= maxBuildings[1]; pubs++) {
            for (let commercialParks = 0; commercialParks <= maxBuildings[2]; commercialParks++) {
                const totalUnits = theatres * buildingTimes[0] + pubs * buildingTimes[1] + commercialParks * buildingTimes[2];
                if (totalUnits <= timeUnit) {
                    const earnings = theatres * theatreEarning + pubs * pubEarning + commercialParks * commercialParkEarning;
                    if (earnings > maxEarnings) {
                        maxEarnings = earnings;
                        bestSolution = [theatres, pubs, commercialParks];
                    }
                }
            }
        }
    }

    // Calculate the remaining time units and the remaining earnings
    const remainingUnits = timeUnit - (bestSolution[0] * buildingTimes[0] + bestSolution[1] * buildingTimes[1] + bestSolution[2] * buildingTimes[2]);
    const remainingEarnings = remainingUnits * theatreEarning;

    const output = {
        maxEarnings,
        bestSolution,
        remainingUnits,
        remainingEarnings
    };

    return output;
}

// Test cases Inputs
const testCases = [
    { timeUnit: 7 },
    { timeUnit: 8 },
    { timeUnit: 13 }
];

function GetSolution() {
    const timeUnit = document.getElementById('input-box').value;
    const resultsContainer = document.getElementById('resultsvalue');

    if (timeUnit) {
        const { maxEarnings, bestSolution, remainingUnits, remainingEarnings } = maxProfit(timeUnit);
        resultsContainer.innerHTML = `
            <p style="font-size: 20px; font-weight: bold;">Time Unit: <span style=" font-size: 25px; color: blue; font-weight: bold;">${timeUnit}</span></p>
            <p style="font-size: 20px; font-weight: bold;">Maximum Earnings: <span style=" font-size: 25px; color: blue; font-weight: bold;">$${maxEarnings}</span></p>
            <p style="font-size: 20px; font-weight: bold;">Solution: <span style=" font-size: 25px; color: blue; font-weight: bold;">${bestSolution[0]} <span style=" font-size: 20px; color: red; font-weight: bold;">Theatres</span>, ${bestSolution[1]} <span style=" font-size: 20px; color: red; font-weight: bold;">Pubs</span>, ${bestSolution[2]} <span style=" font-size: 20px; color: red; font-weight: bold;">Commercial Parkings</span></span></p>
            <p style="font-size: 20px; font-weight: bold;">Profitable Earnings: <span style=" font-size: 25px; color: blue; font-weight: bold;">$${remainingEarnings}</span></p>
        `;
    } else {
        resultsContainer.innerHTML = '<p>Please Enter the Units</p>';
    }
}

