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

module.exports = {
  signup,
  login,
  postUser,
  updateUser,
  deleteUser
};
