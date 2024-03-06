"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  exact?: boolean;
  className?: string;
  children: React.ReactNode;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};
export const NavLink = (props: Props) => {
  const { exact = false, className = "" } = props;
  const pathname = usePathname();
  console.log("🚀 ~ NavLink ~ pathname:", pathname);
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
