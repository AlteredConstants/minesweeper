import { createRef, useImperativeHandle } from "react";

export type TileRefObject = { focus(): void };
export type TileRef = React.Ref<TileRefObject>;

export function useTileRef(ref: TileRef): React.RefObject<SVGGElement> {
	const elementRef = createRef<SVGGElement>();
	useImperativeHandle(ref, () => ({
		focus: () => elementRef.current?.focus(),
	}));
	return elementRef;
}
