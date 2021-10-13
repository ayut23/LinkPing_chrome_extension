let Leads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("Leads"))

if(leadsFromLocalStorage){
    Leads = leadsFromLocalStorage
    render(Leads)
}

function render(myLeads){
    let listResults = ""
       for(let i=0 ; i<myLeads.length; i++ ){
       listResults += 
       
       `<li><a target='_blank' 
        href='${myLeads[i]}'>${myLeads[i]}</a></li>`
       
       }
       ulEl.innerHTML = listResults
    }

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    Leads = []
    render(Leads)
})

inputBtn.addEventListener("click", function(){
    Leads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("Leads", JSON.stringify(Leads))
    render(Leads)
    
})

