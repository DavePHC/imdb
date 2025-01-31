import "./Icon.scss"
import classNames from "classnames";
import { Icon as MinistaIcon } from "minista";

const Icon = (props) => {
  const {
    FallbackSVG,
    className,
    name,
    hasFill = false,
  } = props;
  
  const params = {
    fill: hasFill ? 'currentColor' : 'none',
    stroke: hasFill ? 'none' : 'currentColor',
  }
  
  return (
    <span
      className={classNames(className, "icon")}
    >
      {FallbackSVG
        ? <FallbackSVG {...params} />
        : <MinistaIcon iconId={name} {...params} />
      }
    </span>
  )
}

export default Icon