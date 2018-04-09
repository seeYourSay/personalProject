//判断一个属数字是否为-0
function isNagativeZero (num) {
	//方法一
	//return num === 0 && (1/num < 0);
	//方法二
	if (num !== 0) {
		return false;
	}
	let obj = {};
	Object.defineProperty(obj, 'num', { value: -0, configurable: false });
	try {
		Object.defineProperty(obj, 'num', { value: num });
	} catch (e) {
		return false;
	}
	return true;
}