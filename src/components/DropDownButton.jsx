import { useState } from "react";
import '../styles/DropDownButton.scss';
import classNames from "classnames";

export const DropDownButton = ({
  title = 'Set props title',
  dropTitle = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div
      className={classNames(
        "drop-down-button", {
          "drop-down-button--arrow": dropTitle !== '',
          "drop-down-button--open": isOpen && dropTitle !== '',
        }
      )}
      onClick={handleClick}
    >
      <div className="drop-down-button__title">{title}</div>
      {isOpen && dropTitle !== '' && <div className="drop-down-button__drop">{dropTitle}</div>}
    </div>
  );
};
