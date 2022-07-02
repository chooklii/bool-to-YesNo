

const boolToYesNo = (
    boolean,
    languageKey = "en",
    lowercase = false,
) => {
    const jsonfile = require("./translations.json")
    const keyvaluepair = getKeyValuePair(jsonfile, languageKey)

    const value = boolean ? keyvaluepair["true"] : keyvaluepair["false"]
    if(lowercase){
        return value.toLowerCase()
    }
    else return value;
}

// check if key exists, if not return en as default
const getKeyValuePair = (jsonfile, languageKey) => {
    const allKeys = Object.keys(jsonfile)
    if(allKeys.includes(languageKey)){
        return jsonfile[languageKey]
    }
    else{
        console.info("No translation found for given key " + languageKey + "- english used as fallback")
        return jsonfile["en"]
    }
}

module.exports = {
    boolToYesNo
}