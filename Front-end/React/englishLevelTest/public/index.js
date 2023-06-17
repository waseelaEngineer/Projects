//button more pages
function setupTabs(){
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", () => {
                   
            const tabNumber = button.dataset.forTab;
            const tabToActivate = document.querySelector(`.content[data-tab="${tabNumber}"]`); 
    
            document.querySelectorAll(".content").forEach(tab => {
                tab.classList.remove("content--active");
                document.getElementById('menu').value="no";
            });
            tabToActivate.classList.add("content--active");
         });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});

//button more function
function toggle(){
    let s = document.getElementById('sidebar');
    let t = document.getElementById('menu');
    if (t.value == "no"){
        t.value="yes";
        s.classList.add("content--active");
    }
    else {
        t.value="no";
        s.classList.remove("content--active");
    }
}

//start button function
function start(){
    let a = document.getElementById('mcq1');
    document.querySelectorAll(".content").forEach(tab => {
        tab.classList.remove("content--active");
        a.classList.add("content--active");
    });
    document.documentElement.scrollTop=0; 
}

//mcq1 button function
function mcq1(){

    const mcq11 = document.querySelectorAll('input[name="quation11"]');
    const mcq12 = document.querySelectorAll('input[name="quation12"]');
    const mcq13 = document.querySelectorAll('input[name="quation13"]');
    const mcq14 = document.querySelectorAll('input[name="quation14"]');
    const mcq15 = document.querySelectorAll('input[name="quation15"]');

    let q11=0; let q12=0; let q13=0; let q14=0; let q15=0;
        
    for ( const a of mcq11 ){ if (a.checked){ q11 = a.value; break;}}
    for ( const a of mcq12 ){ if (a.checked){ q12 = a.value; break;}}
    for ( const a of mcq13 ){ if (a.checked){ q13 = a.value; break;}}
    for ( const a of mcq14 ){ if (a.checked){ q14 = a.value; break;}}    
    for ( const a of mcq15 ){ if (a.checked){ q15 = a.value; break;}}
            
    if ( q11==0 || q12==0 || q13==0 || q14==0 || q15==0 ){
            document.getElementById('mcq1e').innerHTML = "You must answer all questions before proceeding.";
        } 
    else{
        if (q11 == 'Only for half an hour.'){score++;}
        if (q12 == 'We cant decide.'){score++;}
        if (q13 == 'Would you like some help?'){score++;}
        if (q14 == 'Ill just check for you.'){score++;}
        if (q15 == 'Im too tired.'){score++;}

        let a = document.getElementById('mcq2');
        document.querySelectorAll(".content").forEach(tab => {
        tab.classList.remove("content--active");
        a.classList.add("content--active");});
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0; 
    };
}

//mcq2 button function
function mcq2(){
    
    const mcq21 = document.querySelectorAll('input[name="quation21"]');
    const mcq22 = document.querySelectorAll('input[name="quation22"]');
    const mcq23 = document.querySelectorAll('input[name="quation23"]');
    const mcq24 = document.querySelectorAll('input[name="quation24"]');
    const mcq25 = document.querySelectorAll('input[name="quation25"]');

    let q21=0; let q22=0; let q23=0; let q24=0; let q25=0;
        
    for ( const a of mcq21 ){ if (a.checked){ q21 = a.value; break;}}
    for ( const a of mcq22 ){ if (a.checked){ q22 = a.value; break;}}
    for ( const a of mcq23 ){ if (a.checked){ q23 = a.value; break;}}
    for ( const a of mcq24 ){ if (a.checked){ q24 = a.value; break;}}    
    for ( const a of mcq25 ){ if (a.checked){ q25 = a.value; break;}}
            
    if ( q21==0 || q22==0 || q23==0 || q24==0 || q25==0 ){
            document.getElementById('mcq2e').innerHTML = "You must answer all questions before proceeding.";
        }
    else{

        if (q21 == 'edge'){score++;}
        if (q22 == 'mean'){score++;}
        if (q23 == 'with'){score++;}
        if (q24 == 'giving'){score++;}
        if (q25 == 'to eating'){score++;}

        let a = document.getElementById('mcq3');
        document.querySelectorAll(".content").forEach(tab => {
        tab.classList.remove("content--active");
        a.classList.add("content--active");});
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0; 
    };
}

//mcq3 button functon
function mcq3(){
    
    const mcq31 = document.querySelectorAll('input[name="quation31"]');
    const mcq32 = document.querySelectorAll('input[name="quation32"]');
    const mcq33 = document.querySelectorAll('input[name="quation33"]');
    const mcq34 = document.querySelectorAll('input[name="quation34"]');
    const mcq35 = document.querySelectorAll('input[name="quation35"]');

    let q31=0; let q32=0; let q33=0; let q34=0; let q35=0; 
        
    for ( const a of mcq31 ){ if (a.checked){ q31 = a.value; break;}}
    for ( const a of mcq32 ){ if (a.checked){ q32 = a.value; break;}}
    for ( const a of mcq33 ){ if (a.checked){ q33 = a.value; break;}}
    for ( const a of mcq34 ){ if (a.checked){ q34 = a.value; break;}}    
    for ( const a of mcq35 ){ if (a.checked){ q35 = a.value; break;}}
            
    if ( q31==0 || q32==0 || q33==0 || q34==0 || q35==0 ){
            document.getElementById('mcq3e').innerHTML = "You must answer all questions before proceeding.";
        } 
    else{

        if (q31 == 'that'){score++;}
        if (q32 == 'ordered'){score++;}
        if (q33 == 'about'){score++;}
        if (q34 == 'almost'){score++;}
        if (q35 == 'unfasten'){score++;}

        let a = document.getElementById('mcq4');
        document.querySelectorAll(".content").forEach(tab => {
        tab.classList.remove("content--active");
        a.classList.add("content--active");});
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0; 
    };
}

//mcq4 button function
function mcq4(){
    
    const mcq41 = document.querySelectorAll('input[name="quation41"]');
    const mcq42 = document.querySelectorAll('input[name="quation42"]');
    const mcq43 = document.querySelectorAll('input[name="quation43"]');
    const mcq44 = document.querySelectorAll('input[name="quation44"]');
    const mcq45 = document.querySelectorAll('input[name="quation45"]');

    let q41=0; let q42=0; let q43=0; let q44=0; let q45=0; 
        
    for ( const a of mcq41 ){ if (a.checked){ q41 = a.value; break;}}
    for ( const a of mcq42 ){ if (a.checked){ q42 = a.value; break;}}
    for ( const a of mcq43 ){ if (a.checked){ q43 = a.value; break;}}
    for ( const a of mcq44 ){ if (a.checked){ q44 = a.value; break;}}    
    for ( const a of mcq45 ){ if (a.checked){ q45 = a.value; break;}}
            
    if ( q41==0 || q42==0 || q43==0 || q44==0 || q45==0 ){
            document.getElementById('mcq4e').innerHTML = "You must answer all questions before proceeding.";
        } 
    else{

        if (q41 == 'opportunity'){score++;}
        if (q42 == 'little'){score++;}
        if (q43 == 'explained'){score++;}
        if (q44 == 'sides'){score++;}
        if (q45 == 'highly'){score++;}

        let a = document.getElementById('result');
        document.querySelectorAll(".content").forEach(tab => {
        tab.classList.remove("content--active");
        a.classList.add("content--active");});
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0; 
    };
}

//return to home button function
function returnhome(){
    let a = document.getElementById('startpage');
    document.querySelectorAll(".content").forEach(tab => {
        tab.classList.remove("content--active");
        a.classList.add("content--active");
    });
    document.documentElement.scrollTop=0; 
}

{//all quations divs
{//q11
    const a111 = document.getElementById('a111');
    a111.addEventListener("click", () => 
    {   
        document.getElementById('b111').click();
        document.querySelectorAll(".b11").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a111.classList.add("border-active");
    })
        
    const a112 = document.getElementById('a112');
    a112.addEventListener("click", () => 
    {   
        document.getElementById('b112').click();
        document.querySelectorAll(".b11").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a112.classList.add("border-active");
    }) 

    const a113 = document.getElementById('a113');
    a113.addEventListener("click", () => 
    {   
        document.getElementById('b113').click();
        document.querySelectorAll(".b11").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a113.classList.add("border-active");
    }) 
}

{//q12
    const a121 = document.getElementById('a121');
    a121.addEventListener("click", () => 
    {   
        document.getElementById('b121').click();
        document.querySelectorAll(".b12").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a121.classList.add("border-active");
    }) 

    const a122 = document.getElementById('a122');
    a122.addEventListener("click", () => 
    {   
        document.getElementById('b122').click();
        document.querySelectorAll(".b12").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a122.classList.add("border-active");
    }) 

    const a123 = document.getElementById('a123');
    a123.addEventListener("click", () => 
    {   
        document.getElementById('b123').click();
        document.querySelectorAll(".b12").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a123.classList.add("border-active");
    }) 
}

{//q13
    const a131 = document.getElementById('a131');
    a131.addEventListener("click", () => 
    {   
        document.getElementById('b131').click();
        document.querySelectorAll(".b13").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a131.classList.add("border-active");
    }) 

    const a132 = document.getElementById('a132');
    a132.addEventListener("click", () => 
    {   
        document.getElementById('b132').click();
        document.querySelectorAll(".b13").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a132.classList.add("border-active");
    }) 

    const a133 = document.getElementById('a133');
    a133.addEventListener("click", () => {   
        document.getElementById('b133').click();
        document.querySelectorAll(".b13").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a133.classList.add("border-active");
    }) 
}

{//q14
    const a141 = document.getElementById('a141');
    a141.addEventListener("click", () => 
    {   
        document.getElementById('b141').click();
        document.querySelectorAll(".b14").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a141.classList.add("border-active");
    }) 

    const a142 = document.getElementById('a142');
    a142.addEventListener("click", () => 
    {   
        document.getElementById('b142').click();
        document.querySelectorAll(".b14").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a142.classList.add("border-active");
    }) 

    const a143 = document.getElementById('a143');
    a143.addEventListener("click", () => 
    {   
        document.getElementById('b143').click();
        document.querySelectorAll(".b14").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a143.classList.add("border-active");
    }) 
}

{//q15
    const a151 = document.getElementById('a151');
    a151.addEventListener("click", () => 
    {   
        document.getElementById('b151').click();
        document.querySelectorAll(".b15").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a151.classList.add("border-active");
    }) 
        
    const a152 = document.getElementById('a152');
    a152.addEventListener("click", () => 
    {   
        document.getElementById('b152').click();
        document.querySelectorAll(".b15").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a152.classList.add("border-active");
    }) 

    const a153 = document.getElementById('a153');
    a153.addEventListener("click", () => 
    {   
        document.getElementById('b153').click();
        document.querySelectorAll(".b15").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a153.classList.add("border-active");
    }) 
}

{//q21

    const a211 = document.getElementById('a211');
    a211.addEventListener("click", () => 
    {   
        document.getElementById('b211').click();
        document.querySelectorAll(".b21").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a211.classList.add("border-active");
    })   
     
    const a212 = document.getElementById('a212');
    a212.addEventListener("click", () => 
    {   
        document.getElementById('b212').click();
        document.querySelectorAll(".b21").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a212.classList.add("border-active");
    }) 

    const a213 = document.getElementById('a213');
    a213.addEventListener("click", () => 
    {   
        document.getElementById('b213').click();
        document.querySelectorAll(".b21").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a213.classList.add("border-active");
    }) 
}

{//q22
    const a221 = document.getElementById('a221');
    a221.addEventListener("click", () => 
    {   
        document.getElementById('b221').click();
        document.querySelectorAll(".b22").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a221.classList.add("border-active");
    }) 
    
    const a222 = document.getElementById('a222');
    a222.addEventListener("click", () => 
    {   
        document.getElementById('b222').click();
        document.querySelectorAll(".b22").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a222.classList.add("border-active");
    }) 

    const a223 = document.getElementById('a223');
    a223.addEventListener("click", () => 
    {   
        document.getElementById('b223').click();
        document.querySelectorAll(".b22").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a223.classList.add("border-active");
    }) 
}

{//q23
    const a231 = document.getElementById('a231');
    a231.addEventListener("click", () => 
    {   
        document.getElementById('b231').click();
        document.querySelectorAll(".b23").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a231.classList.add("border-active");
    }) 
    
    const a232 = document.getElementById('a232');
    a232.addEventListener("click", () => 
    {   
        document.getElementById('b232').click();
        document.querySelectorAll(".b23").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a232.classList.add("border-active");
    }) 
    
    const a233 = document.getElementById('a233');
    a233.addEventListener("click", () => 
    {   
        document.getElementById('b233').click();
        document.querySelectorAll(".b23").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a233.classList.add("border-active");
    }) 
}

{//q24
    const a241 = document.getElementById('a241');
    a241.addEventListener("click", () => 
    {   
        document.getElementById('b241').click();
        document.querySelectorAll(".b24").forEach(b => 
            {
            b.classList.remove("border-active");
            });
        a241.classList.add("border-active");
    }) 
    
    const a242 = document.getElementById('a242');
    a242.addEventListener("click", () => 
    {   
        document.getElementById('b242').click();
        document.querySelectorAll(".b24").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a242.classList.add("border-active");
    }) 
    
    const a243 = document.getElementById('a243');
    a243.addEventListener("click", () => 
    {   
        document.getElementById('b243').click();
        document.querySelectorAll(".b24").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a243.classList.add("border-active");
    }) 
}

{//q25
    const a251 = document.getElementById('a251');
    a251.addEventListener("click", () => 
    {   
        document.getElementById('b251').click();
        document.querySelectorAll(".b25").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a251.classList.add("border-active");
    }) 
        
    const a252 = document.getElementById('a252');
    a252.addEventListener("click", () => 
    {   
        document.getElementById('b252').click();
        document.querySelectorAll(".b25").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a252.classList.add("border-active");
    }) 
    
    const a253 = document.getElementById('a253');
    a253.addEventListener("click", () => 
    {   
        document.getElementById('b253').click();
        document.querySelectorAll(".b25").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a253.classList.add("border-active");
    }) 
}

{//q31
    const a311 = document.getElementById('a311');
    a311.addEventListener("click", () => 
    {   
        document.getElementById('b311').click();
        document.querySelectorAll(".b31").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a311.classList.add("border-active");
    })   
     
    const a312 = document.getElementById('a312');
    a312.addEventListener("click", () => 
    {   
        document.getElementById('b312').click();
        document.querySelectorAll(".b31").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a312.classList.add("border-active");
    }) 

    const a313 = document.getElementById('a313');
    a313.addEventListener("click", () => 
    {   
        document.getElementById('b313').click();
        document.querySelectorAll(".b31").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a313.classList.add("border-active");
    }) 
}
{//q32
    const a321 = document.getElementById('a321');
    a321.addEventListener("click", () => 
    {   
        document.getElementById('b321').click();
        document.querySelectorAll(".b32").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a321.classList.add("border-active");
    }) 
    
    const a322 = document.getElementById('a322');
    a322.addEventListener("click", () => 
    {   
        document.getElementById('b322').click();
        document.querySelectorAll(".b32").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a322.classList.add("border-active");
    }) 

    const a323 = document.getElementById('a323');
    a323.addEventListener("click", () => 
    {   
        document.getElementById('b323').click();
        document.querySelectorAll(".b32").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a323.classList.add("border-active");
    }) 
}

{//q33
    const a331 = document.getElementById('a331');
    a331.addEventListener("click", () => 
    {   
        document.getElementById('b331').click();
        document.querySelectorAll(".b33").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a331.classList.add("border-active");
    }) 
    
    const a332 = document.getElementById('a332');
    a332.addEventListener("click", () => 
    {   
        document.getElementById('b332').click();
        document.querySelectorAll(".b33").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a332.classList.add("border-active");
    }) 
    
    const a333 = document.getElementById('a333');
    a333.addEventListener("click", () => 
    {   
        document.getElementById('b333').click();
        document.querySelectorAll(".b33").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a333.classList.add("border-active");
    }) 
}

{//q34
    const a341 = document.getElementById('a341');
    a341.addEventListener("click", () => 
    {   
        document.getElementById('b341').click();
        document.querySelectorAll(".b34").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a341.classList.add("border-active");
    }) 
    
    const a342 = document.getElementById('a342');
    a342.addEventListener("click", () => 
    {   
        document.getElementById('b342').click();
        document.querySelectorAll(".b34").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a342.classList.add("border-active");
    }) 
    
    const a343 = document.getElementById('a343');
    a343.addEventListener("click", () => 
    {   
        document.getElementById('b343').click();
        document.querySelectorAll(".b34").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a343.classList.add("border-active");
    }) 
}

{//q35
    const a351 = document.getElementById('a351');
    a351.addEventListener("click", () => 
    {   
        document.getElementById('b351').click();
        document.querySelectorAll(".b35").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a351.classList.add("border-active");
    }) 
        
    const a352 = document.getElementById('a352');
    a352.addEventListener("click", () => 
    {   
        document.getElementById('b352').click();
        document.querySelectorAll(".b35").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a352.classList.add("border-active");
    }) 
    
    const a353 = document.getElementById('a353');
    a353.addEventListener("click", () => 
    {   
        document.getElementById('b353').click();
        document.querySelectorAll(".b35").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a353.classList.add("border-active");
    }) 
}

{//q41
    const a411 = document.getElementById('a411');
    a411.addEventListener("click", () => 
    {   
        document.getElementById('b411').click();
        document.querySelectorAll(".b41").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a411.classList.add("border-active");
    })   
     
    const a412 = document.getElementById('a412');
    a412.addEventListener("click", () => 
    {   
        document.getElementById('b412').click();
        document.querySelectorAll(".b41").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a412.classList.add("border-active");
    }) 

    const a413 = document.getElementById('a413');
    a413.addEventListener("click", () => 
    {   
        document.getElementById('b413').click();
        document.querySelectorAll(".b41").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a413.classList.add("border-active");
    }) 
}

{//q42
    const a421 = document.getElementById('a421');
    a421.addEventListener("click", () => 
    {   
        document.getElementById('b421').click();
        document.querySelectorAll(".b42").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a421.classList.add("border-active");
    }) 
    
    const a422 = document.getElementById('a422');
    a422.addEventListener("click", () => 
    {   
        document.getElementById('b422').click();
        document.querySelectorAll(".b42").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a422.classList.add("border-active");
    }) 

    const a423 = document.getElementById('a423');
    a423.addEventListener("click", () => 
    {   
        document.getElementById('b423').click();
        document.querySelectorAll(".b42").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a423.classList.add("border-active");
    }) 
}

{//q43
    const a431 = document.getElementById('a431');
    a431.addEventListener("click", () => 
    {   
        document.getElementById('b431').click();
        document.querySelectorAll(".b43").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a431.classList.add("border-active");
    }) 
    
    const a432 = document.getElementById('a432');
    a432.addEventListener("click", () => 
    {   
        document.getElementById('b432').click();
        document.querySelectorAll(".b43").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a432.classList.add("border-active");
    }) 
    
    const a433 = document.getElementById('a433');
    a433.addEventListener("click", () => 
    {   
        document.getElementById('b433').click();
        document.querySelectorAll(".b43").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a433.classList.add("border-active");
    }) 
}

{//q44
    const a441 = document.getElementById('a441');
    a441.addEventListener("click", () => 
    {   
        document.getElementById('b441').click();
        document.querySelectorAll(".b44").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a441.classList.add("border-active");
    }) 
    
    const a442 = document.getElementById('a442');
    a442.addEventListener("click", () => 
    {   
        document.getElementById('b442').click();
        document.querySelectorAll(".b44").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a442.classList.add("border-active");
    }) 
    
    const a443 = document.getElementById('a443');
    a443.addEventListener("click", () => 
    {   
        document.getElementById('b443').click();
        document.querySelectorAll(".b44").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a443.classList.add("border-active");
    }) 
}

{//q45
    const a451 = document.getElementById('a451');
    a451.addEventListener("click", () => 
    {   
        document.getElementById('b451').click();
        document.querySelectorAll(".b45").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a451.classList.add("border-active");
    }) 
        
    const a452 = document.getElementById('a452');
    a452.addEventListener("click", () => 
    {   
        document.getElementById('b452').click();
        document.querySelectorAll(".b45").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a452.classList.add("border-active");
    }) 
    
    const a453 = document.getElementById('a453');
    a453.addEventListener("click", () => 
    {   
        document.getElementById('b453').click();
        document.querySelectorAll(".b45").forEach(b => 
            {
                b.classList.remove("border-active");
            });
        a453.classList.add("border-active");
    }) 
}
}

//result page button
var score=0;
var guest;
var level;
function button (){
    
    var content = document.getElementById("input").value.replace(/ /g, "_") +":   "+(score*5)+"%";
    var content2 = document.getElementById("input").value.replace(/ /g, "_");

    if (content2 == "" ){document.querySelectorAll(".namemust").forEach(a => {a.classList.add("show");});}
    else{
    
        document.querySelectorAll(".enter").forEach(z => {z.classList.remove("show");});
        document.querySelectorAll(".input").forEach(z => {z.classList.remove("show");});
        document.querySelectorAll(".nameinput").forEach(z => {z.classList.remove("show");});
        document.querySelectorAll(".namemust").forEach(z => {z.classList.remove("show");});
        document.querySelectorAll(".Result").forEach(z => {z.classList.add("show");});

        waseela();   

        async function waseela (){
            const data = {content};
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            };
            const response = await fetch('/api', options);
            const Data = await response.json();
            guest = Data.Result;

            if (score < 4){level = "Elementary"}
            if (score < 7 && score > 3){level = "Pre_Intermediate"}
            if (score < 10 && score > 6){level = "Intermediate"}
            if (score < 13 && score > 9){level = "Upper_Intermediate"}
            if (score < 17 && score > 12){level = "Advanced"}
            if (score < 21 && score > 16){level = "Proficient"}

            document.getElementById("Result").innerHTML = "<br><center>Congratulations<br><br>" +content2+
            "<br><br><br><br>*Your Details*</center><br><br>Score: "+ score +
            " out of 20<br><br>Degree"+":   "+(score*5)+"%"+"<br><br>Level: "+level+
            "<br><br><br><br><center>*Full score list*</center><br><br>"+ guest;
        };
    }
}


// score button in more function
function list(){

    waseela2();   

    async function waseela2 (){

        let content = "donothing";
        const data = {content};
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const Data = await response.json();
        guest = Data.Result;

        document.getElementById("showlist").innerHTML = "<br>"+guest;
    };            
}
    