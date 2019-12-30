'use strict';

var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgridkey);

exports.send = async(to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'hello@balta.io',
        subject: subject,
        html: body
    });
}