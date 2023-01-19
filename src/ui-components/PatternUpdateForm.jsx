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
export default function PatternUpdateForm(props) {
  const {
    id,
    pattern,
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
    url: undefined,
    name: undefined,
    problem: undefined,
    context: undefined,
    structure: undefined,
    contraindications: [],
    examples: [],
    references: [],
    forces: [],
    alsoKnowAs: [],
    applicability: [],
    status: undefined,
    author: [],
    DOI: undefined,
    history: [],
    patternType: undefined,
    documentation: undefined,
  };
  const [url, setUrl] = React.useState(initialValues.url);
  const [name, setName] = React.useState(initialValues.name);
  const [problem, setProblem] = React.useState(initialValues.problem);
  const [context, setContext] = React.useState(initialValues.context);
  const [structure, setStructure] = React.useState(initialValues.structure);
  const [contraindications, setContraindications] = React.useState(
    initialValues.contraindications
  );
  const [examples, setExamples] = React.useState(initialValues.examples);
  const [references, setReferences] = React.useState(initialValues.references);
  const [forces, setForces] = React.useState(initialValues.forces);
  const [alsoKnowAs, setAlsoKnowAs] = React.useState(initialValues.alsoKnowAs);
  const [applicability, setApplicability] = React.useState(
    initialValues.applicability
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [DOI, setDOI] = React.useState(initialValues.DOI);
  const [history, setHistory] = React.useState(initialValues.history);
  const [patternType, setPatternType] = React.useState(
    initialValues.patternType
  );
  const [documentation, setDocumentation] = React.useState(
    initialValues.documentation
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...patternRecord };
    setUrl(cleanValues.url);
    setName(cleanValues.name);
    setProblem(cleanValues.problem);
    setContext(cleanValues.context);
    setStructure(cleanValues.structure);
    setContraindications(cleanValues.contraindications ?? []);
    setCurrentContraindicationsValue(undefined);
    setExamples(cleanValues.examples ?? []);
    setCurrentExamplesValue(undefined);
    setReferences(cleanValues.references ?? []);
    setCurrentReferencesValue(undefined);
    setForces(cleanValues.forces ?? []);
    setCurrentForcesValue(undefined);
    setAlsoKnowAs(cleanValues.alsoKnowAs ?? []);
    setCurrentAlsoKnowAsValue(undefined);
    setApplicability(cleanValues.applicability ?? []);
    setCurrentApplicabilityValue(undefined);
    setStatus(cleanValues.status);
    setAuthor(cleanValues.author ?? []);
    setCurrentAuthorValue(undefined);
    setDOI(cleanValues.DOI);
    setHistory(cleanValues.history ?? []);
    setCurrentHistoryValue(undefined);
    setPatternType(cleanValues.patternType);
    setDocumentation(cleanValues.documentation);
    setErrors({});
  };
  const [patternRecord, setPatternRecord] = React.useState(pattern);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Pattern, id) : pattern;
      setPatternRecord(record);
    };
    queryData();
  }, [id, pattern]);
  React.useEffect(resetStateValues, [patternRecord]);
  const [currentContraindicationsValue, setCurrentContraindicationsValue] =
    React.useState(undefined);
  const contraindicationsRef = React.createRef();
  const [currentExamplesValue, setCurrentExamplesValue] =
    React.useState(undefined);
  const examplesRef = React.createRef();
  const [currentReferencesValue, setCurrentReferencesValue] =
    React.useState(undefined);
  const referencesRef = React.createRef();
  const [currentForcesValue, setCurrentForcesValue] = React.useState(undefined);
  const forcesRef = React.createRef();
  const [currentAlsoKnowAsValue, setCurrentAlsoKnowAsValue] =
    React.useState(undefined);
  const alsoKnowAsRef = React.createRef();
  const [currentApplicabilityValue, setCurrentApplicabilityValue] =
    React.useState(undefined);
  const applicabilityRef = React.createRef();
  const [currentAuthorValue, setCurrentAuthorValue] = React.useState(undefined);
  const authorRef = React.createRef();
  const [currentHistoryValue, setCurrentHistoryValue] =
    React.useState(undefined);
  const historyRef = React.createRef();
  const validations = {
    url: [{ type: "URL" }],
    name: [],
    problem: [],
    context: [],
    structure: [],
    contraindications: [],
    examples: [{ type: "JSON" }],
    references: [{ type: "JSON" }],
    forces: [],
    alsoKnowAs: [],
    applicability: [],
    status: [],
    author: [],
    DOI: [],
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
          url: url || undefined,
          name,
          problem,
          context,
          structure,
          contraindications,
          examples,
          references,
          forces,
          alsoKnowAs,
          applicability,
          status,
          author,
          DOI,
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
          await DataStore.save(
            Pattern.copyOf(patternRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "PatternUpdateForm")}
    >
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        defaultValue={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url: value,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url,
              name: value,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
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
      <TextField
        label="Problem"
        isRequired={false}
        isReadOnly={false}
        defaultValue={problem}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem: value,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
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
      ></TextField>
      <TextField
        label="Context"
        isRequired={false}
        isReadOnly={false}
        defaultValue={context}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context: value,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
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
      ></TextField>
      <TextField
        label="Structure"
        isRequired={false}
        isReadOnly={false}
        defaultValue={structure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure: value,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
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
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications: values,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            values = result?.contraindications ?? values;
          }
          setContraindications(values);
          setCurrentContraindicationsValue(undefined);
        }}
        currentFieldValue={currentContraindicationsValue}
        label={"Contraindications"}
        items={contraindications}
        hasError={errors.contraindications?.hasError}
        setFieldValue={setCurrentContraindicationsValue}
        inputFieldRef={contraindicationsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Contraindications"
          isRequired={false}
          isReadOnly={false}
          value={currentContraindicationsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.contraindications?.hasError) {
              runValidationTasks("contraindications", value);
            }
            setCurrentContraindicationsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "contraindications",
              currentContraindicationsValue
            )
          }
          errorMessage={errors.contraindications?.errorMessage}
          hasError={errors.contraindications?.hasError}
          ref={contraindicationsRef}
          {...getOverrideProps(overrides, "contraindications")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples: values,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            values = result?.examples ?? values;
          }
          setExamples(values);
          setCurrentExamplesValue(undefined);
        }}
        currentFieldValue={currentExamplesValue}
        label={"Examples"}
        items={examples}
        hasError={errors.examples?.hasError}
        setFieldValue={setCurrentExamplesValue}
        inputFieldRef={examplesRef}
        defaultFieldValue={undefined}
      >
        <TextAreaField
          label="Examples"
          isRequired={false}
          isReadOnly={false}
          value={currentExamplesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.examples?.hasError) {
              runValidationTasks("examples", value);
            }
            setCurrentExamplesValue(value);
          }}
          onBlur={() => runValidationTasks("examples", currentExamplesValue)}
          errorMessage={errors.examples?.errorMessage}
          hasError={errors.examples?.hasError}
          ref={examplesRef}
          {...getOverrideProps(overrides, "examples")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references: values,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            values = result?.references ?? values;
          }
          setReferences(values);
          setCurrentReferencesValue(undefined);
        }}
        currentFieldValue={currentReferencesValue}
        label={"References"}
        items={references}
        hasError={errors.references?.hasError}
        setFieldValue={setCurrentReferencesValue}
        inputFieldRef={referencesRef}
        defaultFieldValue={undefined}
      >
        <TextAreaField
          label="References"
          isRequired={false}
          isReadOnly={false}
          value={currentReferencesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.references?.hasError) {
              runValidationTasks("references", value);
            }
            setCurrentReferencesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("references", currentReferencesValue)
          }
          errorMessage={errors.references?.errorMessage}
          hasError={errors.references?.hasError}
          ref={referencesRef}
          {...getOverrideProps(overrides, "references")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces: values,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
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
        <TextField
          label="Forces"
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
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs: values,
              applicability,
              status,
              author,
              DOI,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            values = result?.alsoKnowAs ?? values;
          }
          setAlsoKnowAs(values);
          setCurrentAlsoKnowAsValue(undefined);
        }}
        currentFieldValue={currentAlsoKnowAsValue}
        label={"Also know as"}
        items={alsoKnowAs}
        hasError={errors.alsoKnowAs?.hasError}
        setFieldValue={setCurrentAlsoKnowAsValue}
        inputFieldRef={alsoKnowAsRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Also know as"
          isRequired={false}
          isReadOnly={false}
          value={currentAlsoKnowAsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.alsoKnowAs?.hasError) {
              runValidationTasks("alsoKnowAs", value);
            }
            setCurrentAlsoKnowAsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("alsoKnowAs", currentAlsoKnowAsValue)
          }
          errorMessage={errors.alsoKnowAs?.errorMessage}
          hasError={errors.alsoKnowAs?.hasError}
          ref={alsoKnowAsRef}
          {...getOverrideProps(overrides, "alsoKnowAs")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability: values,
              status,
              author,
              DOI,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            values = result?.applicability ?? values;
          }
          setApplicability(values);
          setCurrentApplicabilityValue(undefined);
        }}
        currentFieldValue={currentApplicabilityValue}
        label={"Applicability"}
        items={applicability}
        hasError={errors.applicability?.hasError}
        setFieldValue={setCurrentApplicabilityValue}
        inputFieldRef={applicabilityRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Applicability"
          isRequired={false}
          isReadOnly={false}
          value={currentApplicabilityValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.applicability?.hasError) {
              runValidationTasks("applicability", value);
            }
            setCurrentApplicabilityValue(value);
          }}
          onBlur={() =>
            runValidationTasks("applicability", currentApplicabilityValue)
          }
          errorMessage={errors.applicability?.errorMessage}
          hasError={errors.applicability?.hasError}
          ref={applicabilityRef}
          {...getOverrideProps(overrides, "applicability")}
        ></TextField>
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
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status: value,
              author,
              DOI,
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
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author: values,
              DOI,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            values = result?.author ?? values;
          }
          setAuthor(values);
          setCurrentAuthorValue(undefined);
        }}
        currentFieldValue={currentAuthorValue}
        label={"Author"}
        items={author}
        hasError={errors.author?.hasError}
        setFieldValue={setCurrentAuthorValue}
        inputFieldRef={authorRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Author"
          isRequired={false}
          isReadOnly={false}
          value={currentAuthorValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.author?.hasError) {
              runValidationTasks("author", value);
            }
            setCurrentAuthorValue(value);
          }}
          onBlur={() => runValidationTasks("author", currentAuthorValue)}
          errorMessage={errors.author?.errorMessage}
          hasError={errors.author?.hasError}
          ref={authorRef}
          {...getOverrideProps(overrides, "author")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Doi"
        isRequired={false}
        isReadOnly={false}
        defaultValue={DOI}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI: value,
              history,
              patternType,
              documentation,
            };
            const result = onChange(modelFields);
            value = result?.DOI ?? value;
          }
          if (errors.DOI?.hasError) {
            runValidationTasks("DOI", value);
          }
          setDOI(value);
        }}
        onBlur={() => runValidationTasks("DOI", DOI)}
        errorMessage={errors.DOI?.errorMessage}
        hasError={errors.DOI?.hasError}
        {...getOverrideProps(overrides, "DOI")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
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
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
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
        defaultValue={documentation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url,
              name,
              problem,
              context,
              structure,
              contraindications,
              examples,
              references,
              forces,
              alsoKnowAs,
              applicability,
              status,
              author,
              DOI,
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
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
            children="Submit"
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
