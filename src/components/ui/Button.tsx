import type { ButtonHTMLAttributes } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest-500 text-paper hover:bg-forest-600 focus-visible:outline-forest-600",
  outline:
    "border border-forest-500 text-forest-700 hover:bg-forest-50 focus-visible:outline-forest-600",
  ghost: "text-ink hover:bg-mist-100 focus-visible:outline-forest-600",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, target, onClick } = props;
    return (
      <Link href={href} target={target} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const {
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    type = "button",
    ...rest
  } = props as ButtonAsButton;

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
