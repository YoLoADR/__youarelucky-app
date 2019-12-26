import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import CircularLoading from "../components/CircularLoading";
import { Query } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER
} from "../schema/customerSchema";

const CUSTOMER_QUERY = gql`
  {
    getCustomers(orderBy: createdAt_ASC) {
      customers {
        id
        name
        email
        lastName
        firstName
        createdAt
        description
        mobile
        profile_image
        lead_source
        profession
        refferalBonus
        outcome
        recording
        call_length
        my_emotions
        call_conclusion
      }
    }
  }
`;

export default function Customers() {
  const [postCustomer] = useMutation(ADD_CUSTOMER);
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER);
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER);

  const updateCustomerRecord = async input => {
    const res = await updateCustomer({ variables: input });
  };

  const columns = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Pseudo", field: "name" },
    { title: "Email", field: "email" },
    { title: "Create at", field: "createdAt", editable: "never" },
    {
      title: "Profile Image",
      field: "profile_image",
      render: rowData =>
        rowData.profile_image ? (
          <img
            alt="Profile"
            src={rowData.profile_image}
            style={{ width: 50, borderRadius: "50%" }}
          />
        ) : null
    },
    { title: "Mobile", field: "mobile" },
    { title: "Call recording", field: "recording", type: "boolean" },
    { title: "Call length", field: "call_length" },
    { title: "My emotions", field: "my_emotions" },
    { title: "Call conclusion", field: "call_conclusion" },
    { title: "Refferal Bonus", field: "refferalBonus", type: "numeric" }
  ];

  return (
    <Query query={CUSTOMER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <CircularLoading />;
        if (error) return <div>Error</div>;

        const customers = data.getCustomers.customers;

        return (
          <div>
            <showObj />
            <MaterialTable
              title="All Customers"
              columns={columns}
              data={customers}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const tblData = customers;
                      tblData.push(newData);
                      postCustomer({ variables: newData });
                    }, 600);
                  }),

                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      const tblData = customers;
                      tblData[tblData.indexOf(oldData)] = newData;
                      updateCustomerRecord(newData);
                      resolve();
                    }, 600);
                  }),

                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const tblData = customers;
                      tblData.splice(tblData.indexOf(oldData), 1);
                      deleteCustomer({ variables: oldData });
                    }, 600);
                  })
              }}
            />
          </div>
        );
      }}
    </Query>
  );
}
