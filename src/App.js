import React from "react";



const App = props => {
  const [email, setEmail] = React.useState("");

  const fetchUserEmail = async () => {
    const response = await fetch("https://upmostly.com/tutorials/how-to-handle-promises-in-react");
    const { email } = await response.json();
    setEmail(email);
  };

  const promisd=()=>{
    let a=23
    let b=25
    new Promise((resolve, reject)=>{
      {a>b ? `no this statement wrong ${resolve()}`:`YES ${reject()}`}

      
      

    }).then(()=>{
      console.log("yes")
    }).catch(error)
    console.log(error);
  }

  promisd()

  return (
    <div>
      <h1>A user</h1>
      <p>{email}</p>
      <button onClick={fetchUserEmail}>Fetch Email</button>
    </div>
  )
}

export default App