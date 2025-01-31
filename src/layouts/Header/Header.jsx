import "./Header.scss"

import { ReactComponent as SVGSearch } from "@/assets/icons/search.svg"
import { ReactComponent as SVGNotification } from "@/assets/icons/notification.svg"

import Logo from "@/components/Logo";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

import classNames from "classnames";



const Header = (props) => {

  const {
    url,
  } = props;

  const menuItems = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Movies & Shows",
      href: "/movies"
    },
    {
      label: "Support",
      href: "/support"
    },
    {
      label: "Subscriptions",
      href: "/subscriptions"
    }
  ]

  return (
    <header className="header">
       <div className="header__inner container">
         <Logo className="header__logo" loading="eager" />
         <nav className="header__menu">
           <ul className="header__menu-list">
             {menuItems.map(({ label, href}, index) => (
               <li className="header__menu-item" key={index}>
                 <a href={href} className={classNames("header__menu-link", {
                   "is-active": href === url,
                 })}>
                   {label}
                 </a>
               </li>
             ))}
           </ul>
         </nav>
         <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              mode="transparent"
              isLabelHidden
              iconName="search"
              IconFallbackSVG={SVGSearch}
            />
            <Button
              className="header__button"
              label="Notifications"
              mode="transparent"
              isLabelHidden
              iconName="notification"
              IconFallbackSVG={SVGNotification}
            />
         </div>
         <BurgerButton
          className="header__burger-button visible-tablet"
         />
       </div>
    </header>
  )
}

export default Header;
