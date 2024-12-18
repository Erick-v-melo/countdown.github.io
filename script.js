function updateTimer() {
  let endDate = new Date(2024, 11, 31, 23, 59, 59);
  let now = new Date();

  let subDate = endDate.getTime() - now.getTime();

  let oneSecond = 1000;
  let oneMinute = oneSecond * 60;
  let oneHour = oneMinute * 60;
  let oneDay = oneHour * 24;
  
  let days = Math.floor(subDate / oneDay);
  let hours = Math.floor((subDate % oneDay) / oneHour);
  let minutes = Math.floor((subDate % oneHour) / oneMinute);
  let seconds = Math.floor((subDate % oneMinute) / oneSecond);

  document.querySelector('#cd-day').innerHTML = days > 0 ? days: 0;
  document.querySelector('#cd-hour').innerHTML = hours > 0 ? hours: 0;
  document.querySelector('#cd-min').innerHTML = minutes > 0 ? minutes: 0;
  document.querySelector('#cd-sec').innerHTML = seconds > 0 ? seconds: 0;
  
}

setInterval(updateTimer, 1000);