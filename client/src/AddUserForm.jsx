import { useState } from "react"
 
const AddUserForm = ()=>{
    const [newuser , setnewuser] = useState({name:"" , email:"",age:0})
 
   async function submitHandler(err){
        e.preventDefault()

        try {
                const response = await fetch("http://localhost:8000/api/users", {
                method: "POST",
                header: {"Content-type: ": "application/json"}
            })
        } catch (err) {
            console.error(`some problems with your mum: ${err.message}`)
        }
    }
 
    return(
        <>
            <h4>Add new juser</h4>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="wprowadz imie" value={newuser.name} onChange={e=>setnewuser({...newuser , name: e.target.value})}/>
                <input type="email" placeholder="wprowadz email" value={newuser.email} onChange={e=>setnewuser({...newuser , email: e.target.value})}/>
                <input type="number" placeholder="wprowadz wiek" value={newuser.age}onChange={e=>setnewuser({...newuser , age: e.target.value})}/>
 
                <button type="submit" >Add user</button>
            </form>
        </>
    )
}
export default AddUserForm