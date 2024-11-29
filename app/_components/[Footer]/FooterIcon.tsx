import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Link } from "lucide-react";

export const FooterIcon = (props: {
  href: string;
  icon: any;
  label: string;
}) => {
  return (
    <button className="footerButton">
      <a
        target="_blank"
        href={props.href}
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <AccessibleIcon label={props.label}>
          <span className="max-auto [&>svg]:h-5 [&>svg]:w-5">{props.icon}</span>
        </AccessibleIcon>
      </a>
    </button>
  );
};
