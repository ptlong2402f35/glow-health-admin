import React, { useEffect, useState } from "react";
import { StyledTimeWorkUpdateWrap, StyledTimeWorkTitle, StyledTimeWorkAddBtn, StyledTimeWorkUpdateInputWrap, StyledTimeWorkInputHead, StyledTimeWorkLabel, StyledTimeWorkInputContainer, StyledTimeWorkDelBtn, StyledTimeWorkHeader, TagSecsionWrap, TagSecsionTitle, StyledTimeWorkAddBtnv2, StyledTagsInputContainer } from "../styled/StylePartnerDetail";
import ErrorBoundary from "../../../../utils/ErrorBoundary";
import { SelectTagWrapper, SelectWrapper } from "../../adminProductManagement/styled/ProductManagementStyle";
import { getFilterTagsList } from "../../adminTagManage/hook/useListTags";
import { Tags } from "../../../../models/Staff";
import { PersonalReviewTitle } from "../../personal/styled/StylePersonal";
import useTag from "../hook/useTag";

export default function TagsSection(props: {
	id?: number;
	listTags: Tags[];
	reload: () => void
}) {
		const [tag, setTag] = useState<string[]>([]);
    const [_, setRefresh] = useState({});
    const { listTags } = getFilterTagsList();
	const {doTag} = useTag()

	useEffect(() => {
		if (props.id && props.listTags.length) {
			const initialTags = props.listTags.map(tag => tag.id.toString());
			setTag(initialTags);
		}
	}, [props.id, props.listTags]);
	
    const addTag = () => {
        setTag?.([...tag || [], ""]);
        setRefresh({});
    };

	const saveTag = async () => {
				await doTag(props.id, tag || []	,props.reload);
		};

    return (
        <TagSecsionWrap>
            <StyledTimeWorkHeader>
				<TagSecsionTitle>Gán tag</TagSecsionTitle>
				<div>
				<StyledTimeWorkAddBtnv2 onClick={saveTag}>Lưu</StyledTimeWorkAddBtnv2>
                <StyledTimeWorkAddBtn onClick={addTag}>Thêm</StyledTimeWorkAddBtn>
				</div>
            </StyledTimeWorkHeader>
            <StyledTimeWorkUpdateInputWrap>
                <ErrorBoundary>
					<>
                    {tag?.map((item, index) => (
                        <TagSingleItem
                            key={index}
                            index={index}
                            item={item}
                            setRefresh={() => setRefresh({})}
                            onChange={setTag}
                            tags={tag}
                            listTags={listTags}
                        />
                    ))}
					</>
                </ErrorBoundary>
            </StyledTimeWorkUpdateInputWrap>
        </TagSecsionWrap>
    );
}

export function TagSingleItem(props: {
    setRefresh: () => void;
    onChange?: (value: string[]) => void;
    tags: string[] | undefined | null;
    item: string;
    listTags: Tags[];
    index: number;
}) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let newTags = [...props.tags || []];
        newTags[props.index] = event.target.value;
        props.onChange?.(newTags);
        props.setRefresh();
    };

    const deleteTag = () => {
        let updatedTags = props.tags?.filter((_, i) => i !== props.index);
        props.onChange?.(updatedTags || []);
        props.setRefresh();
    };

    return (
        <StyledTagsInputContainer>
            <SelectTagWrapper>
                <select value={props.item} onChange={handleChange}>
                    <option value="">Chọn Tag</option>
                    {props.listTags.map((group) => (
                        <option key={group.id} value={group.id || ""}>
                            {group.serviceGroup} - {group.name}
                        </option>
                    ))}
                </select>
            </SelectTagWrapper>
            <StyledTimeWorkDelBtn onClick={deleteTag}>Xóa</StyledTimeWorkDelBtn>
        </StyledTagsInputContainer>
    );
}