import moment from "moment";

class DateUtils {
	static getShortenDate(inputDate?: Date | null) {
		var dateStr = "";
		if (inputDate) {
			var date = moment(inputDate);
			if (date.isSame(moment(), "day")) {
				dateStr = date.format("HH:mm");
			} else {
				dateStr = date.format("DD/MM");
			}
		}
		return dateStr;
	}
}

export default DateUtils;
