export default function flattenEdgeNodeArray(data : any = {}, preserveCursor : boolean = false, cursorKey : string = '_cursor') : any[] {
	const arr : any[] = data.edges ?? data ?? [];

	return Array.isArray(arr)
		? arr.map((item : any) => {
			const node = item.node ?? item;

			if (preserveCursor && item.cursor) {
				node[cursorKey] = item.cursor;
			}

			return node;
		})
		: [];
}
