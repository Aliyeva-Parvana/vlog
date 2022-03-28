const btn= document.querySelector(".button")
 const myDiv= document.getElementById("data-div") 
//  const myDiv2= document.getElementById("data-div2") 
 const myDiv2 = document.getElementById("data-div2")
// const btn2 = document.querySelector(".button2")

btn?.addEventListener("click",getData);



async function getData(){
    const location = "https://jsonplaceholder.typicode.com/users/1/posts"
    try{
        const stringDatalar = await fetch(location)
        if(stringDatalar.status ===404){
                console.log(`Melumat bazadan cekilerken xeta bas verdi:Xeta kodu:${stringDatalar.status }`)
            }
            const datas = await stringDatalar.json()
            for(let i=0; i<datas.length; i++){
                myDiv.innerHTML+=`<div class ="qutu"> 
              <a href="./index2.html?id=${datas[i].id}" class="demo">
               <h3>${datas[i].title}</h3> </a> 
            ${datas[i].id}</div>`
            // myDiv2.innerHTML += `${datas[i].body}`
            
            
            // location.replace("")
            }
        }
        
        catch(xeta) {
            console.log(xeta);
            console.log(`Məlumat bazadan çəkilərkən xəta baş verdi. Xəta kod:${xeta}`)   
        }
    }

 

    async function getData2(){
        // console.log(id);
        console.log(window.location.href);
        const id = window.location.href.split("=")[1];
        console.log(id);
        const location2 = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
        try{
            const stringDatalar2 = await fetch(location2)
            if(stringDatalar2.status ===404){
                    console.log(`Melumat bazadan cekilerken xeta bas verdi:Xeta kodu:${stringDatalar2.status }`)
                }
                const datas2 = await stringDatalar2.json()
                for(let i=0; i<datas2.length; i++){
                    myDiv2.innerHTML+=`<div class ="qutu2">
                   <h3>${datas2[i].body}</h3> </a> 
                ${datas2[i].id}</div>`
                }

            }
            
            catch(xeta) {
                console.log(xeta);
                console.log(`Məlumat bazadan çəkilərkən xəta baş verdi. Xəta kod:${xeta}`)   
            }
        }


    
    