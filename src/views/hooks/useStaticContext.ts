import { useContext } from "react";
import { StaticContextWrapContext } from "../controls/common/StaticContextWrap";

export default function useStaticContext() {
	const ctx = useContext(StaticContextWrapContext);
	return {
		staticContext: ctx?.staticContext,
	};
}
