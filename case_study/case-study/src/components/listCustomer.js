import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export function ListCustomer() {
    return(
        <>
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
        </>
    )
}