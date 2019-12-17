import gql from "graphql-tag";

const Prospect = `{
  id
  name
  email
  lastName
  firstName
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
}`;

export const ADD_PROSPECT = gql`
  mutation PostProspect(
    $name: String!
    $email: String!
    $lastName: String
    $firstName: String
    $description: String
    $mobile: String
    $profile_image: String
    $lead_source: String
    $profession: String
    $refferalBonus: String
    $outcome: String
    $recording: Boolean
    $call_length: String
    $my_emotions: String
    $call_conclusion: String
  ) {
    postProspect(
      name: $name
      email: $email
      lastName: $lastName
      firstName: $firstName
      description: $description
      mobile: $mobile
      profile_image: $profile_image
      lead_source: $lead_source
      profession: $profession
      refferalBonus: $refferalBonus
      outcome: $outcome
      recording: $recording
      call_length: $call_length
      my_emotions: $my_emotions
      call_conclusion: $call_conclusion
    ) ${Prospect}
  }
`;

export const UPDATE_PROSPECT = gql`
    mutation updateProspect(
      $name: String,
      $email: String!,
      $lastName: String,
      $firstName: String,
      $description: String,
      $mobile: String,
      $profile_image: String,
      $lead_source: String,
      $profession: String,
      $refferalBonus: String,
      $outcome: String,
      $recording: Boolean,
      $call_length: String,
      $my_emotions: String,
      $call_conclusion: String,
      ) {
      updateProspect (
        name: $name,
        email: $email,
        lastName: $lastName,
        firstName: $firstName,
        description: $description,
        mobile: $mobile,
        profile_image: $profile_image,
        lead_source: $lead_source,
        profession: $profession,
        refferalBonus: $refferalBonus,
        outcome: $outcome,
        recording: $recording,
        call_length: $call_length,
        my_emotions: $my_emotions,
        call_conclusion: $call_conclusion,
        ) ${Prospect}
      }
`;

export const DELETE_PROSPECT = gql`
    mutation deleteProspect(
      $email: String!,
      ) {
        deleteProspect (
        email: $email,
        ) ${Prospect}
      }
`;
