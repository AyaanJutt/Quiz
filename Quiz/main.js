document.getElementById('results').addEventListener('click', answer)

function answer(){
    let x=0
    
    let q1=document.getElementById('q1').value
        if (q1=='false' || q1=='False'){
           x++
        } else {
            x=0
        }
    let q2=document.getElementById('q2').value
        if(q2== 'Mr.Bacque' || q2=='Mr Bacque' || q2=='Jesse Bacque'){
            x++
        } else {
            x--
        }
    let q3=document.getElementById('q3').value
        if(q3=='2'){
            x++
        } else {
            x--
        }
    let q4=document.getElementById('q4').value
        if(q4=='z'|| q4=='Z'){
            x++
        } else {
            x--
        }
        if (x<0){
            x=0
        }    
    document.getElementById('mark').innerHTML=x
    let percent=(x/4)*100
    document.getElementById('percent').innerHTML=percent
}