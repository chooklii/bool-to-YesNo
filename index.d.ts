declare module "bool-To-YesNo" {
    function boolToYesNo(
        boolean: boolean,
        languageKey: string,
        lowercase: boolean
    ): string;
    export{
        boolToYesNo
    }
}