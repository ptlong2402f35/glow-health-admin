import { useEffect, useRef } from "react";

export default function usePrevious(val?: any) {
	const ref = useRef();

	useEffect(() => {
		ref.current = val || null;
	});

	return ref.current;
}

export function usePreviousConcrete<T>(val?: T) {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = val;
	});

	return ref.current;
}
