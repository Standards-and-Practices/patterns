/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, SearchField, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const vectorThreeFourFiveOneTwoSevenZeroZeroOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  const vectorThreeFourSixThreeThreeEightTwoTwoOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="157.72px"
        height="34.9px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "WGU Logo")}
      >
        <Icon
          width="51.05px"
          height="34.9px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 51.04833984375,
            height: 34.89892578125,
          }}
          paths={[
            {
              d: "M15.6405 20.9145C13.4061 20.9145 11.5924 19.1007 11.5924 16.8664C11.5924 14.632 13.4061 12.8183 15.6405 12.8183C16.2451 12.8183 16.8234 12.9497 17.3491 13.2125C17.0599 13.1337 16.7971 13.0548 16.4817 13.0548C14.9045 13.0548 13.6164 14.3429 13.6164 15.9201C13.6164 17.4973 14.9045 18.7853 16.4817 18.7853C18.0588 18.7853 19.3469 17.4973 19.3469 15.9201C19.3469 15.5258 19.268 15.1578 19.1366 14.816C19.4783 15.4206 19.6886 16.1041 19.6886 16.8664C19.6886 19.1007 17.8748 20.9145 15.6405 20.9145ZM39.2458 15.9201C39.2458 15.7098 39.2195 15.5258 39.1932 15.3155C39.4035 15.7886 39.5086 16.3144 39.5086 16.8664C39.5086 19.1007 37.6949 20.9145 35.4605 20.9145C33.2262 20.9145 31.4124 19.1007 31.4124 16.8664C31.4124 14.632 33.2262 12.8183 35.4605 12.8183C35.9863 12.8183 36.512 12.9234 36.9851 13.1074C36.8011 13.0811 36.6171 13.0548 36.4068 13.0548C34.8296 13.0548 33.5416 14.3429 33.5416 15.9201C33.5416 17.4973 34.8296 18.7853 36.4068 18.7853C37.984 18.7853 39.2458 17.4973 39.2458 15.9201ZM45.2128 9.00671L42.6893 11.1096C44.0299 12.7394 44.7659 14.7897 44.7659 16.8927C44.7659 21.8871 40.6915 25.9615 35.6971 25.9615C33.3839 25.9615 31.1495 25.0678 29.4672 23.4643L29.4672 19.7316C30.5449 21.966 32.8319 23.5432 35.4868 23.5432C39.1669 23.5432 42.1636 20.5465 42.1636 16.8664C42.1636 14.1589 40.5338 11.8194 38.1943 10.7679C38.2206 10.7416 38.2469 10.7416 38.2732 10.7153C39.6401 10.0582 40.455 9.47987 40.455 9.47987L51.0484 0.779029C48.5512 0.0430064 45.1602 -0.219862 42.111 0.200722C38.0892 0.779026 34.6982 2.22479 34.6982 2.22479C31.465 0.857889 29.4935 0.437302 25.5242 0.411015C21.555 0.437302 19.5835 0.857889 16.3502 2.22479C16.3502 2.22479 12.933 0.779026 8.93742 0.200722C5.88818 -0.219862 2.52351 0.0430064 0 0.779029L10.5935 9.47987C10.5935 9.47987 11.4346 10.0582 12.7752 10.7153C12.8278 10.7416 12.8804 10.7679 12.933 10.7942C10.6198 11.8457 9.01628 14.1589 9.01628 16.8664C9.01628 20.5465 12.0129 23.5432 15.6931 23.5432C18.2166 23.5432 20.4246 22.1237 21.5549 20.0733L21.5549 14.6057L21.5549 13.6857L21.5549 13.712C21.5549 13.6857 21.5549 13.6331 21.5549 13.6068L21.5549 13.5806C21.5549 12.4765 22.4487 11.5828 23.5527 11.5828C24.6568 11.5828 25.5505 12.4765 25.5505 13.5806L25.5505 13.6068L25.5505 15.1578L25.5505 29.0896L21.6864 25.3043L20.9241 24.542C19.6623 25.7512 18.1903 25.9878 15.9033 25.9878C10.8826 25.9878 6.83449 21.9134 6.83449 16.919C6.83449 14.4743 7.30766 12.8971 8.62198 11.4251L6.09848 9.32215C4.33728 11.3725 3.54868 13.7383 3.54868 16.919C3.54868 23.7272 9.09514 29.2736 15.9033 29.2736C16.9548 29.2736 18.0588 29.2473 19.1629 29.0107C20.8189 30.5091 25.7608 34.8989 25.7608 34.8989L32.5164 28.8267C33.5679 29.1159 34.6194 29.2736 35.7234 29.2736C42.5316 29.2736 48.078 23.7272 48.078 16.919C48.0255 14.0011 47.0266 11.2148 45.2128 9.00671Z",
              fill: "rgba(0,40,82,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="67.63%"
          right="0%"
          {...getOverrideProps(overrides, "Vector34512698")}
        ></Icon>
        <Icon
          width="44.11px"
          height="30.54px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 44.10888671875,
            height: 30.544921875,
          }}
          paths={[
            {
              d: "M2.97038 5.62531C2.83894 5.04701 2.18178 4.57385 1.62976 4.57385L0 4.57385L0 0L14.1947 0L14.1947 4.57385L11.1718 4.57385L14.8256 20.7663L14.9045 20.7663L20.004 0L26.0237 0L31.097 20.7663L31.1758 20.7663L34.3565 7.67566C34.8822 5.57274 34.5668 4.57385 32.7793 4.57385L31.5438 4.57385L31.5438 0L44.1088 0L44.1088 4.57385L42.847 4.57385C42.1899 4.57385 41.4013 5.15216 41.191 5.88818L34.8296 30.5449L26.2865 30.5449L22.0018 13.0907L21.923 13.0907L17.6383 30.5449L9.12142 30.5449L2.97038 5.62531Z",
              fill: "rgba(0,40,82,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1.25%"
          bottom="11.22%"
          left="0%"
          right="72.03%"
          {...getOverrideProps(overrides, "Vector34512699")}
        ></Icon>
        <Icon
          width="28.6px"
          height="31.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 28.599609375,
            height: 31.33349609375,
          }}
          paths={[
            {
              d: "M0 15.8245C0 5.6516 5.75675 0 15.1936 0C17.428 0 19.2154 0.210292 20.1618 0.394298L25.9974 0.394298L25.9974 10.4357L20.5823 10.4357L19.7412 5.99333C18.9 5.67789 17.612 5.41502 16.0348 5.41502C11.8026 5.41502 8.7797 8.25397 8.7797 15.4828C8.7797 22.4224 10.83 26.1288 15.2462 26.1288C16.7708 26.1288 17.612 25.9974 18.4794 25.7345L18.4794 20.372L15.8508 20.372L15.8508 15.9296L28.5997 15.9296L28.5997 20.4246L27.7323 20.4246C27.1277 20.4246 26.5231 21.2132 26.5231 21.739L26.5231 30.9392L22.291 30.9392C22.291 30.9392 21.8967 30.0192 21.0818 30.0192C19.5046 30.8078 17.428 31.3335 14.7467 31.3335C5.17845 31.3335 0 25.8659 0 15.8245Z",
              fill: "rgba(0,40,82,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.12%"
          bottom="10.09%"
          left="27.08%"
          right="54.78%"
          onClick={() => {
            vectorThreeFourFiveOneTwoSevenZeroZeroOnClick();
          }}
          {...getOverrideProps(overrides, "Vector34512700")}
        ></Icon>
        <Icon
          width="30.49px"
          height="30.86px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 30.492431640625,
            height: 30.8603515625,
          }}
          paths={[
            {
              d: "M2.65494 19.084L2.65494 5.83561C2.65494 5.30988 2.05035 4.57386 1.44576 4.57386L0 4.57386L0 0L14.2736 0L14.2736 4.57386L11.014 4.57386L11.014 19.5835C11.014 24.2099 12.8804 25.6556 16.3239 25.6556C19.82 25.6556 21.6864 24.2099 21.6864 19.5835L21.6864 4.57386L18.4531 4.57386L18.4531 0L30.4924 0L30.4924 4.57386L29.0992 4.57386C28.5209 4.57386 27.89 5.30988 27.89 5.83561L27.89 19.084C27.89 26.8123 23.9207 30.8604 15.4039 30.8604C7.0185 30.8604 2.65494 26.8123 2.65494 19.084Z",
              fill: "rgba(0,40,82,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1.33%"
          bottom="10.24%"
          left="45.25%"
          right="35.42%"
          {...getOverrideProps(overrides, "Vector34512701")}
        ></Icon>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavBarItems")}
      >
        <SearchField
          placeholder="Search Patterns"
          width="unset"
          grow="1"
          shrink="1"
          basis="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon29767083")}
        >
          <Icon
            width="16px"
            height="19.5px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            paths={[
              {
                d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.42%"
            bottom="8.33%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector29767084")}
          ></Icon>
        </View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon34643823")}
        >
          <Icon
            width="9.33px"
            height="9.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.333251953125,
              height: 9.33349609375,
            }}
            paths={[
              {
                d: "M9.33333 5.33333L5.33333 5.33333L5.33333 9.33333L4 9.33333L4 5.33333L0 5.33333L0 4L4 4L4 0L5.33333 0L5.33333 4L9.33333 4L9.33333 5.33333Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="31.25%"
            bottom="29.86%"
            left="29.17%"
            right="31.94%"
            transformOrigin="top left"
            transform="rotate(0deg)"
            onClick={() => {
              vectorThreeFourSixThreeThreeEightTwoTwoOnClick();
            }}
            {...getOverrideProps(overrides, "Vector34633822")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
