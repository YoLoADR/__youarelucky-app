import gql from "graphql-tag";

const Customer = `{
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

export const ADD_CUSTOMER = gql`
  mutation PostCustomer(
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
    postCustomer(
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
    ) ${Customer}
  }
`;

export const UPDATE_CUSTOMER = gql`
    mutation updateCustomer(
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
      updateCustomer (
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
        ) ${Customer}
      }
`;

export const DELETE_CUSTOMER = gql`
    mutation deleteCustomer(
      $email: String!,
      ) {
        deleteCustomer (
        email: $email,
        ) ${Customer}
      }
`;
