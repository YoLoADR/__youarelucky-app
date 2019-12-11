const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../utils");

async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10);
  // 2
  const user = await context.prisma.createUser({ ...args, password });

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  // 4
  return {
    token,
    user
  };
}

// Au lieu de créer un nouvel Userobjet, vous utilisez maintenant l' prismainstance client pour récupérer l' Userenregistrement existant à l' aide de l' emailadresse envoyée en tant qu'argument dans la loginmutation. Si aucune Useradresse e-mail n'a été trouvée, vous retournez une erreur correspondante.

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user found");
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  // 3
  return {
    token,
    user
  };
}

function postUser(parent, args, context, info) {
  return context.prisma.createUser({
    name: args.name,
    email: args.email,
    password: args.password,
    description: args.description,
    usertype: args.usertype,
    isAdmin: args.isAdmin,
    lastName: args.lastName,
    firstName: args.firstName,
    mobile: args.mobile,
    profile_image: args.profile_image,
    approved: args.approved,
    refferalBonus: args.refferalBonus,
    profession: args.profession
  });
}

async function updateUser(parent, args, context, info) {
  // First check if there is a user with that email
  const user = await context.prisma.user({ email: args.email });

  if (!user) {
    throw new Error("No such user found");
  }
  const updatedUser = await context.prisma.updateUser({
    where: { id: user.id },

    data: {
      name: args.name,
      email: args.email,
      description: args.description,
      url: args.url,
      usertype: args.usertype,
      isAdmin: args.isAdmin,
      lastName: args.lastName,
      firstName: args.firstName,
      mobile: args.mobile,
      profile_image: args.profile_image,
      approved: args.approved,
      refferalBonus: args.refferalBonus,
      profession: args.profession
    }
  });
  return updatedUser;
}

async function deleteUser(parent, args, context, info) {
  // First check if there is a user with that email
  const user = await context.prisma.user({ email: args.email });

  if (!user) {
    throw new Error("No such user found");
  }
  const deletedUser = await context.prisma.deleteUser({ id: user.id });
  return deletedUser;
}

function postProspect(parent, args, context, info) {
  return context.prisma.createProspect({
    name: args.name,
    email: args.email,
    lastName: args.lastName,
    firstName: args.firstName,
    description: args.description,
    mobile: args.mobile,
    profile_image: args.profile_image,
    lead_source: args.lead_source,
    profession: args.profession,
    refferalBonus: args.refferalBonus,
    outcome: args.outcome,
    recording: args.recording,
    call_length: args.call_length,
    my_emotions: args.my_emotions,
    call_conclusion: args.call_conclusion
  });
}

async function updateProspect(parent, args, context, info) {
  // First check if there is a user with that email
  const Prospect = await context.prisma.prospect({ email: args.email });

  if (!prospect) {
    throw new Error("No such Prospect found");
  }
  const updatedProspect = await context.prisma.updateProspect({
    where: { id: prospect.id },

    data: {
      name: args.name,
      email: args.email,
      lastName: args.lastName,
      firstName: args.firstName,
      description: args.description,
      mobile: args.mobile,
      profile_image: args.profile_image,
      lead_source: args.lead_source,
      profession: args.profession,
      refferalBonus: args.refferalBonus,
      outcome: args.outcome,
      recording: args.recording,
      call_length: args.call_length,
      my_emotions: args.my_emotions,
      call_conclusion: args.call_conclusion
    }
  });
  return updatedProspect;
}

async function deleteProspect(parent, args, context, info) {
  // First check if there is a prospect with that email
  const prospect = await context.prisma.prospect({ email: args.email });

  if (!prospect) {
    throw new Error("No such prospect found");
  }
  const deletedProspect = await context.prisma.deleteProspect({
    id: prospect.id
  });
  return deletedProspect;
}

function postApplicant(parent, args, context, info) {
  return context.prisma.createApplicant({
    name: args.name,
    email: args.email,
    lastName: args.lastName,
    firstName: args.firstName,
    description: args.description,
    mobile: args.mobile,
    profile_image: args.profile_image,
    lead_source: args.lead_source,
    profession: args.profession,
    refferalBonus: args.refferalBonus,
    outcome: args.outcome,
    recording: args.recording,
    call_length: args.call_length,
    my_emotions: args.my_emotions,
    call_conclusion: args.call_conclusion
  });
}

async function updateApplicant(parent, args, context, info) {
  // First check if there is a applicant with that email
  const applicant = await context.prisma.applicant({ email: args.email });

  if (!applicant) {
    throw new Error("No such applicant found");
  }
  const updatedApplicant = await context.prisma.updateApplicant({
    where: { id: applicant.id },

    data: {
      name: args.name,
      email: args.email,
      lastName: args.lastName,
      firstName: args.firstName,
      description: args.description,
      mobile: args.mobile,
      profile_image: args.profile_image,
      lead_source: args.lead_source,
      profession: args.profession,
      refferalBonus: args.refferalBonus,
      outcome: args.outcome,
      recording: args.recording,
      call_length: args.call_length,
      my_emotions: args.my_emotions,
      call_conclusion: args.call_conclusion
    }
  });
  return updatedApplicant;
}

async function deleteApplicant(parent, args, context, info) {
  // First check if there is a applicant with that email
  const applicant = await context.prisma.applicant({ email: args.email });

  if (!applicant) {
    throw new Error("No such applicant found");
  }
  const deletedApplicant = await context.prisma.deleteApplicant({
    id: applicant.id
  });
  return deletedApplicant;
}

function postPartner(parent, args, context, info) {
  return context.prisma.createPartner({
    name: args.name,
    email: args.email,
    lastName: args.lastName,
    firstName: args.firstName,
    description: args.description,
    mobile: args.mobile,
    profile_image: args.profile_image,
    lead_source: args.lead_source,
    profession: args.profession,
    refferalBonus: args.refferalBonus,
    outcome: args.outcome,
    recording: args.recording,
    call_length: args.call_length,
    my_emotions: args.my_emotions,
    call_conclusion: args.call_conclusion
  });
}

async function updatePartner(parent, args, context, info) {
  // First check if there is a partner with that email
  const partner = await context.prisma.partner({ email: args.email });

  if (!partner) {
    throw new Error("No such partner found");
  }
  const updatedPartner = await context.prisma.updatePartner({
    where: { id: partner.id },

    data: {
      name: args.name,
      email: args.email,
      lastName: args.lastName,
      firstName: args.firstName,
      description: args.description,
      mobile: args.mobile,
      profile_image: args.profile_image,
      lead_source: args.lead_source,
      profession: args.profession,
      refferalBonus: args.refferalBonus,
      outcome: args.outcome,
      recording: args.recording,
      call_length: args.call_length,
      my_emotions: args.my_emotions,
      call_conclusion: args.call_conclusion
    }
  });
  return updatedPartner;
}

async function deletePartner(parent, args, context, info) {
  // First check if there is a partner with that email
  const partner = await context.prisma.partner({ email: args.email });

  if (!partner) {
    throw new Error("No such partner found");
  }
  const deletedPartner = await context.prisma.deletePartner({
    id: partner.id
  });
  return deletedPartner;
}

function postCustomer(parent, args, context, info) {
  return context.prisma.createCustomer({
    name: args.name,
    email: args.email,
    lastName: args.lastName,
    firstName: args.firstName,
    description: args.description,
    mobile: args.mobile,
    profile_image: args.profile_image,
    lead_source: args.lead_source,
    profession: args.profession,
    refferalBonus: args.refferalBonus,
    outcome: args.outcome,
    recording: args.recording,
    call_length: args.call_length,
    my_emotions: args.my_emotions,
    call_conclusion: args.call_conclusion
  });
}

async function updateCustomer(parent, args, context, info) {
  // First check if there is a customer with that email
  const customer = await context.prisma.customer({ email: args.email });

  if (!customer) {
    throw new Error("No such customer found");
  }
  const updatedCustomer = await context.prisma.updateCustomer({
    where: { id: customer.id },

    data: {
      name: args.name,
      email: args.email,
      lastName: args.lastName,
      firstName: args.firstName,
      description: args.description,
      mobile: args.mobile,
      profile_image: args.profile_image,
      lead_source: args.lead_source,
      profession: args.profession,
      refferalBonus: args.refferalBonus,
      outcome: args.outcome,
      recording: args.recording,
      call_length: args.call_length,
      my_emotions: args.my_emotions,
      call_conclusion: args.call_conclusion
    }
  });
  return updatedCustomer;
}

async function deleteCustomer(parent, args, context, info) {
  // First check if there is a customer with that email
  const customer = await context.prisma.customer({ email: args.email });

  if (!customer) {
    throw new Error("No such customer found");
  }
  const deletedCustomer = await context.prisma.deleteCustomer({
    id: customer.id
  });
  return deletedCustomer;
}

module.exports = {
  signup,
  login,
  postUser,
  updateUser,
  deleteUser,
  postProspect,
  updateProspect,
  deleteProspect,
  postApplicant,
  updateApplicant,
  deleteApplicant,
  postPartner,
  updatePartner,
  deletePartner,
  postCustomer,
  updateCustomer,
  deleteCustomer
};
