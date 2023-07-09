function updateTime() {
    var now = new Date();
    var hours = formatTime(now.getHours());
    var minutes = formatTime(now.getMinutes());
    var seconds = formatTime(now.getSeconds());
    var day = formatDay(now.getDay());
    var month = formatMonth(now.getMonth());
    var date = now.getDate();
    var year = now.getFullYear();
  
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('day').innerText = day;
    document.getElementById('month').innerText = month;
    document.getElementById('date').innerText = date;
    document.getElementById('year').innerText = year;
  }
  
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  
  function formatDay(day) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
  }
  
  function formatMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }
  
  setInterval(updateTime, 1000);
  