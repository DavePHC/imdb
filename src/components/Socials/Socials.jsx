import "./Socials.scss"

import Button from "@/components/Button";

import classNames from "classnames";

const Socials = (props) => {
  
  const {
    className,
    links = [],
  } = props;
  
  return (
    <div className={classNames(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({label, iconName}, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              mode="black-10"
              href="/"
              target="_blank"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials;