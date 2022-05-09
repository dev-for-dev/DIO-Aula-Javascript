const maca = {
	value: 2,
};

const laranja = {
	value: 4,
};

function mapComThis(arr, thisArg) {
	
	return arr.map(function (item) {
		return item * this.value;
	}, thisArg);
}
const nums = [2,5];
console.log('this -> maçã',mapComThis(nums,maca));
console.log('this -> laranja',mapComThis(nums,laranja));