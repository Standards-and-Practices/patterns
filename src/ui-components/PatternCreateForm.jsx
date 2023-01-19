/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Pattern } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function PatternCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    problem: undefined,
    structure: undefined,
    context: undefined,
    forces: [],
    status: undefined,
    history: [],
    patternType: undefined,
    documentation: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [problem, setProblem] = React.useState(initialValues.problem);
  const [structure, setStructure] = React.useState(initialValues.structure);
  const [context, setContext] = React.useState(initialValues.context);
  const [forces, setForces] = React.useState(initialValues.forces);
  const [status, setStatus] = React.useState(initialValues.status);
  const [history, setHistory] = React.useState(initialValues.history);
  const [patternType, setPatternType] = React.useState(
    initialValues.patternType
  );
  const [documentation, setDocumentation] = React.useState(
    initialValues.documentation
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setProblem(initialValues.problem);
    setStructure(initialValues.structure);
    setContext(initialValues.context);
    setForces(initialValues.forces);
    setCurrentForcesValue(undefined);
    setStatus(initialValues.status);
    setHistory(initialValues.history);
    setCurrentHistoryValue(undefined);
    setPatternType(initialValues.patternType);
    setDocumentation(initialValues.documentation);
    setErrors({});
  };
  const [currentForcesValue, setCurrentForcesValue] = React.useState(undefined);
  const forcesRef = React.createRef();
  const [currentHistoryValue, setCurrentHistoryValue] =
    React.useState(undefined);
  const historyRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    problem: [],
    structure: [],
    context: [],
    forces: [],
    status: [],
    history: [{ type: "JSON" }],
    patternType: [],
    documentation: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          problem,
          structure,
          context,
          forces,
          status,
          history,
          patternType,
          documentation,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Pattern(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "PatternCreateForm")}
    >
      <TextField
        label="Pattern Name"
        descriptiveText="Try to choose a pattern name that is memorable, succinct, and fits naturally into discourse. Naming is vital, because it will become part of our design vocabulary."
        isRequired={true}
        isReadOnly={false}
        placeholder="A Clever New Pattern"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              problem,
              structure,
              context,
              forces,
              status,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextAreaField
        label="Problem Summary"
        descriptiveText='What about these forces disrupts "alive" learning?'
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              problem: value,
              structure,
              context,
              forces,
              status,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            value = result?.problem ?? value;
          }
          if (errors.problem?.hasError) {
            runValidationTasks("problem", value);
          }
          setProblem(value);
        }}
        onBlur={() => runValidationTasks("problem", problem)}
        errorMessage={errors.problem?.errorMessage}
        hasError={errors.problem?.hasError}
        {...getOverrideProps(overrides, "problem")}
      ></TextAreaField>
      <TextAreaField
        label="Structure"
        descriptiveText="What configuration balances the forces and solves the problem?"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              problem,
              structure: value,
              context,
              forces,
              status,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            value = result?.structure ?? value;
          }
          if (errors.structure?.hasError) {
            runValidationTasks("structure", value);
          }
          setStructure(value);
        }}
        onBlur={() => runValidationTasks("structure", structure)}
        errorMessage={errors.structure?.errorMessage}
        hasError={errors.structure?.hasError}
        {...getOverrideProps(overrides, "structure")}
      ></TextAreaField>
      <TextAreaField
        label="Context"
        descriptiveText="When and where does this problem arise? Under which conditions does this pattern hold?"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              problem,
              structure,
              context: value,
              forces,
              status,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            value = result?.context ?? value;
          }
          if (errors.context?.hasError) {
            runValidationTasks("context", value);
          }
          setContext(value);
        }}
        onBlur={() => runValidationTasks("context", context)}
        errorMessage={errors.context?.errorMessage}
        hasError={errors.context?.hasError}
        {...getOverrideProps(overrides, "context")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              problem,
              structure,
              context,
              forces: values,
              status,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            values = result?.forces ?? values;
          }
          setForces(values);
          setCurrentForcesValue(undefined);
        }}
        currentFieldValue={currentForcesValue}
        label={"Forces"}
        items={forces}
        hasError={errors.forces?.hasError}
        setFieldValue={setCurrentForcesValue}
        inputFieldRef={forcesRef}
        defaultFieldValue={undefined}
      >
        <TextAreaField
          label="Forces"
          descriptiveText="What factors conflict to create this problem?"
          isRequired={false}
          isReadOnly={false}
          value={currentForcesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.forces?.hasError) {
              runValidationTasks("forces", value);
            }
            setCurrentForcesValue(value);
          }}
          onBlur={() => runValidationTasks("forces", currentForcesValue)}
          errorMessage={errors.forces?.errorMessage}
          hasError={errors.forces?.hasError}
          ref={forcesRef}
          {...getOverrideProps(overrides, "forces")}
        ></TextAreaField>
      </ArrayField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              problem,
              structure,
              context,
              forces,
              status: value,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Proposed"
          value="PROPOSED"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Draft"
          value="DRAFT"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Standard"
          value="STANDARD"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Bestcurrentpractice"
          value="BESTCURRENTPRACTICE"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
        <option
          children="Experimental"
          value="EXPERIMENTAL"
          {...getOverrideProps(overrides, "statusoption4")}
        ></option>
        <option
          children="Historic"
          value="HISTORIC"
          {...getOverrideProps(overrides, "statusoption5")}
        ></option>
        <option
          children="Informational"
          value="INFORMATIONAL"
          {...getOverrideProps(overrides, "statusoption6")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              problem,
              structure,
              context,
              forces,
              status,
              history: values,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            values = result?.history ?? values;
          }
          setHistory(values);
          setCurrentHistoryValue(undefined);
        }}
        currentFieldValue={currentHistoryValue}
        label={"History"}
        items={history}
        hasError={errors.history?.hasError}
        setFieldValue={setCurrentHistoryValue}
        inputFieldRef={historyRef}
        defaultFieldValue={undefined}
      >
        <TextAreaField
          label="History"
          isRequired={false}
          isReadOnly={false}
          value={currentHistoryValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.history?.hasError) {
              runValidationTasks("history", value);
            }
            setCurrentHistoryValue(value);
          }}
          onBlur={() => runValidationTasks("history", currentHistoryValue)}
          errorMessage={errors.history?.errorMessage}
          hasError={errors.history?.hasError}
          ref={historyRef}
          {...getOverrideProps(overrides, "history")}
        ></TextAreaField>
      </ArrayField>
      <SelectField
        label="Pattern type"
        placeholder="Please select an option"
        isDisabled={false}
        value={patternType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              problem,
              structure,
              context,
              forces,
              status,
              history,
              patternType: value,
              documentation,
            };
            const result = onChange(modelFields);
            value = result?.patternType ?? value;
          }
          if (errors.patternType?.hasError) {
            runValidationTasks("patternType", value);
          }
          setPatternType(value);
        }}
        onBlur={() => runValidationTasks("patternType", patternType)}
        errorMessage={errors.patternType?.errorMessage}
        hasError={errors.patternType?.hasError}
        {...getOverrideProps(overrides, "patternType")}
      >
        <option
          children="Pathway"
          value="PATHWAY"
          {...getOverrideProps(overrides, "patternTypeoption0")}
        ></option>
        <option
          children="Experience"
          value="EXPERIENCE"
          {...getOverrideProps(overrides, "patternTypeoption1")}
        ></option>
        <option
          children="Activity"
          value="ACTIVITY"
          {...getOverrideProps(overrides, "patternTypeoption2")}
        ></option>
        <option
          children="Layout"
          value="LAYOUT"
          {...getOverrideProps(overrides, "patternTypeoption3")}
        ></option>
        <option
          children="Xblock"
          value="XBLOCK"
          {...getOverrideProps(overrides, "patternTypeoption4")}
        ></option>
      </SelectField>
      <TextField
        label="Documentation"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              problem,
              structure,
              context,
              forces,
              status,
              history,
              patternType,
              documentation: value,
            };
            const result = onChange(modelFields);
            value = result?.documentation ?? value;
          }
          if (errors.documentation?.hasError) {
            runValidationTasks("documentation", value);
          }
          setDocumentation(value);
        }}
        onBlur={() => runValidationTasks("documentation", documentation)}
        errorMessage={errors.documentation?.errorMessage}
        hasError={errors.documentation?.hasError}
        {...getOverrideProps(overrides, "documentation")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Start Over"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Create Pattern"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
