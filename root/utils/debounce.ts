export default function debounce<T extends (...args: unknown[]) => void>(func: T, timeout = 200) {
	let timer: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, timeout);
	};
}