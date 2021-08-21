
      //  first product
      // declaration part
      const plus1=document.querySelector(".plus-button1")
    const minus1=document.querySelector(".minus-button1")
    const price1=Number(document.querySelector(".price1").innerHTML)
    var qty1=document.querySelector(".qty1").value
    var total1=document.querySelector(".total1")
    const remove1=document.querySelector(".remove1")
    const product1=document.querySelector("#product1")

// plus button
    plus1.addEventListener('click',function(){
      qty1++
      document.querySelector(".qty1").value=qty1
      total1=price1*qty1
      document.querySelector(".total1").innerHTML=total1
     
        })
        // minus button
   minus1.addEventListener('click', function(){ 
     if (qty1>1){  
       qty1--
       document.querySelector(".qty1").value=qty1
       total1=price1*qty1
       document.querySelector(".total1").innerHTML=total1
     
      }
   
    })
     var sum= Number(total1.innerHTML)
         // remove product1 button
    
    remove1.addEventListener('click',function(){
    document.getElementById("product1").remove()
   })
      // 2nd product

    const plus2=document.querySelector(".plus-button2")
    const minus2=document.querySelector(".minus-button2")
     const price2=Number(document.querySelector(".price2").innerHTML)
    var qty2=document.querySelector(".qty2").value
     var total2=document.querySelector(".total2")
     const remove2=document.querySelector(".remove2")
      // plus button
     plus2.addEventListener('click',function (){
      
        qty2++
        document.querySelector(".qty2").value=qty2
        total2=price2*qty2
        document.querySelector(".total2").innerHTML=total2
     })
       // minus button
      minus2.addEventListener('click',function (){
       if(document.querySelector(".qty2").value>1){
         qty2--
         document.querySelector(".qty2").value=qty2
         total2=price2*qty2
        document.querySelector(".total2").innerHTML=total2
       }
      
     })
     sum+=Number(total2.innerHTML)
  
      
      // remove product2 button
  
     remove2.addEventListener('click',function(){
       document.getElementById("product2").remove()
     })
 
    
 // 3rd product

    const plus3=document.querySelector(".plus-button3")
    const minus3=document.querySelector(".minus-button3")
     const price3=Number(document.querySelector(".price3").innerHTML)
    var qty3=document.querySelector(".qty3").value
     var total3=document.querySelector(".total3")
     const remove3=document.querySelector(".remove3")
     
      // plus button
     plus3.addEventListener('click',function (){
      
        qty3++
        document.querySelector(".qty3").value=qty3
        total3=price3*qty3
        document.querySelector(".total3").innerHTML=total3
     })
       // minus button
      minus3.addEventListener('click',function (){
       if(document.querySelector(".qty3").value>1){
         qty3--
         document.querySelector(".qty3").value=qty3
         total3=price3*qty3
        document.querySelector(".total3").innerHTML=total3
       }
      
     })

      sum+=Number(total3.innerHTML)
  
      // remove product3 button
  
     remove3.addEventListener('click',function(){
       document.getElementById("product3").remove()
     })

// total price:
const checktotal= document.querySelector(".check-total")
var totalprice=document.querySelector(".total-price")

checktotal.addEventListener('click',function(){
  
document.querySelector(".total-price").innerHTML=sum

})

    
// gray to red hearts
document.getElementById("heartid1").addEventListener('click',function(){
   document.getElementById("heart1").setAttribute("src","/assets/red-heart.png")
   })
   document.getElementById("heartid2").addEventListener('click',function(){
   document.getElementById("heart2").setAttribute("src","/assets/red-heart.png")
   })
   document.getElementById("heartid3").addEventListener('click',function(){
   document.getElementById("heart3").setAttribute("src","/assets/red-heart.png")
   })