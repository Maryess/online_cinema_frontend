export interface IEditorButtons{
    onCLick: ()=> void;
    name:string;
    iconName:"MdFormatBold" | "MdFormatItalic" | "MdTextFields";
}

export interface ITextEditor{
    buttons:IEditorButtons[];
    text:string;
}