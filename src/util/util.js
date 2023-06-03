export const getLocalStorage = (key) => {
	return JSON.parse(window.localStorage.getItem(key));
}

// 저장
export const setLocalStorage = (key, value) => {
	return window.localStorage.setItem(key, JSON.stringify(value));
};
