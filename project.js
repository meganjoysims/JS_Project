let Reftable=document.createElement("table", id="reftable")

function validateForm(){
    let validation=true;
    
     for(let i=0;i<document.forms[0].elements.length;i++){

         

         if(document.forms[0].elements[i].value==""){
             
             document.getElementById("error"+i).style.visibility="visible";
             validation=false;
         }
     }
     return validation;

     
 }

function addNewRecord(){

    let formfilled=validateForm();
    if(formfilled==true){
    EmployeeInfo.push(
        {
            "ninumber":document.getElementById("ninumber").value,
            "fullname":document.getElementById("fullname").value,
            "phone":document.getElementById("phone").value,
            "address":document.getElementById("address").value,
            "department":document.getElementById("department").value,

        }
    

    );
    }
    
}

function updateRecord(ref, index){
    ref.cells[0].innerHTML="<input id='nin' type='text' value='"+EmployeeInfo[index].ninumber+"'>";
    ref.cells[1].innerHTML="<input id='fn' type='text' value='"+EmployeeInfo[index].fullname+"'>";
    ref.cells[2].innerHTML="<input id='ph' type='text' value='"+EmployeeInfo[index].phone+"'>";
    ref.cells[3].innerHTML="<input id='addr' type='text' value='"+EmployeeInfo[index].address+"'>";
    ref.cells[4].innerHTML="<input id='dep' type='text' value='"+EmployeeInfo[index].department+"'>";
    
}


function showRecords(showall){


    Reftable.border=1;
    Reftable.innerHTML="";
    let Trow=document.createElement("tr");
    let data_ninumber=document.createElement("td");
    let data_fullname=document.createElement("td");
    let data_phone=document.createElement("td");
    let data_address=document.createElement("td");
    let data_department=document.createElement("td");
    let data_delete=document.createElement("td");
    let data_update=document.createElement("td");
    

    data_ninumber.innerHTML="<b> NI Number </b>";
    data_fullname.innerHTML="<b> Name </b>";
    data_phone.innerHTML="<b> Phone No </b>";
    data_address.innerHTML="<b> Address </b>";
    data_department.innerHTML="<b> Department </b>";
    data_delete.innerHTML="<b> Delete </b>";
    data_update.innerHTML="<b> Update </b>";
    

     Trow.appendChild(data_ninumber);
     Trow.appendChild(data_fullname);
     Trow.appendChild(data_phone);
     Trow.appendChild(data_address);
     Trow.appendChild(data_department);
     Trow.appendChild(data_delete);
     Trow.appendChild(data_update);

            Reftable.appendChild(Trow);
            
      for(let i=0;i<EmployeeInfo.length;i++){
        if(EmployeeInfo[i].department == document.getElementById("departmentdrop").value || showall){

                let Trow=document.createElement("tr");
                
                
                let data_ninumber=document.createElement("td");
                let data_fullname=document.createElement("td");
                let data_phone=document.createElement("td");
                let data_address=document.createElement("td");
                let data_department=document.createElement("td");
                let data_delete=document.createElement("td");
                let data_update=document.createElement("td")
            
                data_ninumber.innerHTML= EmployeeInfo[i].ninumber;
                data_fullname.innerHTML= EmployeeInfo[i].fullname;
                data_phone.innerHTML= EmployeeInfo[i].phone;
                data_address.innerHTML= EmployeeInfo[i].address;
                data_department.innerHTML= EmployeeInfo[i].department;

                Trow.appendChild(data_ninumber);
                    Trow.appendChild(data_fullname);
                    Trow.appendChild(data_phone);
                    Trow.appendChild(data_address);
                    Trow.appendChild(data_department);
                    Trow.appendChild(data_delete);
                    Trow.appendChild(data_update);
    
                    Reftable.appendChild(Trow); 


                let Btn_delete=document.createElement("input");
                Btn_delete.type="button";
                Btn_delete.id="button";
                Btn_delete.value="X";
                Btn_delete.onclick=function(){
                    let choice=confirm("Are you sure you want to delete this?");
                    if (choice==true){
                        EmployeeInfo.splice(i,1);
                        showRecords(true);
                    }
                }

                
                let Btn_update=document.createElement("input");
                Btn_update.type="button";
                Btn_update.id="button";
                Btn_update.value="Update";
                Btn_update.onclick=function(){
                   

                    if(Btn_update.value=="Update"){
                        Btn_update.value="Save";
                        updateRecord(Trow, i);
                    }else{
                        let ch=confirm("Are you happy with the changes?");
                        if (ch==true){
                            
                            EmployeeInfo[i].ninumber=document.getElementById("nin").value;
                            EmployeeInfo[i].fullname=document.getElementById("fn").value;
                            EmployeeInfo[i].phone=document.getElementById("ph").value;
                            EmployeeInfo[i].address=document.getElementById("addr").value;
                            EmployeeInfo[i].department=document.getElementById("dep").value;
                            
                        }
                        
                        showRecords(true);
                        Btn_update.value="Update";
                        
                    }
                }
                    data_update.appendChild(Btn_update);
                    data_delete.appendChild(Btn_delete);  
                    
                    
        
        }
        document.body.appendChild(Reftable);

    }
}



