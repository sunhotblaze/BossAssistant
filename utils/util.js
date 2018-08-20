//格式日期
const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return year + '-' + (month > 10 ? month : '0' + month)
}

//上个月
const lastMonth =date =>{
  date.setMonth(date.getMonth() -1);
  
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  return year + '-' + (month > 10 ? month : '0' + month)
}

//下个月
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