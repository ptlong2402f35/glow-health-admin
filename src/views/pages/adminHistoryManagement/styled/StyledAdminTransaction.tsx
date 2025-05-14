import styled from "styled-components";

export const AdminTransactionFilterWrap = styled.div`
	display: flex;
	flex-direction: column-reverse;
	margin: 40px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		max-height: 0;
		visibility: hidden;
		margin: 40px 0 20px 0;
		transition: max-height 0.3s ease-in-out;
		&.visible {
			max-height: 800px;
			visibility: visible;
		}
	}
`;
export const AdminTransactionFilterLeft = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: start;
	}
`;
export const AdminTransactionFilterRight = styled.div`
	position: relative;
`;
export const AdminTransactionFilterDate = styled.div`
	margin: 0 20px;
	@media screen and (max-width: 768px) {
		margin: 0;
	}
`;
export const AdminTransactionAddButtton = styled.button<{disabled?:boolean}>`
	padding: 8px;
	background-color: var(--primary-color);
	${(props) => (props.disabled ? "background-color: #686868;" : "background-color:var(--primary-color);")}
	border: none;
	border-radius: 8px;
	color: #fff;
	position: absolute;
	bottom: 45px;
	right: 0;
	@media screen and (max-width: 768px) {
		bottom: 0;
	}
`;
export const AdminTransactionCountTotal = styled.span`
	font-weight: 600;
`;
export const AdminTransactionDialogInputWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AdminTransactionTextAreaContent = styled.textarea`
    width: 100%;
    height: 100px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
}
`;
export const AdminOrderManagementReFilter = styled.div`
margin-left: 20px;
float: right;
}
`;
export const AdminUserManagementClearButton = styled.button`
	color: var(--primary-color);
	background-color: transparent;
	border: none;
	font-size: 20px;
	&:hover {
		color: var(--primary-bold-color);
	}
`;
export const AddProductInputOwner = styled.div`
margin-bottom: 20px;
}
`;
export const Width100 = styled.div`
    width: 80px;
}
`;
