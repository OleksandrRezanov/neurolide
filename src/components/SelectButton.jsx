import classNames from "classnames";
import { useState } from "react";

export const SelectButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('CPM');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleValueSelect = (value) => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={classNames(
        "media-channels__table-item-button", {
          "media-channels__table-item-button--arrow": isDropdownOpen,
        }
      )}
      onClick={toggleDropdown}
    >
      <div className="media-channels__table-item-button-title">
        {selectedValue}
      </div>

      {isDropdownOpen && (
        <div className="media-channels__table-item-button-drop">
          {selectedValue !== 'CPM' && (
            <div onClick={() => handleValueSelect('CPM')}>CPM</div>
          )}
          {selectedValue !== 'CPH' && (
            <div onClick={() => handleValueSelect('CPH')}>CPH</div>
          )}
        </div>
      )}
    </div>
  );
};