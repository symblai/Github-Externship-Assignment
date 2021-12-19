// Write your code here

// Approach
// 1. Take input string 
// 2. Traverse the string and find A,B,C and D
//        2.1 Make a cur that keeps track of string till ith position.
//        2.2 If ith character is ' ' that means one number is completed so push cur in the list and updated cur to empty string again.
//        2.3 While traversing keep track when '?' appears in number. When '?' appear mark number's position as index.
// 3. We have 4 cases as any of 4 number can have '?' make equation according to all posible case and choose one case according to value of index.
// 4. If index is 0 it means A has question mark in it. 
//      4.1 Calculate temp = D-C
//      4.2 if temp%B is not 0 return -1 otherwise calculate ans = temp/B and move to step 8.
// 5. If index is 1 it means B has question mark in it. 
//      5.1 Calculate temp = D-C
//      5.2 if temp%A is not 0 return -1 otherwise calculate ans = temp/A and move to step 8.
// 6. If index is 2 it means C has question mark in it. 
//      5.1 Calculate temp = A*B-D
//      5.2 if temp <= 0 return -1 else move to step 8.
// 7. If index is 3 it means D has question mark in it. 
//      5.1 Calculate temp = A*B+C
//      5.2 Move to step 8.
// 8. Pass calculated ans and number with '?' to valid function that will check number character by character.
//       8.1 If length of both strings aren't same return -1 otherwise make res=-1 and start traversing.
//       8.2 Else If res is not -1 and ith character of both strings are diffrent return -1.
//       8.3 else if ith character of both strings are different then make res = st2[I]
//       8.4 Else continue traversing.

class FixEquation{
	valid(st1, st2){
		let res=-1;
		if(st1.length !== st2.length) return res;
		for(let i=0; i<st1.length; i++){
			if(st1[i] !== st2[i] && res !== -1) return -1;
			else if(st1[i] !== st2[i]){
				res = parseInt(st2[i]);
			}
		}
		return res;
	}
	findMissingDigit(str){
		let list = [];
		let index;
		let cur = "";
		for(let i=0; i<str.length;){
			if(str[i] === '?'){
				index = list.length;
				cur+=str[i];
				i++

			}else if(str[i] === ' '){
				list.push(cur);
				cur="";
				i+=3;
			}else{
				cur+=str[i];
				i++;
			}
		}
		list.push(cur);
		let possible = true;
		switch(index){
			case 0:{
				let temp = parseInt(list[3])-parseInt(list[2]);
				if(temp%parseInt(list[1]) === 0){
					let ans = temp/parseInt(list[1]);
					let res = this.valid(list[0], ans.toString());
					return res;
				}else{
					possible = false;
					return -1;
				}
			}
			case 1:{
				let temp = parseInt(list[3])-parseInt(list[2]);
				if(temp%parseInt(list[0]) === 0){
					let ans = temp/parseInt(list[0]);
					return this.valid(list[1], ans.toString());
				}else{
					possible = false;
					return -1;
				}
			}
			case 2:{
				let temp = parseInt(list[0])*parseInt(list[1]) - parseInt(list[3]);
				if(temp <= 0) return -1;
				else{
					return this.valid(list[2], temp.toString());
				}
			}
			case 3:{
				let temp = parseInt(list[0])*parseInt(list[1]) + parseInt(list[2]);
				if(temp <= 0) return -1;
				else{
					return this.valid(list[3], temp.toString());
				}
			}
		}
	}
}