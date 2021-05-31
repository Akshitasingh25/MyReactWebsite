//to study useparams hooks - visit->{https://blog.logrocket.com/using-hooks-with-react-router/}
import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'

// const User = ({match}) => {
//     return (
//         <div>
//          <h1>user {match.params.fname} page</h1>
//         </div>
//     )
// }
const User = () => {

    //we use curly brces  {fname,lname} to add more than one object
    const { fname, lname } = useParams();

    const location = useLocation(); //we can get path url using useLocation
    console.log(location);

    const history=useHistory();
    console.log(history);
    return (
        <div>
            <h1>user {fname} {lname} page</h1>

            <p>My current location is {location.pathname}</p>

            {/* if else condition */}
            {location.pathname === `/User/akshita/arya` ? ( //if this is true
                // <button onClick={()=>history.goBack()}>Go Back</button>     //execute this
                <button onClick={()=>history.push("/")}>Homepage</button>     //execute this

                // else return null
            ) : null}
        </div>
    )
}

export default User
