export const OpenItemIdField = "openItemId";

export function extractOpenItemId(searchParams: string): string | null {
	let params = new URLSearchParams(searchParams);
	return params.get(OpenItemIdField);
}

export function pushOpenItemId(pathName: string, searchParams: string, itemId: string | null | undefined): string {
	let params = new URLSearchParams(searchParams);
	params.delete(OpenItemIdField);
	if (itemId) {
		params.append(OpenItemIdField, itemId);
	}

	// pathName = pathName == "/" ? "" : pathName;
	return pathName + "?" + params.toString();
}
