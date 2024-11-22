import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Link } from "lucide-react";

export const FooterIcon = (props: {
  href: string;
  icon: any;
  label: string;
}) => {
  return (
    <div>
      <a
        target="_blank"
        href={props.href}
        type="button"
        className="footerButton"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <AccessibleIcon label={props.label}>
        {props.icon}
        </AccessibleIcon>
      </a>
    </div>
  );
};
