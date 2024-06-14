import { useState } from "react";
import '../styles/DropDownInputButton.scss';
import classNames from "classnames";

export const DropDownInputButton = ({
  title = 'Set props title',
  placeholder = 'Set props title',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formValue, setFormValue] = useState('');

  console.log('title: ', formTitle);
  console.log('value: ', formValue);

  const handleClick = () => setIsOpen(!isOpen);
  const handleTitleChange = (event) => setFormTitle(event.target.value);
  const handleValueChange = (event) => setFormValue(event.target.value);

  return (
    <div
      className={classNames(
        "input-button input-button--arrow", {
          "input-button--open": isOpen,
        }
      )}
      onClick={handleClick}
    >
      <div className="input-button__title">
        {title}
      </div>

      {isOpen && (
        <form className="input-button__form" onClick={(e) => e.stopPropagation()}>
          <input
            className="input-button__form-item input-button__form-item--title"
            placeholder={placeholder}
            value={formTitle}
            onChange={handleTitleChange}
          />

          <input
            className="input-button__form-item input-button__form-item--value"
            placeholder="$"
            value={formValue}
            onChange={handleValueChange}
          />
        </form>
      )}
    </div>
  );
};
