const amqp = require('amqplib/callback_api');


//code to connect to the  RabbitMQ server

// amqp.connect('amqp://localhost', (error, connection) => { });


//code to connect and create a channel using amqp

// amqp.connect('amqp://localhost', (error, connection) => {
//     if (error) {
//         throw error;
//     }
//     connection.createChannel((error1, channel) => { });
// });

//complete code to publish the message to the created queue

amqp.connect('amqp://localhost', (error0, connection) => {
    if (error0) {
        throw error0;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1;
        }
        let queue = 'hello';
        let msg = 'Hello world';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);



        setTimeout(() => {
            connection.close();
            process.exit(0)
        }, 500);
    });
});


