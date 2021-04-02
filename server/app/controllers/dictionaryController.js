const request = require('request');
const Dictionary = require("oxford-dictionary");

const dict = new Dictionary({
    app_id : process.env.oxford_id,
    app_key : process.env.oxford_key,
    source_lang : "en-us"
  });

const getMeaning = (req, res) => {
    const word = req.body && req.query.word;
    if (!word) return res.send(word);
    const lookup = dict.definitions(word);
    lookup.then((resp) => {
        return res.send(resp.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);
    })
    .catch(err => res.send(err));
};

module.exports = {
    getMeaning
}