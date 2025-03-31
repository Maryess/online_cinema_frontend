import { ControllerRenderProps } from "react-hook-form";
import { Options } from "react-select";
import { IField } from "shared/types/ui.types";

export interface IOptions{
    value:string;
    label:string;
}

export interface ISelect extends IField {
    options:Options<IOptions>;
    field: ControllerRenderProps<any,any>;
    isMulti?:boolean;
    isLoading:boolean;
}