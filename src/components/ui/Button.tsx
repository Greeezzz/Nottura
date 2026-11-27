import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  icon?: boolean;
  className?: string;
  children: ReactNode;
}

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };
type NativeProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

export type ButtonProps = AnchorProps | NativeProps;

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(110deg,#fff_35%,#d9d9e0_50%,#fff_65%)] bg-[length:200%_100%] animate-shine text-bg hover:scale-[1.03] hover:shadow-[0_0_28px_rgb(255_255_255/0.25)]",
  secondary:
    "border border-line bg-white/[0.06] text-fg hover:bg-white/10 hover:border-line-strong",
  ghost: "text-muted hover:text-fg",
};

/** Render `<a>` bila ada `href`, selain itu `<button>`. */
export function Button(props: ButtonProps) {
  const { variant = "primary", icon = false, className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      {children}
      {icon && <ArrowRight size={16} aria-hidden="true" />}
    </>
  );

  if (rest.href !== undefined) {
    const anchorProps = rest as Omit<AnchorProps, keyof BaseProps>;
    const external = /^https?:\/\//.test(anchorProps.href);
    return (
      <a
        {...anchorProps}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as Omit<NativeProps, keyof BaseProps>;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {content}
    </button>
  );
}
