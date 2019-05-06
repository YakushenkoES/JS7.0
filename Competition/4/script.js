 function getAngle(hours, minutes){
  hours = hours%12;
  minutes = minutes%60;
  let hoursAngle = 360/12*hours + 360/12/60*minutes;
  let mntAngle = 360/60*minutes;
  let ans = Math.abs(hoursAngle-mntAngle);
  return ans;
 }

 console.log(getAngle(6, 0));
 console.log(getAngle(3, 0));
 console.log(getAngle(3, 30));

