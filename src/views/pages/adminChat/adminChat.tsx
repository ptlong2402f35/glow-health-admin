import React from "react";
import { useParams } from "react-router";
import useAdminGetDetailChat from "./hook/useAdminGetDetailChat";
import useAdminGetDetailMess, { getAdminDetailMess } from "./hook/useAdminGetDetailMess";
import {
	AdminChatBody,
	AdminChatStartDate,
	AdminChatTitle,
	AdminChatWrap,
	MessageBubble,
	SenderDate,
	SenderName,
	SpecialContent,
	SpecialContentImg,
} from "./styled/StyledChat";
import moment from "moment";
import useImageDialog from "../../hooks/useImageDialog";
import { MemberInfo, Message } from "../../../models/Chatbox";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";

export default function AdminChatPage() {
	let { id } = useParams<{ id: string }>();
	const { infoChat } = useAdminGetDetailChat({ id: id });

	const { message, count } = getAdminDetailMess({ id: infoChat?.id || 0 });
	const { page, doChangePage } = useCommonListFunctions();

	return (
		<AdminChatWrap>
			<AdminChatTitle>
				{infoChat?.order?.code}
			</AdminChatTitle>
      <AdminChatStartDate>
        Thời gian bắt đầu: {infoChat?.createdAt && moment(infoChat?.createdAt).format("HH:mm DD-MM-YYYY")}
      </AdminChatStartDate>

			<AdminChatBody>
				{message?.map((msg) => {
					const sender = infoChat?.memberInfo?.find((member) => member.userId === msg.sendByUserId);
					return (
						<AdminChatMessageBubble
							msg={msg}
							sender={sender}
						/>
					);
				})}
			</AdminChatBody>
			<PaginationWrapper>
				<NumberPaginationBox
					page={page || 1}
					count={count}
					per={PERPAGE.Admin}
					onChange={(val) => doChangePage?.(val)}
				/>
			</PaginationWrapper>
		</AdminChatWrap>
	);
}

export function AdminChatMessageBubble(props: { msg: Message; sender?: MemberInfo }) {
	const { openMultipleImageDialog } = useImageDialog();

	const handleImageClick = (imgIndex: number, images: string[]) => {
		if (openMultipleImageDialog) {
			openMultipleImageDialog(images, imgIndex);
		}
	};

	return (
		<MessageBubble key={props.msg.id}>
			<SenderDate>
				{" "}
				{"[" + (props.msg.createdAt && moment(props.msg?.createdAt).format("HH:mm DD-MM-YYYY")) + "]" || "[--]"}
			</SenderDate>
			<SenderName>{props.sender?.userPhone + " - " + props.sender?.userName}:</SenderName>
			<SpecialContent>
				{props.msg.type === 2 ? (
					<>
						{(props.msg.specialContent || []).map((srcImg, index) => {
							return (
								<SpecialContentImg
									key={index}
									src={srcImg || ""}
									alt="Special content"
									onClick={() => handleImageClick(index, props.msg.specialContent || [])}
								/>
							);
						})}
					</>
				) : (
					<p>{props.msg.content}</p>
				)}
			</SpecialContent>
		</MessageBubble>
	);
}
