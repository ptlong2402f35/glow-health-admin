export function getBackPath(search: string): string | null {
	if (!search) return null;
	var params = new URLSearchParams(search);

	return (params.get("back") && params.get("back")) || "" || null;
}
