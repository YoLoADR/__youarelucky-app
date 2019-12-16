async function getUsers(parent, args, context, info) {
  // Si "argument de filtre" on construit un ~ WHERE en SQL
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};
  const users = await context.prisma.users({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .usersConnection({
      where
    })
    .aggregate()
    .count();
  return {
    users,
    count
  };
}

async function getProspects(parent, args, context, info) {
  // Si "argument de filtre" on construit un ~ WHERE en SQL
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { lastName_contains: args.filter }
        ]
      }
    : {};
  const prospects = await context.prisma.prospects({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .prospectsConnection({
      where
    })
    .aggregate()
    .count();
  return {
    prospects,
    count
  };
}

async function getApplicants(parent, args, context, info) {
  // Si "argument de filtre" on construit un ~ WHERE en SQL
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};
  const applicant = await context.prisma.applicant({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .applicantConnection({
      where
    })
    .aggregate()
    .count();
  return {
    applicant,
    count
  };
}

async function getPartners(parent, args, context, info) {
  // Si "argument de filtre" on construit un ~ WHERE en SQL
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};
  const partner = await context.prisma.partner({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .partnerConnection({
      where
    })
    .aggregate()
    .count();
  return {
    partner,
    count
  };
}

async function getCustomers(parent, args, context, info) {
  // Si "argument de filtre" on construit un ~ WHERE en SQL
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};
  const customer = await context.prisma.customer({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });
  const count = await context.prisma
    .customerConnection({
      where
    })
    .aggregate()
    .count();
  return {
    customer,
    count
  };
}

module.exports = {
  getUsers,
  getProspects,
  getApplicants,
  getPartners,
  getCustomers
};

// Vous utilisez d’abord les arguments de filtrage, d’ordre et de pagination fournis pour extraire un certain nombre d’ Linkéléments.
// Ensuite, vous utilisez la linksConnectionrequête de l'API client Prisma pour extraire le nombre total d' Linkéléments actuellement stockés dans la base de données.
// Les linkset countsont ensuite encapsulés dans un objet pour adhérer au Feedtype que vous venez d'ajouter au schéma GraphQL.
