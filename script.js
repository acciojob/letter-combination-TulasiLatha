function letterCombinations(input_digit) {
  //Complete the function
	const map={
		'2':'abc',
		'3':'def',
		'4':'ghi',
		'5':'jkl',
		'6':'mno',
		'7':'pqrs',
		'8':'tuv',
		'9':'wxyz',
	};
	const result=[];
	if(input_digit.lrngth=0){
		return result;
	}
	function back(combination, nxtDigits){
		if(nextDigits.length===0)
			result.push(combination);
		
	}
	else{
		const digit=nxtDigits[0];
		const letters=map[digit];
		for(let i=0;i<letters.length;i++){
			const letter=letters[i],
				back(conbintaio+letter,nxtDigitd.slice(1));
		}
	}
}
back('',digits);
return result result.sort();
}
const result=letterCombinations('23');
conosle.log(result);
module.exports = letterCombinations;
