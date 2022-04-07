import React from 'react'

function List() {
  return (
    <div>
    <p>Mange Your Stuff</p>
    <AddItem />
   </div>
  )
}

function AddItem(){
    return(
    <form>
        <h3 class="Add">Todays</h3>
        <div class='Text'>
        <input type='text' id='text-form'/>
        </div>
        <div class='DateTime'>
        <input type='datetime-local' id=''/>
        </div>
        <div class='description'>
        <input type='Text' id='Description'/>
        </div>
    </form>
    )
}

export default List;