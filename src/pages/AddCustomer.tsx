import {Link} from "react-router";

export function  AddCustomer() {
    return (
        <div>
            <h1>Add Customer</h1>
            <br></br>
            <h3>Name</h3>
            <input type="text"></input><br></br>
            <h3>Email</h3>
            <input type="text"></input><br></br>
            <h3>Phone</h3>
            <input type="text"></input><br></br>
            <button>Add</button>
            <Link to={"/"}>Back</Link>

        </div>
    )
}