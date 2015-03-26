//get Franchise data from calculations.js
var getFranchise = getFranchise();
var downtown = getFranchise[0];
var capitolHill = getFranchise[1];
var southLakeUnion = getFranchise[2];
var wedgewood = getFranchise[3];
var ballard = getFranchise[4];

//-------------------------
//settings
//-------------------------

var $submit = $('button');
var $arraySubmit = [];
var $locSelected = $('#locSelected').val();
var $minCust = $('input:text').val();
$submit.on('click', function() {
  console.log($locSelected);
  console.log($minCust);
});

//-------------------------
//detailed data
//-------------------------

//update detailed | custPerHr: downtown
$('#detailedDowntown_custPerHr td:nth-of-type(1)').text(downtown.custPerHr()[0]);
$('#detailedDowntown_custPerHr td:nth-of-type(2)').text(downtown.custPerHr()[1]);
$('#detailedDowntown_custPerHr td:nth-of-type(3)').text(downtown.custPerHr()[2]);
$('#detailedDowntown_custPerHr td:nth-of-type(4)').text(downtown.custPerHr()[3]);
$('#detailedDowntown_custPerHr td:nth-of-type(5)').text(downtown.custPerHr()[4]);
$('#detailedDowntown_custPerHr td:nth-of-type(6)').text(downtown.custPerHr()[5]);
$('#detailedDowntown_custPerHr td:nth-of-type(7)').text(downtown.custPerHr()[6]);
$('#detailedDowntown_custPerHr td:nth-of-type(8)').text(downtown.custPerHr()[7]);
$('#detailedDowntown_custPerHr td:nth-of-type(9)').text(downtown.custPerHr()[8]);
$('#detailedDowntown_custPerHr td:nth-of-type(10)').text(downtown.custPerHr()[9]);
$('#detailedDowntown_custPerHr td:nth-of-type(11)').text(downtown.custPerHr()[10]);

//update detailed data | donutsPerHr: downtown
$('#detailedDowntown_donutsPerHr td:nth-of-type(1)').text(downtown.donutsPerHr()[0]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(2)').text(downtown.donutsPerHr()[1]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(3)').text(downtown.donutsPerHr()[2]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(4)').text(downtown.donutsPerHr()[3]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(5)').text(downtown.donutsPerHr()[4]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(6)').text(downtown.donutsPerHr()[5]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(7)').text(downtown.donutsPerHr()[6]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(8)').text(downtown.donutsPerHr()[7]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(9)').text(downtown.donutsPerHr()[8]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(10)').text(downtown.donutsPerHr()[9]);
$('#detailedDowntown_donutsPerHr td:nth-of-type(11)').text(downtown.donutsPerHr()[10]);

//update detailed | custPerHr: capitolHill
$('#detailedCapitolHill_custPerHr td:nth-of-type(1)').text(capitolHill.custPerHr()[0]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(2)').text(capitolHill.custPerHr()[1]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(3)').text(capitolHill.custPerHr()[2]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(4)').text(capitolHill.custPerHr()[3]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(5)').text(capitolHill.custPerHr()[4]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(6)').text(capitolHill.custPerHr()[5]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(7)').text(capitolHill.custPerHr()[6]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(8)').text(capitolHill.custPerHr()[7]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(9)').text(capitolHill.custPerHr()[8]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(10)').text(capitolHill.custPerHr()[9]);
$('#detailedCapitolHill_custPerHr td:nth-of-type(11)').text(capitolHill.custPerHr()[10]);

//update detailed data | donutsPerHr: capitolHill
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(1)').text(capitolHill.donutsPerHr()[0]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(2)').text(capitolHill.donutsPerHr()[1]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(3)').text(capitolHill.donutsPerHr()[2]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(4)').text(capitolHill.donutsPerHr()[3]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(5)').text(capitolHill.donutsPerHr()[4]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(6)').text(capitolHill.donutsPerHr()[5]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(7)').text(capitolHill.donutsPerHr()[6]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(8)').text(capitolHill.donutsPerHr()[7]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(9)').text(capitolHill.donutsPerHr()[8]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(10)').text(capitolHill.donutsPerHr()[9]);
$('#detailedCapitolHill_donutsPerHr td:nth-of-type(11)').text(capitolHill.donutsPerHr()[10]);

//update detailed | custPerHr: southLakeUnion
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(1)').text(southLakeUnion.custPerHr()[0]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(2)').text(southLakeUnion.custPerHr()[1]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(3)').text(southLakeUnion.custPerHr()[2]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(4)').text(southLakeUnion.custPerHr()[3]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(5)').text(southLakeUnion.custPerHr()[4]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(6)').text(southLakeUnion.custPerHr()[5]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(7)').text(southLakeUnion.custPerHr()[6]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(8)').text(southLakeUnion.custPerHr()[7]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(9)').text(southLakeUnion.custPerHr()[8]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(10)').text(southLakeUnion.custPerHr()[9]);
$('#detailedSouthLakeUnion_custPerHr td:nth-of-type(11)').text(southLakeUnion.custPerHr()[10]);

//update detailed data | donutsPerHr: southLakeUnion
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(1)').text(southLakeUnion.donutsPerHr()[0]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(2)').text(southLakeUnion.donutsPerHr()[1]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(3)').text(southLakeUnion.donutsPerHr()[2]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(4)').text(southLakeUnion.donutsPerHr()[3]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(5)').text(southLakeUnion.donutsPerHr()[4]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(6)').text(southLakeUnion.donutsPerHr()[5]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(7)').text(southLakeUnion.donutsPerHr()[6]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(8)').text(southLakeUnion.donutsPerHr()[7]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(9)').text(southLakeUnion.donutsPerHr()[8]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(10)').text(southLakeUnion.donutsPerHr()[9]);
$('#detailedSouthLakeUnion_donutsPerHr td:nth-of-type(11)').text(southLakeUnion.donutsPerHr()[10]);

//update detailed | custPerHr: wedgewood
$('#detailedWedgewood_custPerHr td:nth-of-type(1)').text(wedgewood.custPerHr()[0]);
$('#detailedWedgewood_custPerHr td:nth-of-type(2)').text(wedgewood.custPerHr()[1]);
$('#detailedWedgewood_custPerHr td:nth-of-type(3)').text(wedgewood.custPerHr()[2]);
$('#detailedWedgewood_custPerHr td:nth-of-type(4)').text(wedgewood.custPerHr()[3]);
$('#detailedWedgewood_custPerHr td:nth-of-type(5)').text(wedgewood.custPerHr()[4]);
$('#detailedWedgewood_custPerHr td:nth-of-type(6)').text(wedgewood.custPerHr()[5]);
$('#detailedWedgewood_custPerHr td:nth-of-type(7)').text(wedgewood.custPerHr()[6]);
$('#detailedWedgewood_custPerHr td:nth-of-type(8)').text(wedgewood.custPerHr()[7]);
$('#detailedWedgewood_custPerHr td:nth-of-type(9)').text(wedgewood.custPerHr()[8]);
$('#detailedWedgewood_custPerHr td:nth-of-type(10)').text(wedgewood.custPerHr()[9]);
$('#detailedWedgewood_custPerHr td:nth-of-type(11)').text(wedgewood.custPerHr()[10]);

//update detailed data | donutsPerHr: wedgewood
$('#detailedWedgewood_donutsPerHr td:nth-of-type(1)').text(wedgewood.donutsPerHr()[0]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(2)').text(wedgewood.donutsPerHr()[1]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(3)').text(wedgewood.donutsPerHr()[2]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(4)').text(wedgewood.donutsPerHr()[3]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(5)').text(wedgewood.donutsPerHr()[4]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(6)').text(wedgewood.donutsPerHr()[5]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(7)').text(wedgewood.donutsPerHr()[6]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(8)').text(wedgewood.donutsPerHr()[7]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(9)').text(wedgewood.donutsPerHr()[8]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(10)').text(wedgewood.donutsPerHr()[9]);
$('#detailedWedgewood_donutsPerHr td:nth-of-type(11)').text(wedgewood.donutsPerHr()[10]);

//update detailed | custPerHr: ballard
$('#detailedBallard_custPerHr td:nth-of-type(1)').text(ballard.custPerHr()[0]);
$('#detailedBallard_custPerHr td:nth-of-type(2)').text(ballard.custPerHr()[1]);
$('#detailedBallard_custPerHr td:nth-of-type(3)').text(ballard.custPerHr()[2]);
$('#detailedBallard_custPerHr td:nth-of-type(4)').text(ballard.custPerHr()[3]);
$('#detailedBallard_custPerHr td:nth-of-type(5)').text(ballard.custPerHr()[4]);
$('#detailedBallard_custPerHr td:nth-of-type(6)').text(ballard.custPerHr()[5]);
$('#detailedBallard_custPerHr td:nth-of-type(7)').text(ballard.custPerHr()[6]);
$('#detailedBallard_custPerHr td:nth-of-type(8)').text(ballard.custPerHr()[7]);
$('#detailedBallard_custPerHr td:nth-of-type(9)').text(ballard.custPerHr()[8]);
$('#detailedBallard_custPerHr td:nth-of-type(10)').text(ballard.custPerHr()[9]);
$('#detailedBallard_custPerHr td:nth-of-type(11)').text(ballard.custPerHr()[10]);

//update detailed data | donutsPerHr: ballard
$('#detailedBallard_donutsPerHr td:nth-of-type(1)').text(ballard.donutsPerHr()[0]);
$('#detailedBallard_donutsPerHr td:nth-of-type(2)').text(ballard.donutsPerHr()[1]);
$('#detailedBallard_donutsPerHr td:nth-of-type(3)').text(ballard.donutsPerHr()[2]);
$('#detailedBallard_donutsPerHr td:nth-of-type(4)').text(ballard.donutsPerHr()[3]);
$('#detailedBallard_donutsPerHr td:nth-of-type(5)').text(ballard.donutsPerHr()[4]);
$('#detailedBallard_donutsPerHr td:nth-of-type(6)').text(ballard.donutsPerHr()[5]);
$('#detailedBallard_donutsPerHr td:nth-of-type(7)').text(ballard.donutsPerHr()[6]);
$('#detailedBallard_donutsPerHr td:nth-of-type(8)').text(ballard.donutsPerHr()[7]);
$('#detailedBallard_donutsPerHr td:nth-of-type(9)').text(ballard.donutsPerHr()[8]);
$('#detailedBallard_donutsPerHr td:nth-of-type(10)').text(ballard.donutsPerHr()[9]);
$('#detailedBallard_donutsPerHr td:nth-of-type(11)').text(ballard.donutsPerHr()[10]);

//-------------------------
//summarized data
//-------------------------

//dynamically change total hrs open for each location
$('#hrsOpen td:nth-of-type(1)').text(downtown.hrsOperation());
$('#hrsOpen td:nth-of-type(2)').text(capitolHill.hrsOperation());
$('#hrsOpen td:nth-of-type(3)').text(southLakeUnion.hrsOperation());
$('#hrsOpen td:nth-of-type(4)').text(wedgewood.hrsOperation());
$('#hrsOpen td:nth-of-type(5)').text(ballard.hrsOperation());

//dynamically change total donuts sold for each location
$('#totalDonuts td:nth-of-type(1)').text(downtown.totalDonutsPerDay());
$('#totalDonuts td:nth-of-type(2)').text(capitolHill.totalDonutsPerDay());
$('#totalDonuts td:nth-of-type(3)').text(southLakeUnion.totalDonutsPerDay());
$('#totalDonuts td:nth-of-type(4)').text(wedgewood.totalDonutsPerDay());
$('#totalDonuts td:nth-of-type(5)').text(ballard.totalDonutsPerDay());

//dynamically change avg donuts per hr for each location
$('#avgDonuts td:nth-of-type(1)').text(downtown.avgDonutsPerHr());
$('#avgDonuts td:nth-of-type(2)').text(capitolHill.avgDonutsPerHr());
$('#avgDonuts td:nth-of-type(3)').text(southLakeUnion.avgDonutsPerHr());
$('#avgDonuts td:nth-of-type(4)').text(wedgewood.avgDonutsPerHr());
$('#avgDonuts td:nth-of-type(5)').text(ballard.avgDonutsPerHr());


//detailed data variables
var detailedDowntown = document.getElementById("detailedDowntown");
var detailedCapitolHill = document.getElementById("detailedCapitolHill");
var detailedSouthLakeUnion = document.getElementById("detailedSouthLakeUnion");
var detailedWedgewood = document.getElementById("detailedWedgewood");
var detailedBallard = document.getElementById("detailedBallard");

var optDetailedDowntown = document.getElementById("optDetailedDowntown");
var optDetailedCapitolHill = document.getElementById("optDetailedCapitolHill");
var optDetailedSouthLakeUnion = document.getElementById("optDetailedSouthLakeUnion");
var optDetailedWedgewood = document.getElementById("optDetailedWedgewood");
var optDetailedBallard = document.getElementById("optDetailedBallard");

//-------------------------
//checkboxes
//-------------------------

//detailed data unhide with the checkbox
$(optDetailedDowntown).change(function(){
  if($(this).prop("checked")) {
    $(detailedDowntown).fadeIn();
  } else {
    $(detailedDowntown).fadeOut();
  }
});
$(optDetailedCapitolHill).change(function(){
  if($(this).prop("checked")) {
    $(detailedCapitolHill).fadeIn();
  } else {
    $(detailedCapitolHill).fadeOut();
  }
});
$(optDetailedSouthLakeUnion).change(function(){
  if($(this).prop("checked")) {
    $(detailedSouthLakeUnion).fadeIn();
  } else {
    $(detailedSouthLakeUnion).fadeOut();
  }
});
$(optDetailedWedgewood).change(function(){
  if($(this).prop("checked")) {
    $(detailedWedgewood).fadeIn();
  } else {
    $(detailedWedgewood).fadeOut();
  }
});
$(optDetailedBallard).change(function(){
  if($(this).prop("checked")) {
    $(detailedBallard).fadeIn();
  } else {
    $(detailedBallard).fadeOut();
  }
});

