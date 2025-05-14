import React from "react";
import {
	HomeInstructWrap,
	HomeInstructCenter,
	HomeInstructHeader,
	HomeInstructTitle1,
	HomeInstructTitle2,
	HomeInstructInner,
	HomeInstructItem,
	HomeInstructItemIcon,
	HomeInstructItemTitle,
	HomeInstructItemContent,
	HomeInstructItemHeader,
	HomeInstructItemNo,
	HomeInstructItemNumber,
	HomeInstructItemNumberTitle,
	HomeInstructItemHeaderContain,
	HomeInstructItemHeaderRes,
} from "./styled/HomeInstruct";

export default function HomeInstruct() {
	return (
		<HomeInstructWrap id="home-instruct">
			<HomeInstructCenter>
				<HomeInstructHeader>
					<HomeInstructTitle1>Tại sao lại chọn GLOW?</HomeInstructTitle1>
				</HomeInstructHeader>
				<HomeInstructInner>
					<HomeInstructItemNo>
						<HomeInstructItemHeader>
							<HomeInstructItemIcon>
								<img src="./static/img/datlich.png" />
								<HomeInstructItemNumberTitle>Đặt lịch</HomeInstructItemNumberTitle>
							</HomeInstructItemIcon>
						</HomeInstructItemHeader>
						<HomeInstructItemHeaderRes>
							<HomeInstructItemIcon>
								<img src="./static/img/datlich.png" />
							</HomeInstructItemIcon>
							<HomeInstructItemHeaderContain>
								<HomeInstructItemNumberTitle>Đặt lịch</HomeInstructItemNumberTitle>
							</HomeInstructItemHeaderContain>
						</HomeInstructItemHeaderRes>
						<HomeInstructItemContent>
							Quẹt quẹt trên ứng dụng, có ngay đối tác Glow đến tận nhà
						</HomeInstructItemContent>
					</HomeInstructItemNo>
					<HomeInstructItemNo>
						<HomeInstructItemHeader>
							<HomeInstructItemHeaderContain></HomeInstructItemHeaderContain>
							<HomeInstructItemIcon>
								<img src="./static/img/giaca.png" />
								<HomeInstructItemNumberTitle>Giá cả rõ ràng</HomeInstructItemNumberTitle>
							</HomeInstructItemIcon>
						</HomeInstructItemHeader>
						<HomeInstructItemHeaderRes>
							<HomeInstructItemIcon>
								<img src="./static/img/giaca.png" />
							</HomeInstructItemIcon>
							<HomeInstructItemHeaderContain>
								<HomeInstructItemNumberTitle>Giá cả rõ ràng</HomeInstructItemNumberTitle>
							</HomeInstructItemHeaderContain>
						</HomeInstructItemHeaderRes>
						<HomeInstructItemContent>
							Bạn không phải trả thêm bất kỳ khoản chi phí nào
						</HomeInstructItemContent>
					</HomeInstructItemNo>
					<HomeInstructItemNo>
						<HomeInstructItemHeader>
							<HomeInstructItemIcon>
								<img src="./static/img/dichvu.png" />
								<HomeInstructItemNumberTitle>Đa dạng dịch vụ</HomeInstructItemNumberTitle>
							</HomeInstructItemIcon>
						</HomeInstructItemHeader>
						<HomeInstructItemHeaderRes>
							<HomeInstructItemIcon>
								<img src="./static/img/dichvu.png" />
							</HomeInstructItemIcon>
							<HomeInstructItemHeaderContain>
								<HomeInstructItemNumberTitle>Đa dạng dịch vụ</HomeInstructItemNumberTitle>
							</HomeInstructItemHeaderContain>
						</HomeInstructItemHeaderRes>
						<HomeInstructItemContent>
							Giúp quý khách hàng chăm sóc sức khỏe thể chất và tinh thần
						</HomeInstructItemContent>
					</HomeInstructItemNo>
					<HomeInstructItemNo>
						<HomeInstructItemHeader>
							<HomeInstructItemIcon>
								<img src="./static/img/antoan.png" />
								<HomeInstructItemNumberTitle>An toàn tối đa</HomeInstructItemNumberTitle>
							</HomeInstructItemIcon>
						</HomeInstructItemHeader>
						<HomeInstructItemHeaderRes>
							<HomeInstructItemIcon>
								<img src="./static/img/antoan.png" />
							</HomeInstructItemIcon>
							<HomeInstructItemHeaderContain>
								<HomeInstructItemNumberTitle>An toàn tối đa</HomeInstructItemNumberTitle>
							</HomeInstructItemHeaderContain>
						</HomeInstructItemHeaderRes>
						<HomeInstructItemContent>
							Thông tin của quý khách hàng được bảo mật tuyệt đối
						</HomeInstructItemContent>
					</HomeInstructItemNo>
				</HomeInstructInner>
			</HomeInstructCenter>
		</HomeInstructWrap>
	);
}
