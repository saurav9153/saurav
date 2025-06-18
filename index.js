const typing_matter = document.querySelector(selectors:'#textarea');
const sub-btn = document.querySelector(selectors:'#sub-btn');
const score = document.querySelector(selectors:'#score');
const sentences = document.querySelector(selectors: '#show-sentence')

let start_time, end_time, total_time_taken;
const starttyping=() =>{
    let randomnumber = Math.floor(x:Math.random() * sentences.length);
    show-sentences.innerhtml = sentences  [randomnumber];
    let date =ne date();
    sub-btn
}


sub-btn.addeventlistener(type:'click', listener:() =>{
    switch (sub-btn.innerText.tolowercase()){
        case "start":
            typing_matter.removeattribute(qualifiedname: 'disabled');
            starttyping();
            break;

            case "done":
                typing_matter.setattribute(qualifiedname: 'disabled' , value: 'true');
                endtypingtest();
                break;


    }
}
)
