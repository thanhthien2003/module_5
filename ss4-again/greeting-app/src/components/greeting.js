const { useState, Component, useEffect } = require("react");

function Greeting() {
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();

    const handleFirstNameChange = (event) => {
        setFirstName(event)
    }
    const handleLastNameChange = (event) => {
        setLastName(event)
    }
    
    useEffect(() => {

    },[firstName,lastName])

    return(
        <>
        <input value={firstName} onChange={setFirstName}/>
        <br/>
        <input value={lastName} onChange={setLastName}/>
        <br/>
        <p>
            Hello,{' '}
            <span>
                {firstName} {lastName}
            </span>
        </p>
        </>
    )
}
export default Greeting