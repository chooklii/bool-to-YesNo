declare module "bool-to-yesno" {
    function boolToYesNo(
        boolean: boolean,
        languageKey: string,
        lowercase: boolean
    ): string;
    export{
        boolToYesNo
    }
}