import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import buttonCreate from "../css/buttonCreate.css";

function ListCustomer() {
  return (
    <>
      <Header />
      <div className="row">
        <a href="/customer/create">
        <button class="btn-customer">
          Create Customer
        </button>
      </a>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Citizen ID</th>
            <th>Phone</th>
            <th>Email</th>
            <th>type of customer</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td>
              <a className="btn btn-primary" href="editCustomer.html"><i className="fa-regular fa-pen-to-square" /></a>
            </td>
            <td>
              <a>
                <button className="btn btn-danger" title="Delete" data-bs-toggle="modal" data-bs-target="#createFacilityModal">
                  <i className="fa-regular fa-trash-can" />
                </button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </>
  )
}
export default ListCustomer;