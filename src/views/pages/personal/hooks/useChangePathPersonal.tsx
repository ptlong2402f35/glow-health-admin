import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export function useChangePathPersonal(props: {}) {
	const pathUrl = useParams<{ path: string }>();
	const history = useHistory();

	const onChangePath = (path: string, pathRoot: string) => {
		history.push(pathRoot + path);
	};
	const path = pathUrl.path || "";

	return {
		path,
		onChangePath,
	};
}
