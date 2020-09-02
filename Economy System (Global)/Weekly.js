{
  "name": "weekly",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "DnRRv",
  "actions": [
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "behavior": "1",
      "interpretation": "0",
      "code": "if (msg.client.guilds.weekly === undefined) {\nmsg.client.guilds.weekly = new Set();\n}\n if (msg.client.guilds.weekly.has(msg.author.id)) {\n    msg.channel.send(\"**You have already claimed Weekly Reward. Come back after `7 Days`.**\");\n    console.log(\"test\");\n } else {\n     \n        msg.client.guilds.weekly.add(msg.author.id);\n        setTimeout(() => {\n        \n          msg.client.guilds.weekly.delete(msg.author.id);\n        }, 604800000);\n        Actions.callNextAction(cache);\n    }",
      "storage": "0",
      "varName": "",
      "name": "Run Script"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "money",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "geld1",
      "name": "Store Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"geld1\")}",
      "info": "0",
      "SecondNumber": "25000",
      "storage": "1",
      "varName": "geldresult",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "money",
      "changeType": "0",
      "value": "tempVars(\"geldresult\")",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "money",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "geld2",
      "name": "Store Member Data"
    },
    {
      "title": "Weekly Reward",
      "author": "",
      "color": "RANDOM",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "https://media1.tenor.com/images/ddd7ad20856d06ca826715dd1391348b/tenor.gif?itemid=16181596",
      "storage": "1",
      "varName": "emb",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "emb",
      "message": "${member},\n\nYou have Recieved Your Weekly Reward **$ 25000 **.\nYour current account balance is **$ ${tempVars(\"geld2\")}**",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "emb",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ],
  "comType": "0"
}
