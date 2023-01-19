/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function BasicLayoutTemplate(props) {
  const { content, pattern, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(244,249,251,1)"
      {...rest}
      {...getOverrideProps(overrides, "BasicLayoutTemplate")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="561px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(0,48,87,1)"
        {...getOverrideProps(overrides, "Header")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pattern?.name}
          {...getOverrideProps(overrides, "Name")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="561px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="142px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="8px"
          padding="84px 0px 84px 0px"
          backgroundColor="rgba(235,242,246,1)"
          {...getOverrideProps(overrides, "Sidebar")}
        ></Flex>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="8px"
          padding="8px 8px 8px 8px"
          backgroundColor="rgba(255,255,255,1)"
          children={content}
          {...getOverrideProps(overrides, "Content")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
