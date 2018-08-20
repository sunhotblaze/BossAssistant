const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return year + '-' + (month > 10 ? month : '0' + month)
}

const lastMonth =date =>{
  date.setMonth(date.getMonth() -1);
  
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  return year + '-' + (month > 10 ? month : '0' + month)
}

const nextMonth =date =>{
  date.setMonth(date.getMonth() + 1);

  const year = date.getFullYear();
  const month = date.getMonth()+1;

  return year + '-' + (month > 10 ? month : '0' + month)
}

module.exports = {
  formatTime: formatTime,
  lastMonth: lastMonth,
  nextMonth: nextMonth

}