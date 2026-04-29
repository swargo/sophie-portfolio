export enum Variant {
  solid = "solid",
  outline = "outline",
  flat = "flat",
  icon = "icon",
  iconFlat = "iconflat",
}

type LabelLinkProps = {
  label: string;
  variant?: Variant;
  IconComponent?: React.JSX.Element;
  href: string;
} & React.ComponentPropsWithoutRef<"a">;

type IconLinkProps = {
  label?: never;
  variant?: Variant;
  IconComponent: React.JSX.Element;
  href: string;
} & React.ComponentPropsWithoutRef<"a">;

export type LinkProps = LabelLinkProps | IconLinkProps;
