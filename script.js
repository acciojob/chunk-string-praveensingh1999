
function stringChop(str, size) {
  // your code here
	let ans=[];
	let i=0;
	while(i<str.length){
		
	
		let val="";
		let j;
		for( j=i;j<i+size && j<str.length ;j++){
			val+=str[j];
		}
		
		ans.push(val);
		i=j;
	}
	
	return ans;
}
 
// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
//alert(stringChop(str, size));
