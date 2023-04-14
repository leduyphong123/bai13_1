let number=prompt("nhap vao day so");
let arr=[];
for(let i=1;i<=number.length;i++){
    arr.push(number.charAt(i-1));
    if(parseInt(number.charAt(i-1))%2==0 && parseInt(number.charAt(i))%2==0){
        arr.push("-");
    }
}
document.write(arr);