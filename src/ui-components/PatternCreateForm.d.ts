/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PatternCreateFormInputValues = {
    name?: string;
    problem?: string;
    structure?: string;
    context?: string;
    forces?: string[];
    status?: string;
    history?: string[];
    patternType?: string;
    documentation?: string;
};
export declare type PatternCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    problem?: ValidationFunction<string>;
    structure?: ValidationFunction<string>;
    context?: ValidationFunction<string>;
    forces?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    history?: ValidationFunction<string>;
    patternType?: ValidationFunction<string>;
    documentation?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatternCreateFormOverridesProps = {
    PatternCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    problem?: FormProps<TextAreaFieldProps>;
    structure?: FormProps<TextAreaFieldProps>;
    context?: FormProps<TextAreaFieldProps>;
    forces?: FormProps<TextAreaFieldProps>;
    status?: FormProps<SelectFieldProps>;
    history?: FormProps<TextAreaFieldProps>;
    patternType?: FormProps<SelectFieldProps>;
    documentation?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatternCreateFormProps = React.PropsWithChildren<{
    overrides?: PatternCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PatternCreateFormInputValues) => PatternCreateFormInputValues;
    onSuccess?: (fields: PatternCreateFormInputValues) => void;
    onError?: (fields: PatternCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PatternCreateFormInputValues) => PatternCreateFormInputValues;
    onValidate?: PatternCreateFormValidationValues;
} & React.CSSProperties>;
export default function PatternCreateForm(props: PatternCreateFormProps): React.ReactElement;
