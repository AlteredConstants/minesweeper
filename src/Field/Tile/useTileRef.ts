import { useImperativeHandle, useRef, type RefObject } from "react";

export type TileRefObject = { focus(): void };
export type TileRef = RefObject<TileRefObject | null>;

export function useTileRef(
	ref: TileRef | undefined,
): RefObject<SVGGElement | null> {
	const elementRef = useRef<SVGGElement>(null);
	useImperativeHandle(ref, () => ({
		focus: () => elementRef.current?.focus(),
	}));
	return elementRef;
}
