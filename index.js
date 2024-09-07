var pdf = require("html-pdf");
var ejs = require("ejs");

var name = "oniichan_senpai";
var code = "02F4Q3ZZ";
ejs.renderFile("./index.ejs", { name: name, code: code }, (err, html) => {
  if (err) {
    console.log("Error!");
  } else {
    pdf
      .create(html, {})
      .toFile("sender-ticket-anyway.pdf", (err, resp) => {
        if (err) {
          console.log("Erro ao gerar pdf!");
        } else {
          console.log(resp);
        }
      });
  }
});
