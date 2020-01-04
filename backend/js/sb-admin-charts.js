// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");

function is_leap_year(year){
	if ((year%4==0 && year%100!=0)||year%400==0){
		return true
	}
	else {return false}
}
//Get current day
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
var yyyy = today.getFullYear()
today = mm + '/' + dd + '/' + yyyy
var month = []
var leap_year = is_leap_year(yyyy)
for (var i = 1; i<32; ++i){
	month.push(i)
}
var calendar = []
for (var j=0; j<12; ++j){
	calendar.push(month)
}
for (var k=0; k<12; ++k){
	if(k==0||k==2||k==4||k==6||k==7||k==9||k==11){
		calendar[k].push(31)
	}
	if(k==1){
		calendar[k].pop()
		if(leap_year==false){
			calendar[k].pop()
		}
	}
}
var date_interval = []
function num_day(year, month, day){
	if (month==1){
		document.write(day);
	}
	else if(month==2){
		return day+31
	}
	else if(month==3){
		if (is_leap_year(year)){
			return day+31+29
		}
		else {
			return day+31+28
		}
	}
	else if(month==4){
		if (is_leap_year(year)){
			return day+31+29+31
		}
		else {
			return day+31+28+31
		}
	}
	else if(month==5){
		if (is_leap_year(year)){
			return day+31+29+31+30
		}
		else {
			return day+31+28+31+30
		}
	}
	else if(month==6){
		if (is_leap_year(year)){
			return day+31+29+31+30+31
		}
		else {
			return day+31+28+31+30+31
		}
	}
	else if(month==7){
		if (is_leap_year(year)){
			return day+31+29+31+30+31+30
		}
		else {
			return day+31+28+31+30+31+30
		}
	}
	else if(month==8){
		if (is_leap_year(year)){
			return day+31+29+31+30+31+30+31
		}
		else {
			return day+31+28+31+30+31+30+31
		}
	}
	else if(month==9){
		if (is_leap_year(year)){
			return day+31+29+31+30+31+30+31+31
		}
		else {
			return day+31+28+31+30+31+30+31+31
		}
	}
	else if(month==10){
		if (is_leap_year(year)){
			return day+31+29+31+30+31+30+31+31+30
		}
		else {
			return day+31+28+31+30+31+30+31+31+30
		}
	}
	else if(month==11){
		if (is_leap_year(year)){
			return day+31+29+31+30+31+30+31+31+30+31
		}
		else {
			return day+31+28+31+30+31+30+31+31+30+31
		}
	}
	else if(month==12){
		if (is_leap_year(year)){
			return day+31+29+31+30+31+30+31+31+30+31+30
		}
		else {
			return day+31+28+31+30+31+30+31+31+30+31+30
		}
	}
}
for(var m=0; m<12; ++m){
	for(var n=0;n<calendar[m].length;++n){
		date_interval.push(String(m+1)+'/'+String(calendar[m][n]));
	}
}
var x = num_day(parseInt(yyyy), parseInt(mm), parseInt(dd))+65
var x_label = [date_interval[(x-6)%date_interval.length], date_interval[(x-5)%date_interval.length], date_interval[(x-4)%date_interval.length], date_interval[(x-3)%date_interval.length], date_interval[(x-2)%date_interval.length], date_interval[(x-1)%date_interval.length],
				date_interval[x%date_interval.length], date_interval[(x+1)%date_interval.length], date_interval[(x+2)%date_interval.length], date_interval[(x+3)%date_interval.length], date_interval[(x+4)%date_interval.length], date_interval[(x+5)%date_interval.length],date_interval[(x+6)%date_interval.length]]
//["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"]
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: x_label,
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Blue", "Red", "Yellow", "Green"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});
