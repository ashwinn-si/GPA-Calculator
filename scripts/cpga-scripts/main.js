let mark_storages=JSON.parse(localStorage.getItem("mark_storage")) || []; // containes all sem marks with subject
let cpg_storages=JSON.parse(localStorage.getItem("cpg_storage")) || []; //containes all the cgp of the semesters
//contains the entire marks of each sem
let alert_message=JSON.parse(localStorage.getItem("alert")) || true;
let curr_sem_counts=JSON.parse(localStorage.getItem("curr_sem_count"))||1;
//add gpa_button_values
let cgpa_button_key=false;
let total_cgpa_scored=0;


//reset button text
document.getElementById("initial_pop_up_return_button").addEventListener('click',()=>{
    document.querySelector('.initial_alert_container').style.visibility = "hidden";
});

document.getElementById("reset_button").addEventListener('click',()=>{
    mark_storages=[];
    cpg_storages=[];
    curr_sem_counts=1;
    cgpa_button_key=false;
    document.getElementById("cpga-displayer").innerHTML = "";
    document.getElementById("cpga-displayer").style.visibility = 'hidden';
    document.getElementById("cal_cpga_button").style.visibility = 'hidden';
    document.getElementById("main_edit_button").style.visibility = 'hidden';
    main_display_changer();
})

//input_checker
function error_catcher(score,element_id){
    if(score>=0 && score<=10){
        return true
    }else{
        navigator.vibrate(200);
        const container = document.getElementById(`${element_id}`);
            container.classList.add('vibrate');
            setTimeout(() => {
                container.classList.remove('vibrate');
            }, 400);
        return false;
    }
}

function error_catcher_sem(score,element_id){
    if(score>=0 && score<=8){
        return true
    }else{
        navigator.vibrate(200);
        const container = document.getElementById(`${element_id}`);
            container.classList.add('vibrate');
            setTimeout(() => {
                container.classList.remove('vibrate');
            }, 400);
        return false;
    }
}

function error_handler(from_sem,to_sem){
    if(from_sem>=to_sem){
        navigator.vibrate(200);
        let container = document.getElementById('cgpa_to');
        container.classList.add('vibrate');
        setTimeout(() => {
            container.classList.remove('vibrate');
        }, 400);
        return false;
    }
    return true;
}

function grade_adder(){
    if(error_catcher(parseFloat(document.getElementById("cpg_scored").value),"cpg_scored")){
        cpg_storages.push({curr_sem_counts:curr_sem_counts,gpa:document.getElementById("cpg_scored").value});
        mark_storages.push({curr_sem_counts:null});
        curr_sem_counts++;
        main_display_changer();
        document.getElementById("cpg_scored").value='';
        document.querySelector(".pop_up_container").style.visibility='hidden';
    }
}
document.getElementById("add_sem_gpa_button").addEventListener('click',()=>{
    document.querySelector(".pop_up_container").style.visibility='visible';
    document.getElementById("cal_cpga_button").style.visibility = 'visible';
    document.getElementById("pop_up_sem_text").innerHTML=curr_sem_counts;
    document.getElementById("cpg_scored").focus();
});
document.getElementById("cpg_scored").addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        grade_adder();
    }
});

document.getElementById("submit_button").addEventListener('click',()=>{
    grade_adder();
});
document.getElementById("dont_know_button").addEventListener('click',()=>{
    document.querySelector(".pop_up_container").style.visibility='hidden';
    localStorage.setItem("curr_sem_count",JSON.stringify(curr_sem_counts));
    localStorage.setItem("mark_storage",JSON.stringify(mark_storages));
    localStorage.setItem("cpg_storage",JSON.stringify(cpg_storages));
    window.location.href="gpa-page/index.html";
})

let container=document.querySelector(".container_1");

function main_display_changer(){
    if(cpg_storages.length!=0){
        let inner_text='';
        cpg_storages.forEach((Element)=>{
            inner_text+=`<div id="sem-${Element.curr_sem_counts}"       class="each_semcontainer">
                    <div><p>SEM ${Element.curr_sem_counts}</p></div>
                    <div><p>${Element.gpa}</p></div>
                </div>`
        })
        container.innerHTML=inner_text;
        if(!cgpa_button_key){
            document.querySelector('.predict_container').style.visibility='visible';
            document.getElementById("main_edit_button").style.visibility='visible';
        }else{
            document.querySelector('.predict_container').style.visibility='hidden';
            document.getElementById("main_edit_button").style.visibility='hidden';
            document.getElementById("cal_cpga_button").style.visibility='visible';
        }   
        
    }else{
        container.innerHTML="";
        document.querySelector('.predict_container').style.visibility='hidden';
    }

}


document.getElementById("cal_cpga_button").addEventListener('click',()=>{
    if(cgpa_button_key){
        let total_gpa=total_cgpa_scored;
        let cal_sem=1;
        cpg_storages.forEach((Element)=>{
            if(Element.gpa !="NOT GIVEN"){
            total_gpa+=parseFloat(Element.gpa);
            cal_sem++;
            }
            
        });
        console.log(total_gpa);
        console.log(cal_sem);
        document.getElementById("cpga-displayer").innerHTML = (total_gpa/cal_sem).toFixed(3);
    }else{
        let total_gpa=0;
        cpg_storages.forEach((Element)=>{
        total_gpa+=parseFloat(Element.gpa);
        })
        document.getElementById("cpga-displayer").innerHTML = ((total_gpa / ((curr_sem_counts - 1) * 10))*10).toFixed(3);
    }
    document.getElementById("congrs-lottie-animation").style.visibility='visible';
    setInterval(()=>{
        document.getElementById("congrs-lottie-animation").style.visibility='hidden';
    },3000);
    document.getElementById("cpga-displayer").style.visibility='visible';
})

//edit main container
document.getElementById("main_edit_button").addEventListener('click',()=>{
    document.querySelector(".edit_options_container").style.visibility='visible';
})
document.getElementById("return_button").addEventListener('click',()=>{
    document.querySelector(".edit_options_container").style.visibility='hidden';
})

main_display_changer(); //!rendering the page one time 