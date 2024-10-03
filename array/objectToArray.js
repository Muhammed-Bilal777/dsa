function convertToArrar(object) {
	let res = [];
	for (let key in object) {
		if (typeof object[key] === "object") {
			res = res.concat(convertToArrar(object[key]));
		} else {
			res.push(object[key]);
		}
	}
	return res;
}

let obj = {
	name: "jhon",
	sub: "front end developer",
	details: {
		address: "new york city",
		phn: 123456789,
		relatives: {
			name_one: "jcob",
			name_two: "json",
			city: {
				name: "ban",
				code: "123",
			},
		},
	},
};

console.log(convertToArrar(obj));
