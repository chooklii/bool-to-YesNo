const {boolToYesNo} = require("./index")

describe("test if package is working", () => {
    test("all kind of scenarios", () => {
        expect(boolToYesNo(true, "de")).toBe("Ja")
        expect(boolToYesNo(true, "de", true)).toBe("ja")
        expect(boolToYesNo(false, "de", true)).toBe("nein")
        expect(boolToYesNo(false," zz")).toBe("No")
        expect(boolToYesNo(true, "en", true)).toBe("yes")
        expect(boolToYesNo(true)).toBe("Yes")
        expect(boolToYesNo(false)).toBe("No")
        expect(boolToYesNo(false, "en", true)).toBe("no")
        expect(boolToYesNo(false, "pt", true)).toBe("não")
        expect(boolToYesNo(true, "fr")).toBe("Oui")
        expect(boolToYesNo(false, "pl", true)).toBe("nie")
        expect(boolToYesNo(true, "pl", true)).toBe("tak")
        expect(boolToYesNo(true, "es", true)).toBe("sí")
    })
})

describe("test if json is working", () => {
    test("if json is valid", () => {
        const json = require("./translations.json")
        expect(json["de"]).toBeDefined()
    })
})