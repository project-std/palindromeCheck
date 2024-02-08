function onCheck(){
  let message= document.getElementById("textarea").value;
  let count= message.split(' ').join(''); 
  // console.log(count);
  let word="";
  for(var i=count.length-1;i>=0;i--)
  { 
    word +=count[i];
  }
  // console.log(word);
  let result = document.getElementById("result");

  if(count == word)
  { 
    result.innerHTML= "Palindrome";
  }else
  { 
    result.innerHTML ="Not a Palindrome";
  }
}