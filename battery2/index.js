function changebatter(battery){
    let percentage = document.querySelector(".percentage");
    let percent = document.querySelector(".percent");
    if(Math.floor(battery.level * 100)<=15){
    alert("Low battery");
   }
  while(battery.charging && battery.level==1){
        alert("Battery is Full, you can remove the charging");
        if(!battery.charging){
            break;
        }
  }
  
  percentage.style.width = battery.level * 100 + "%";
  percent.innerHTML ="<p>Battery Remaining</p>"+Math.floor(battery.level * 100) + "%";
}
navigator.getBattery().then(function (battery) {
    
   changebatter(battery);
  battery.addEventListener('levelchange', function() {
    changebatter(battery);
});
});