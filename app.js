document.getElementById('apply-button').addEventListener("click",()=>{
  const friends = document.getElementsByClassName("friend");

  for(const friend of friends){
    friend.style.backgroundColor = "red";
  }
})

document.getElementById("apply-center").addEventListener("click",function(){
  const third = document.getElementById("third");
  third.style.textAlign ="center"
})

document.getElementById("add").addEventListener("click",()=>{
  const friends = document.getElementById("friends");
  friends.classList.add('friend')
  const div = document.createElement("div");
  div.innerHTML=`
    <div class="friend>
    <h3 class="friend-name">New Friend Add</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit eos amet!</p>
    </div>
  `
  friends.appendChild(div)
})