import React, { Fragment, useContext } from "react";
import { UserRole } from "../../../models/User";
import { AuthenticationContext } from "./AuthenticationWrap";
import PrivateRoute from "./PrivateRoute";

export default function ByRoleRoute(props: {
	roles: UserRole[][];
	components: JSX.Element[];
	emptyComponent?: JSX.Element | string;
	children?: any;
}) {
	return (
		<PrivateRoute emptyComponent={props?.emptyComponent}>
			<ByRoleRouteInner {...props} />
		</PrivateRoute>
	);
}

export function ByRoleRouteInner(props: {
	roles: UserRole[][];
	components: JSX.Element[];
	emptyComponent?: JSX.Element | string;
}) {
	const ctx = useContext(AuthenticationContext);
	const { userInfo } = ctx || {};

	if (
		!props.roles ||
		!props.roles.length ||
		!props.components ||
		!props.components.length ||
		props.roles.length != props.components.length
	) {
		return <Fragment>{props?.emptyComponent}</Fragment>;
	}

	const findIdx: number = userInfo?.role
		? props.roles.findIndex((item) => item.includes(userInfo.role || UserRole.Guest))
		: -1;

	//find component which its roles must contain authenticated user's role
	if (findIdx >= 0) {
		return <Fragment>{props.components[findIdx]}</Fragment>;
	}

	return <Fragment>{props?.emptyComponent}</Fragment>;
}
