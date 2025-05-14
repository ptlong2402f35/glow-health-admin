import React, { useEffect, useState } from "react";
import {
	HomeNewsWrap,
	HomeNewsCenter,
	HomeNewsHeader,
	HomeNewsContentList,
	HomeNewsContentItems,
	HomeNewsItemImg,
	HomeNewsItemDate,
	HomeNewsItemTitle,
	HomeNewsItemContent,
	HomeNewsItemImgWrap,
	HomeNewsItemDateIcon,
	HomeNewsItemDateText,
	HomeNewsFooter,
	HomeNewsFooterBtn,
	HomeNewsItemContenWrap,
} from "./styled/StyledHomeNews";
import axios from "axios";

export default function HomeNews() {
	const [blogList, setBlogList] = useState([
		{
			img: "",
			title: "",
			sub_title: "",
		},
	]);
	useEffect(() => {
		axios.get("./static/news/blogList/blogList.json").then((res) => {
			setBlogList(res.data.blog_List);
		});
	}, []);

	return (
		<HomeNewsWrap id="home-news">
			<HomeNewsCenter>
				<HomeNewsHeader>Đồng hành cùng Glow</HomeNewsHeader>
				<HomeNewsContentList>
					Email: support@glowvietnam.com <br></br>
					Hotline: +84 888129100 <br></br>
					Facebook: fb.com/Glowapp2022 <br></br>
					Địa chỉ: Tầng 14, 169 Nguyễn Ngọc Vũ, Trung Hòa, Cầu Giấy, Hà Nội<br></br>
				</HomeNewsContentList>
				<HomeNewsItemImgWrap>
					<img src="./static/img/map.jpg" />
				</HomeNewsItemImgWrap>
			</HomeNewsCenter>
		</HomeNewsWrap>
	);
}
