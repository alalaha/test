const Discord = require ('discord.js'); 

cliente const = novo Discord.Client (); 

 

client.on ('pronto', () => { 

    console.log ('Estou pronto!'); 

}); 

 

client.on ('mensagem', mensagem => { 

    if (message.content === 'ping') { 

       message.reply ('pong'); 

       } 

}); 

 

// ESTA DEVE SER 

ASSIM client.login (process.env.BOT_TOKEN); // BOT_TOKEN é o segredo do cliente