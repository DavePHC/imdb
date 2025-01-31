import "./Button.scss"
import classNames from "classnames";
import Icon from "@/components/Icon";

const Button = (props) => {
  const {
    className,
    type = "button",
    // mode = "" || "transparent"
    mode = "",
    target,
    href,
    label,
    isLabelHidden = false,
    iconName,
    // iconPosition = left (* text) || right (text *)
    iconPosition = "left",
  } = props;

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
    />
  )

  return (
    <Component
      className={classNames(className, "button", {
        [`button-${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconPosition === "left" && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">
          {label}
        </span>
      )}
      {iconPosition === "right" && iconComponent}
    </Component>
  )
}

export default Button;