/*
 * Starter Project for WhatsApp Echo Bot Tutorial
 *
 * Remix this as the starting point for following the WhatsApp Echo Bot tutorial
 *
 */

"use strict";

// Access token for your app
// (copy token from DevX getting started page
// and save it as environment variable into the .env file)
const token = process.env.WHATSAPP_TOKEN;
let i = 0; //variable
let nombre = 'nombre'

console.log(i)

// Imports dependencies and set up http server
const request = require("request"),
  express = require("express"),
  body_parser = require("body-parser"),
  axios = require("axios").default,
  app = express().use(body_parser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

// Accepts POST requests at /webhook endpoint
app.post("/webhook", (req, res) => {
  // Parse the request body from the POST
  let body = req.body;

  // Check the Incoming webhook message
  console.log(JSON.stringify(req.body, null, 2));

  // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
  if (req.body.object) {
    if (
      req.body.entry &&
      req.body.entry[0].changes &&
      req.body.entry[0].changes[0] &&
      req.body.entry[0].changes[0].value.messages &&
      req.body.entry[0].changes[0].value.messages[0]
    ) {
      let phone_number_id =
        req.body.entry[0].changes[0].value.metadata.phone_number_id;
      let from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
      let type = req.body.entry[0].changes[0].value.messages[0].type;
      let msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
      // aca vas a empezar a escribir tu parte del kilombo
          switch (i) {
          case 0: //iniciar las interacciones 
          if (type == 'text') {
            nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
            console.log(nombre)
            msg_body = "Bienvendio al centro de Reservas del Complejo Turistico de Itaipu Binacional! Elige un idioma!\n\nWelcome to the Itaipu Binacional Reservation Center! Please pick your language \n\nBem-vindo ao centro de reservas do Complexo Turístico da Itaipu Binacional, margem direita (Paraguai). Escolha um idioma. \n\n *1-* Elige 1 para español \n *2-* Choose 2 for english \n *3-* Escolha 3 para Português \n *0-* Finalizar/Stop/Encerrar";
            i += 1; // avanzar a la siguiente linea de dialogo
            console.log(i);
            }
            break;
          
          case 1:
            if (msg_body == "1") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Bienvenido al centro Interactivo de Reservas del Complejo Turistico de Itaipu Binacional! 👋🏻 Soy *TurIBot*, tu asistente virtual para encontrar el tour que quieras hacer!!!\n\n *¿Que te interesa visitar?*\n_Responde con el número que corresponda_\n\n *1-* Central Hidroelectrica \n *2-* Modelo Reducido \n *3-* Reserva Natural Tati Yupi \n *4-* Refugio Biologico de Mbaracayu \n *5-* Iluminacion Monumental \n *6-* Museo de Itaipu tierra Guarani \n *7-* Costanera de Itaipu \n *8-* Parque lineal Manuel Ortiz Guerrero \n *0-* Finalizar / Exit / Encerrar";
              i += 1;
              console.log(i);
              break;
          }
          else if (msg_body == "2") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Welcome to the Interactive Reservation Center of the Itaipu Binational Tourist Complex! 👋🏻 I'm TurIBot, your virtual assistant to find your tour!!!\n\nWhat are you interested in visiting?\n\n_Answer with the corresponding number_\n\n *1-* Hydroelectric Power Plant \n *2-* Reduced Model \n *3-* Tati Yupi Nature Reserve \n *4-* Mbaracayu Biological Refuge \n *5-* Monumental Lighting \n *6-* Itaipu Guarani Land Museum \n *7-* Itaipu Waterfront \n *8-* Manuel Ortiz Guerrero Linear Park \n *0-* Exit / Finalizar / Encerrar";
              i += 1;
              console.log(i);
              break;
            
             }
          else if (msg_body == "3") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Bem-vindo à Central Interativa de Reservas do Complexo Turístico Binacional Itaipu! 👋🏻 Sou TurIBot, seu assistente virtual para encontrar o passeio que você quer fazer!!!\n\nO que você tem interesse em visitar?\n\n_Responda com o número correspondente_\n\n *1-* Usina Hidrelétrica \n *2-* Modelo Reduzido \n *3-* Reserva Natural Tati Yupi \n *4-* Refúgio Biológico Mbaracayu \n *5-* Iluminação Monumental \n *6-* Museu Itaipu Terra Guarani \n *7-* Orla de Itaipu \n *8-* Parque Linear Manuel Ortiz Guerrero \n *0-* Encerrar / Finalizar / Exit";
              i += 1;
              console.log(i);
              break;
             }
          else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por tu interes! \nThanks for stopping by! \nObrigado por sua visita!. \nPara volver a iniciar responde con un mensaje.";
              i = 2
              console.log(i);
              i = 0
              break;          
          }
          else { //en caso de no recibir un comando correcto re ingresar a la condicion anterior 
              msg_body = "Lo siento pero no entendí tu respuesta\n\nI'm sorry, I did not understand your reply \n\nDesculpe mas não entendi sua resposta \n\n*1-* Elige 1 para español \n*2-* Choose 2 for english \n*3-* Escolha 3 para Português \n*0-* Finalizar/Stop/Encerrar";
              i = 1
              console.log(i);
              break;
          }
          case 2:
            if (msg_body == "1") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Seleccionaste *Central Hidroelectrica* :\n_Responde con el número que corresponda_\n\n*1-* Requisitos \n*2-* Reservar \n*3-* Contactos \n*4-* Info Adicional \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
          }
            else if (msg_body == "2") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Seleccionaste *Modelo Reducido* :\n_Responde con el número que corresponda_\n\n*1-* Requisitos \n*2-* Reservar \n*3-* Contactos \n*4-* Info Adicional \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == "3") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Seleccionaste *Reserva Natural Tati Yupi* :\n_Responde con el número que corresponda_\n\n*1-* Requisitos \n*2-* Reservar \n*3-* Contactos \n*4-* Info Adicional \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == "4") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Seleccionaste *Refugio Biologico de Mbaracayu* :\n_Responde con el número que corresponda_\n\n*1-* Requisitos \n*2-* Reservar \n*3-* Contactos \n*4-* Info Adicional \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == "5") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Seleccionaste *Iluminacion Monumental* :\n_Responde con el número que corresponda_\n\n*1-* Requisitos \n*2-* Reservar \n*3-* Contactos \n*4-* Info Adicional \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == "6") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Seleccionaste *Museo de Itaipu Tierra Guarani* :\n_Responde con el número que corresponda_\n\n*1-* Requisitos \n*2-* Reservar \n*3-* Contactos \n*4-* Info Adicional \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == "7") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Seleccionaste *Costanera de Itaipu* :\n_Responde con el número que corresponda_\n\n*1-* Requisitos \n*2-* Reservar \n*3-* Contactos \n*4-* Info Adicional \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == "8") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Seleccionaste *Paraque Lineal Manuel Ortiz Guerrero* :\n_Responde con el número que corresponda_\n\n*1-* Requisitos \n*2-* Reservar \n*3-* Contactos \n*4-* Info Adicional \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por tu interes! \nPara volver a iniciar responde con un mensaje.";
              i = 2
              console.log(i);
              i = 0
              break;          
          }
            else { //en caso de no recibir un comando correcto re ingresar a la condicion anterior 
              msg_body = "Lo siento, pero no entendi tu respuesta\n_Responde con el número que corresponda_\n\n *1-* Central Hidroelectrica \n *2-* Modelo Reducido \n *3-* Reserva Natural Tati Yupi \n *4-* Refugio Biologico de Mbaracayu \n *5-* Iluminacion Monumental \n *6-* Museo de Itaipu tierra Guarani \n *7-* Costanera de Itaipu \n *8-* Parque lineal Manuel Ortiz Guerrero \n *0-* Finalizar";
              i = 1
              console.log(i);
              break;
          }
          case 3: //Aca se muestran los requisitos, se hacen reservas, se ven los contactos o se muestra info adicional
            if (msg_body == "1") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Requisitos de Acceso \n\n*-* Documento de Identidad o Pasaporte \n*-* \n*-* \n\n*1-* Volver \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
          }
        
            else if (msg_body == "2") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Reservar \n\n Comunicate con nostros al correo cturistico@itaipu.gov.py para realizar tu reserva \n\nO llamanos al +595 61 599 8040 / 8094 \n\n*1-* Volver \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == "3") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Contacta con nosotros \n\nHernandarias, Alto Paraná \n\n+595 61 599 8040 / 8094 \n\ncturistico@itaipu.gov.py \n\n*1-* Volver \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == "4") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = (nombre)
              msg_body = "Info Adicional \n\nPara mejor manejo de los horarios favor consultar en la web https://cti.itaipu.gov.py/es/informaciones  \n\n*1-* Volver \n*0-* Finalizar";
              i += 1;
              console.log(i);
              break;
             }
            else if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por tu interes! \nPara volver a iniciar responde con un mensaje.";
              i = 2
              console.log(i);
              i = 0
              break;          
          }
            else { //en caso de no recibir un comando correcto re ingresar a la condicion anterior 
              msg_body = "Lo siento, pero no entendi tu respuesta\n_Responde con el número que corresponda_\n\n *1-* Requisitos \n *2-* Reservar \n *3-* Contactos \n *4-* Info Adicional \n *0-* Finalizar";
              i = 1
              console.log(i);
              break;
          }
               case 4: //Aca se define lo que pasa despues de ver requisitos y demas yerbas                
            if (msg_body == 0) {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Muchas gracias por tu interes! \nPara volver a iniciar responde con un mensaje.";
              i = 2
              console.log(i);
              i = 0
              break;
            }
            else if (msg_body == "1") {
              nombre = req.body.entry[0].changes[0].value.messages[0].text.body;
              console.log(nombre)
              msg_body = "Bienvenido al centro Interactivo de Reservas del Complejo Turistico de Itaipu Binacional! 👋🏻 Soy *TurIBot*, tu asistente virtual para encontrar el tour que quieras hacer!!!\n\n *¿Que te interesa visitar?*\n_Responde con el número que corresponda_\n\n *1-* Central Hidroelectrica \n *2-* Modelo Reducido \n *3-* Reserva Natural Tati Yupi \n *4-* Refugio Biologico de Mbaracayu \n *5-* Iluminacion Monumental \n *6-* Museo de Itaipu tierra Guarani \n *7-* Costanera de Itaipu \n *8-* Parque lineal Manuel Ortiz Guerrero \n *0-* Finalizar / Exit / Encerrar";
              i = 2;
              console.log(i);
              break;
            }
                          else { //en caso de no recibir un comando correcto re ingresar a la condicion anterior 
              msg_body = "Lo siento, pero no entendi tu respuesta\n_Responde con el número que corresponda_\n\n*1-* Volver \n*0-* Finalizar";
              i = 1
              console.log(i);
              break;
          }
            }
      // hasta aqui llego tu kilombo
      axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url:
          "https://graph.facebook.com/v12.0/" +
          phone_number_id +
          "/messages?access_token=" +
          token,
        data: {
          messaging_product: "whatsapp",
          to: from,
          text: { body: msg_body },
        },
        headers: { "Content-Type": "application/json" },
      });
  }
    res.sendStatus(200);
  } else {
    // Return a '404 Not Found' if event is not from a WhatsApp API
    res.sendStatus(404);
  }
  });

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests 
app.get("/webhook", (req, res) => {
  /**
   * UPDATE YOUR VERIFY TOKEN
   *This will be the Verify Token value when you set up webhook
  **/
  const verify_token = process.env.VERIFY_TOKEN;

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === verify_token) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});
