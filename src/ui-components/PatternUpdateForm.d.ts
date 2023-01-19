/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pattern } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PatternUpdateFormInputValues = {
    url?: string;
    name?: string;
    problem?: string;
    context?: string;
    structure?: string;
    contraindications?: string[];
    examples?: string[];
    references?: string[];
    forces?: string[];
    alsoKnowAs?: string[];
    applicability?: string[];
    status?: string;
    author?: string[];
    DOI?: string;
    history?: string[];
    patternType?: string;
    documentation?: string;
};
export declare type PatternUpdateFormValidationValues = {
    url?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    problem?: ValidationFunction<string>;
    context?: ValidationFunction<string>;
    structure?: ValidationFunction<string>;
    contraindications?: ValidationFunction<string>;
    examples?: ValidationFunction<string>;
    references?: ValidationFunction<string>;
    forces?: ValidationFunction<string>;
    alsoKnowAs?: ValidationFunction<string>;
    applicability?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    DOI?: ValidationFunction<string>;
    history?: ValidationFunction<string>;
    patternType?: ValidationFunction<string>;
    documentation?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatternUpdateFormOverridesProps = {
    PatternUpdateFormGrid?: FormProps<GridProps>;
    url?: FormProps<TextFieldProps>;
    name?: FormProps<TextFieldProps>;
    problem?: FormProps<TextFieldProps>;
    context?: FormProps<TextFieldProps>;
    structure?: FormProps<TextFieldProps>;
    contraindications?: FormProps<TextFieldProps>;
    examples?: FormProps<TextAreaFieldProps>;
    references?: FormProps<TextAreaFieldProps>;
    forces?: FormProps<TextFieldProps>;
    alsoKnowAs?: FormProps<TextFieldProps>;
    applicability?: FormProps<TextFieldProps>;
    status?: FormProps<SelectFieldProps>;
    author?: FormProps<TextFieldProps>;
    DOI?: FormProps<TextFieldProps>;
    history?: FormProps<TextAreaFieldProps>;
    patternType?: FormProps<SelectFieldProps>;
    documentation?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatternUpdateFormProps = React.PropsWithChildren<{
    overrides?: PatternUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pattern?: Pattern;
    onSubmit?: (fields: PatternUpdateFormInputValues) => PatternUpdateFormInputValues;
    onSuccess?: (fields: PatternUpdateFormInputValues) => void;
    onError?: (fields: PatternUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PatternUpdateFormInputValues) => PatternUpdateFormInputValues;
    onValidate?: PatternUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PatternUpdateForm(props: PatternUpdateFormProps): React.ReactElement;
