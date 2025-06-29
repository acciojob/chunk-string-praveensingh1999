function stringChop(str, size) {
  // your code here
	let ans=[];
	let i=0;
	while(i<str.length-size){
		
	
		let val="";
		let j;
		for( j=i;j<i+size;j++){
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
