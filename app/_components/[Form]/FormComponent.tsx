import { FormProps } from "@/app/types";

export default function FormComponent(props: FormProps) {
  return (
    <div>
      <label htmlFor={props.title} className="block font-semibold">
        {props.fieldName}
      </label>
      <div className="mt-2">
        <input
          id={props.title}
          name={props.title}
          type="text"
          autoComplete={props.autoComplete}
          className="formField"
        />
      </div>
    </div>
  );
}
