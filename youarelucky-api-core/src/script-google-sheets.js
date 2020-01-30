const {
    prisma
} = require("./generated/prisma-client");
const googleSpreadsheet = require('google-spreadsheet');
const credentials = require('../client_google_drive_api.json');
const _ = require('lodash');

const {
    promisify
} = require('util');

const insertUpdateCustomerIfNotExists = (customerData) => {
    prisma.upsertCustomer({
        where: {
            email: customerData.email
        },
        create: customerData,
        update: customerData
    }).catch((err) => {
        console.log('err', err)
    });
}
const documentId = '18B-y7IiDvmXqSZiAdk5gv3gQDxmwUxTfH05d2zSjqtY';
const accessSpreadsheet = async () => {

    const doc = new googleSpreadsheet(documentId);
    await promisify(doc.useServiceAccountAuth)(credentials)
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    let rows = await promisify(sheet.getRows)({
        offset: 1
    });
    rows.forEach(customer => {
        let formattedCustomer = {
            email: customer.email,
            name: customer.lastname + " " + customer.firstname,
            firstName: customer.firstname,
            lastName: customer.lastname
        };
        insertUpdateCustomerIfNotExists(formattedCustomer);
    });

}
accessSpreadsheet()