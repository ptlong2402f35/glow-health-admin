export function proxyStorage(): Storage | null {
	if (typeof localStorage !== "undefined") return localStorage;
	return null;
}
