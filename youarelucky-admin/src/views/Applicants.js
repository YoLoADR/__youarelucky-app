import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import CircularLoading from "../components/CircularLoading";
import { Query } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  ADD_APPLICANT,
  UPDATE_APPLICANT,
  DELETE_APPLICANT
} from "../schema/applicantSchema";

const APPLICANT_QUERY = gql`
  {
    getApplicants(orderBy: createdAt_ASC) {
      applicants {
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

export default function Applicants() {
  const [postApplicant] = useMutation(ADD_APPLICANT);
  const [updateApplicant] = useMutation(UPDATE_APPLICANT);
  const [deleteApplicant] = useMutation(DELETE_APPLICANT);

  const updateApplicantRecord = async input => {
    const res = await updateApplicant({ variables: input });
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
    <Query query={APPLICANT_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <CircularLoading />;
        if (error) return <div>Error</div>;

        const applicants = data.getApplicants.applicants;

        return (
          <div>
            <showObj />
            <MaterialTable
              title="All Applicants"
              columns={columns}
              data={applicants}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const tblData = applicants;
                      tblData.push(newData);
                      postApplicant({ variables: newData });
                    }, 600);
                  }),

                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      const tblData = applicants;
                      tblData[tblData.indexOf(oldData)] = newData;
                      updateApplicantRecord(newData);
                      resolve();
                    }, 600);
                  }),

                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      const tblData = applicants;
                      tblData.splice(tblData.indexOf(oldData), 1);
                      deleteApplicant({ variables: oldData });
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
