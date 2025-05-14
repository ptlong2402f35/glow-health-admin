import React, { Component, useState } from "react";
import { AutoScaleTextareaInput, AutoScaleTextareaWrapBox } from "./StyledAutoScaleTextarea";

/**
 * className
 */
export default function AutoScaleTextarea(
	props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
) {
	return (
		<AutoScaleTextareaWrapBox>
			{(props.value || "") + "|"}

			<AutoScaleTextareaInput
				{...(props as any)}
				spellCheck={false}
			/>
		</AutoScaleTextareaWrapBox>
	);
}
