"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  exact?: boolean;
  className?: string;
  children: React.ReactNode;
  // All other props
  [x: string]: any;
};
export const NavLink = (props: Props) => {
  const { exact = false, className = "" } = props;
  const pathname = usePathname();
  const active = " active";
  const isActive = exact
    ? pathname === props.href
    : pathname.startsWith(props.href);

  let propsClassName = className;
  if (isActive) {
    propsClassName += active;
  }

  return (
    <Link className={propsClassName} {...props}>
      {props.children}
    </Link>
  );
};
