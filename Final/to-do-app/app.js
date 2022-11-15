


//-------------------------------------
const toDoAppAddBtn = document.querySelector('#add-button');

function addUserAddForms(){
    document.querySelector('#user-action-add').innerHtml =
    `<form id="add-form">
    <input type="text" id="type" name="type" placeholder="type" />
    <br>
    <br>
    <input type="text" id="content" name="content" placeholder="content" />
    <br>
    <br>
    <input type="text" id="endDate" name="endDate" placeholder="endDate" />        
    </form>`;
}


toDoAppAddBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addUserAddForms();
    })


   

//---------------------------------------------------------------
//GET
//---------------------------------------------------------------
//POST
//---------------------------------------------------------------
//PUT
//---------------------------------------------------------------
//DELETE