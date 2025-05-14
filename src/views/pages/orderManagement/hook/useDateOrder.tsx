import environments from "../../../../environment";

const payment = environments.paymentDate;

export default function useDateOrder() {
	return payment ?? 25;
}
