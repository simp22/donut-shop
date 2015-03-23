// var summarizedDowntown = document.getElementById("summarizedDowntown");
// var summarizedCapitolHill = document.getElementById("summarizedCapitolHill");
// var summarizedSouthLakeUnion = document.getElementById("summarizedSouthLakeUnion");
// var summarizedWedgewood = document.getElementById("summarizedWedgewood");
// var summarizedBallard = document.getElementById("summarizedBallard");

// var optSummarizedDowntown = document.getElementById("optSummarizedDowntown");
// var optSummarizedCapitolHill = document.getElementById("optSummarizedCapitolHill");
// var optSummarizedSouthLakeUnion = document.getElementById("optSummarizedSouthLakeUnion");
// var optSummarizedWedgewood = document.getElementById("optSummarizedWedgewood");
// var optSummarizedBallard = document.getElementById("optSummarizedBallard");

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

//summarized data
// $(optSummarizedDowntown).change(function(){
//   if($(this).prop("checked")) {
//     $(summarizedDowntown).show();
//   } else {
//     $(summarizedDowntown).hide();
//   }
// });
// $(optSummarizedCapitolHill).change(function(){
//   if($(this).prop("checked")) {
//     $(summarizedCapitolHill).show();
//   } else {
//     $(summarizedCapitolHill).hide();
//   }
// });
// $(optSummarizedSouthLakeUnion).change(function(){
//   if($(this).prop("checked")) {
//     $(summarizedSouthLakeUnion).show();
//   } else {
//     $(summarizedSouthLakeUnion).hide();
//   }
// });
// $(optSummarizedWedgewood).change(function(){
//   if($(this).prop("checked")) {
//     $(summarizedWedgewood).show();
//   } else {
//     $(summarizedWedgewood).hide();
//   }
// });
// $(optSummarizedBallard).change(function(){
//   if($(this).prop("checked")) {
//     $(summarizedBallard).show();
//   } else {
//     $(summarizedBallard).hide();
//   }
// });

//detailed data
$(optDetailedDowntown).change(function(){
  if($(this).prop("checked")) {
    $(detailedDowntown).show();
  } else {
    $(detailedDowntown).hide();
  }
});
$(optDetailedCapitolHill).change(function(){
  if($(this).prop("checked")) {
    $(detailedCapitolHill).show();
  } else {
    $(detailedCapitolHill).hide();
  }
});
$(optDetailedSouthLakeUnion).change(function(){
  if($(this).prop("checked")) {
    $(detailedSouthLakeUnion).show();
  } else {
    $(detailedSouthLakeUnion).hide();
  }
});
$(optDetailedWedgewood).change(function(){
  if($(this).prop("checked")) {
    $(detailedWedgewood).show();
  } else {
    $(detailedWedgewood).hide();
  }
});
$(optDetailedBallard).change(function(){
  if($(this).prop("checked")) {
    $(detailedBallard).show();
  } else {
    $(detailedBallard).hide();
  }
});

