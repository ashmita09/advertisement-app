const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

var sendMail = {
    send : function(toEmail,ccEmail,fromEmail,subject, html){
        //data verification
        //mandatory data
        if( toEmail == null )
        {
            return null;
        }

        const msg = {
            to: toEmail,
            cc: ccEmail,
            //bcc: bccEmail,
            from: fromEmail,            
            subject: subject,
            html: html
            //text: text
          }

          sgMail
            .send(msg)
            .then(() => {
            console.log('Email sent')
            })
            .catch((error) => {
            console.error(error)
            })
    },
    sendwithoutcc: function(toEmail,fromEmail,subject, html){
        //data verification
        //mandatory data
        if( toEmail == null )
        {
            return null;
        }

        const msg = {
            to: toEmail,
            //cc: ccEmail,
            //bcc: bccEmail,
            from: fromEmail,            
            subject: subject,
            html: html
            //text: text
          }

          sgMail
            .send(msg)
            .then(() => {
            console.log('Email sent')
            })
            .catch((error) => {
            console.error(error)
            })
    }
}

module.exports = sendMail