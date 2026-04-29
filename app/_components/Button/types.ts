export enum Variant {
  solid = "solid",
  outline = "outline",
  flat = "flat",
  icon = "icon",
  iconFlat = "iconflat",
}

type LabelButtonProps = {
  label: string;
  variant?: Variant;
  disabled?: boolean;
  IconComponent?: React.JSX.Element;
} & React.ComponentPropsWithoutRef<"button">;

type IconButtonProps = {
  label?: never;
  variant?: Variant;
  disabled?: boolean;
  IconComponent: React.JSX.Element;
} & React.ComponentPropsWithoutRef<"button">;

export type ButtonProps = LabelButtonProps | IconButtonProps;
