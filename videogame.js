// let url = "https://api.rawg.io/api/games?page[limit]=1&page[offset]=${Math.floor(Math.random() * 10000) + 1}"
	
// fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(myJson){
//         console.log(myJson);
//         displayData(myJson.results[0]);
// 	})
	
//function displayData(game){
//     let name = game.name;
//     let img = game.background_image;
//     let n = document.createElement("n");
//     n.innerHTML = name + " " + img;
//     document.body.appendChild(n);
// }


onload =()=>{
    var buttons = document.getElementsByTagName("button");
    const form = document.getElementById("f1");
    const wrapper = document.querySelector("#wrapper");
    f1.addEventListener("submit", createPost);
    /*buttons[0].addEventListener("click", upVote.bind(buttons[0]));
    buttons[1].addEventListener("click", downVote.bind(buttons[1]));*/
    
    let count =0;
    
    function upVote(){
        let da = this.parentNode;
        da.getElementsByClassName("vote")[0].innerText = ++da.count;
        
        
    }
    function downVote(){
        let da = this.parentNode;
        da.getElementsByClassName("vote")[0].innerText = --da.count;
        
    }
    
    
    function createPost(event){
    event.preventDefault();
    let data = f1.postText.value;//value in text area
    let post = document.createElement("div");
    post.setAttribute("class", "post");
    
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    
    div1.setAttribute("class", "box_button");
    //stuff inside of div1
    let bt1 = document.createElement("button");
    let bt2 = document.createElement("button");
    //test
    div1.setAttribute("name", "count");
    div1.count = 0;

    //test end
    let span = document.createElement("span");
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    
    
    span.setAttribute("class","vote");
    bt1.innerHTML = '<i class="fas fa-angle-up" >';
    bt2.innerHTML = '<i class="fas fa-angle-down"> ';
    span.innerText = "0";
    div1.appendChild(bt1);
    div1.appendChild(br1);
    div1.appendChild(span);
    div1.appendChild(br2);
    div1.appendChild(bt2);
    //buttons
    
    bt1.addEventListener("click", upVote.bind(bt1));
    bt2.addEventListener("click", downVote.bind(bt2));
    
     //#finder start
    data+=" ";
    let hashStart =[];
    let hashEnd = [];
    //store the starting index
    for(let i = 0; i < data.length; i++){
        if(data[i] == "#")
            hashStart.push(i);
        
    }
    
    for(let i = 0; i < hashStart.length; i++){
        for(let j = hashStart[i]; j < data.length; j++){
            if(data[j] == " "){
                hashEnd.push(j);
                break;
            }
        
        }
    }
    for(let i = 0; i < hashStart.length; i++){
        console.log("Start: "+hashStart[i] +" End: "+hashEnd[i]);
    }
    //the results! temporary solution
    let hash ="";
    for(let i = 0; i < hashStart.length; i++){    
    hash += "<span class=\"hashtag\">"+data.slice(hashStart[i], hashEnd[i])+"<span><br>";
    
    }
    //console.log(data);
    //temp solution
    data+= hash;
    
    //end of hashtag
    let para = document.createElement("p");
    para.innerHTML = data;
    
    div2.appendChild(para);
    post.appendChild(div1);
    post.appendChild(div2);
    //*console.log( wrapper.firstChild.nextSibling); wrapper.insertBefore(post,wrapper.firstChild.nextSibling);*/
    
    wrapper.appendChild(post);
    
    
    f1.reset();
}
   
    
    
    
}

