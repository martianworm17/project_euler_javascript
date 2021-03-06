/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

var x = 1;
var y = 2;
var sum = 0;
var sum_even = 2; // Start with 2 because it will not be counted because the first sum is 3.

while(sum < 4000000) {
	sum = x + y;
	
	if(sum % 2 == 0) {
		sum_even += sum;
		console.log(sum_even);
	}
	
	x = y;
	y = sum;
	
}