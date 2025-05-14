const First_length = 4;
const Last_length = -6;

export default function formatOrderId(orderId: any) {
	return orderId && orderId.length <= 13
		? orderId
		: `${(orderId ?? "").slice(0, First_length)}...${(orderId ?? "").slice(Last_length)}`;
}
