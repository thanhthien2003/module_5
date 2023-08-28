import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";

function ListContract() {
    return(
        <>
        <Header />
        <table className="table table-bordered">
        <thead>
        <tr>
        <th>STT</th>
        <th>Contract number</th>
        <th>Day start</th>
        <th>Day end</th>
        <th>Down Payment</th>
        <th>Total amount</th>
    </tr>
        </thead>
        <tbody>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
        </tbody>
      </table>
      <Footer/>
        </>
    )
}
export default ListContract;