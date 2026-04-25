import styled from "@emotion/styled";
import { ButtonProps, Variant } from "../Button/types";
import { theme } from "../Theme";

const setStyles = (
  variant?: string,
  disabled?: Pick<ButtonProps, "disabled">,
) => {
  const setStylesObject = {
    ...theme.font.primary,
    border: !disabled
      ? `1px solid ${theme.color.bk}`
      : `1px solid ${theme.color.primary}`,
    outline: "none",
    borderRadius: "4px",
    padding: "8.5px 18px",
    margin: "0",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    verticalAlign: "middle",
    cursor: "pointer",
    // transition: theme.transition.fast,
    ":focus-visible": {
      //   outline: `2px solid ${theme.color.foc1}`,
      outlineOffset: "2px",
    },
  };
  switch (variant) {
    case Variant.solid:
      Object.assign(setStylesObject, {
        color: theme.color.wh,
        backgroundColor: theme.color.bk,
        "svg path": {
          fill: theme.color.wh,
        },
        ":hover": {
          borderColor: theme.color.darkAccent,
          backgroundColor: theme.color.darkAccent,
        },
        ":active": {
          //   borderColor: theme.color.b1,
          //   backgroundColor: theme.color.b1,
        },
        ":disabled": {
          //   backgroundColor: theme.color.g4,
          color: theme.color.wh,
          pointerEvents: "none",
          "svg path": {
            fill: theme.color.wh,
          },
        },
      });
      break;

    case Variant.outline:
      Object.assign(setStylesObject, {
        // color: theme.color.b1,
        // border: !disabled
        //   ? `1px solid ${theme.color.b1}`
        //   : `1px solid ${theme.color.g4}`,
        backgroundColor: theme.color.wh,
        "svg path": {
          //   fill: theme.color.b1,
        },
        ":hover": {
          //   backgroundColor: theme.color.g6,
        },
        ":active": {
          //   backgroundColor: theme.color.g5,
        },
        ":disabled": {
          backgroundColor: "transparent",
          //   color: theme.color.g3,
          pointerEvents: "none",
          "svg path": {
            // fill: theme.color.g3,
          },
        },
      });
      break;

    case Variant.flat:
      Object.assign(setStylesObject, {
        // color: theme.color.b3,
        backgroundColor: "transparent",
        border: "1px solid transparent",
        "svg path": {
          //   fill: theme.color.b3,
        },
        ":hover": {
          //   color: theme.color.b2,
          "svg path": {
            // fill: theme.color.b2,
          },
        },
        ":active": {
          //   color: theme.color.g1,
          "svg path": {
            // fill: theme.color.g1,
          },
        },
        ":disabled": {
          //   color: theme.color.g3,
          pointerEvents: "none",
          "svg path": {
            // fill: theme.color.g3,
          },
        },
      });
      break;

    case Variant.icon:
      Object.assign(setStylesObject, {
        width: "40px",
        height: "40px",
        // backgroundColor: theme.color.b3,
        "svg path": {
          fill: theme.color.wh,
        },
        ":hover": {
          //   borderColor: theme.color.b2,
          //   backgroundColor: theme.color.b2,
        },
        ":active": {
          //   borderColor: theme.color.b1,
          //   backgroundColor: theme.color.b1,
        },
        ":disabled": {
          //   backgroundColor: theme.color.g4,
          //   color: theme.color.g6,
          pointerEvents: "none",
          "svg path": {
            fill: theme.color.wh,
          },
        },
      });
      break;

    case Variant.iconFlat:
      Object.assign(setStylesObject, {
        width: "40px",
        height: "40px",
        backgroundColor: "transparent",
        border: "1px solid transparent",
        "svg path": {
          //   fill: theme.color.g1,
        },
        ":focus-visible": {
          //   outline: `2px solid ${theme.color.foc1}`,
          borderRadius: "4px",
        },
      });
      break;

    default:
  }
  return setStylesObject;
};

const StyledButton = styled.button<{
  variant?: Variant;
  disabled?: Pick<ButtonProps, "disabled">;
}>`
  ${({ variant, disabled }) => setStyles(variant, disabled)}
`;

const StyledIconButtonDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledIconContainer = styled.div`
  display: inline-block;
  margin-left: 18px;
`;

const InnerButton = ({
  variant,
  label,
  IconComponent,
}: ButtonProps): React.JSX.Element => {
  switch (variant) {
    case Variant.icon:
      return <StyledIconButtonDiv>{IconComponent}</StyledIconButtonDiv>;
    case Variant.iconFlat:
      return <StyledIconButtonDiv>{IconComponent}</StyledIconButtonDiv>;
    default:
      return (
        <div>
          {label}
          {IconComponent && (
            <StyledIconContainer>{IconComponent}</StyledIconContainer>
          )}
        </div>
      );
  }
};

export const Button = ({
  disabled = false,
  variant = Variant.solid,
  ...props
}: ButtonProps) => (
  <StyledButton disabled={disabled} type="button" variant={variant} {...props}>
    <InnerButton {...props} variant={variant} />
  </StyledButton>
);

export type { ButtonProps, Variant } from "../Button/types";
