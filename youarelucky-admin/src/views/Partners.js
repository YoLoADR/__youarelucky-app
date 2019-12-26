import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import CircularLoading from "../components/CircularLoading";
import { Query } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  ADD_PARTNER,
  UPDATE_PARTNER,
  DELETE_PARTNER
} from "../schema/partnerSchema";

const PARTNER_QUERY = gql`
  {
    getPartners(orderBy: createdAt_ASC) {
      partners {
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

export default function Partners() {
  const [postPartner] = useMutation(ADD_PARTNER);
  const [updatePartner] = useMutation(UPDATE_PARTNER);
  const [deletePartner] = useMutation(DELETE_PARTNER);

  const updatePartnerRecord = async input => {
    const res = await updatePartner({ variables: input });
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
    <Query query={PARTNER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <CircularLoading />;
        if (error) return <div>Error</div>;

        const partners = data.getPartners.partners;

        return (
          <div>
            <showObj />
            <MaterialTable
              title="All Partners"
              columns={columns}
              data={partners}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const tblData = partners;
                      tblData.push(newData);
                      postPartner({ variables: newData });
                    }, 600);
                  }),

                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      const tblData = partners;
                      tblData[tblData.indexOf(oldData)] = newData;
                      updatePartnerRecord(newData);
                      resolve();
                    }, 600);
                  }),

                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const tblData = partners;
                      tblData.splice(tblData.indexOf(oldData), 1);
                      deletePartner({ variables: oldData });
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
