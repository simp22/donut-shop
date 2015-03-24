function FranchiseSummarized (locFranchise, totalHrsOpen, minCust_perHr, maxCust_perHr, avgNumDonuts_perCust, avgNumDonuts_perHour, totalDonuts_perDay) {
	this.locFranchise = locFranchise;
	//calc hrs of operation based on 24-hr day
	this.totalHrsOpen = totalHrsOpen;
	this.minCust_perHr = minCust_perHr;
	this.maxCust_perHr = maxCust_perHr;
	this.avgNumDonuts_perCust = avgNumDonuts_perCust;
	this.avgNumDonuts_perHour = avgNumDonuts_perHour;
	this.totalDonuts_perDay = totalDonuts_perDay;
}

var downtown = new FranchiseSummarized('Downtown', 11, 8, 43, 4.50, 16, 181);
var capitolHill = new FranchiseSummarized('Capitol Hill', 11, 4, 37, 2.00, 32, 354);
var southLakeUnion = new FranchiseSummarized('South Lake Union', 11, 9, 23, 6.33, 100, 1101);
var wedgewood = new FranchiseSummarized('Wedgewood', 11, 2, 28, 1.25, 19, 212);
var ballard = new FranchiseSummarized('Ballard', 11, 8, 58, 3.75, 126, 1393);

function getPropToArray(obj) {
	var arr = [];
	for (var key in obj) {
	  if (obj.hasOwnProperty(key)) {
	    arr.push(obj[key]);  
	  }
	}
	return arr;
}
var arrDowntown = getPropToArray(downtown);
var arrCapitolHill = getPropToArray(capitolHill);
var arrSouthLakeUnion = getPropToArray(southLakeUnion);
var arrWedgewood = getPropToArray(wedgewood);
var arrBallard = getPropToArray(ballard);

console.log(arrSouthLakeUnion);

// function FranchiseDetailed (hr1, hr2, hr3, hr4, hr5, hr6, hr7, hr8, hr9, hr10, hr11)
// 	this.hr1 = hr1;
// 	this.hr2 = hr2;
// 	this.hr3 = hr3;
// 	this.hr4 = hr4;
// 	this.hr5 = hr5;
// 	this.hr6 = hr6;
// 	this.hr7 = hr7;
// 	this.hr8 = hr8;
// 	this.hr0 = hr9;
// 	this.hr10 = hr10;
// 	this.hr11 = hr11;





