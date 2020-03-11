const axios = require('axios');

const { mailServiceAPIKey, mailServiceURL, mailTemplates } = require('./../config/config');


exports.orderConfirmation = async function (orderId, customerName, customerEmail) {

    try {

        const response = await axios.post(`${mailServiceURL}/mail/send`, {
            personalizations:[{
                to:[{
                    email: customerEmail
                }],
                dynamic_template_data:{
                    customerName: customerName,
                    orderId: orderId
                }
            }],
            from: {
                email: mailTemplates.orderConfirmed.fromEmail,
                name: mailTemplates.orderConfirmed.fromName
            },
            template_id: mailTemplates.orderConfirmed.id
            
        }, {
            headers: {
                'Authorization': 'Bearer ' + mailServiceAPIKey
            }
        })

        return response.status;

    }catch(e) {

        throw Error(e);

    }

}