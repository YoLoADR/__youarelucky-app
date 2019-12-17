import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import CircularLoading from "../components/CircularLoading";
import { Query } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  ADD_PROSPECT,
  UPDATE_PROSPECT,
  DELETE_PROSPECT
} from "../schema/prospectSchema";

const PROSPECT_QUERY = gql`
  {
    getProspects(orderBy: createdAt_ASC) {
      prospects {
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

export default function Prospects() {
  const [postProspect] = useMutation(ADD_PROSPECT);
  const [updateProspect] = useMutation(UPDATE_PROSPECT);
  const [deleteProspect] = useMutation(DELETE_PROSPECT);

  const updateProspectRecord = async input => {
    const res = await updateProspect({ variables: input });
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
    <Query query={PROSPECT_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <CircularLoading />;
        if (error) return <div>Error</div>;

        const prospects = data.getProspects.prospects;

        return (
          <div>
            <showObj />
            <MaterialTable
              title="All Prospects"
              columns={columns}
              data={prospects}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const tblData = prospects;
                      tblData.push(newData);
                      postProspect({ variables: newData });
                    }, 600);
                  }),

                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      const tblData = prospects;
                      tblData[tblData.indexOf(oldData)] = newData;
                      updateProspectRecord(newData);
                      resolve();
                    }, 600);
                  }),

                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const tblData = prospects;
                      tblData.splice(tblData.indexOf(oldData), 1);
                      deleteProspect({ variables: oldData });
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
