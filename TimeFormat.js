export function  formatDateTime(theDate) {

    var _hour = theDate.getHours();

    var _minute = theDate.getMinutes();

    var _second = theDate.getSeconds();

    var _year = theDate.getFullYear()

    var _month = theDate.getMonth();

    var _date = theDate.getDate();

    return  _year + "-" + _month + "-" + _date + " " + _hour + ":" + _minute + ":" + _second ;

}