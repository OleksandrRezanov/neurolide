import classNames from 'classnames';
import '../styles/FormItem.scss';

export const FormItem = ({
  title = 'Set props title',
  placeholder = '....',
  type = 'text',
  value,
  setValue,
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='form-item'>
      <label className='form-item__title'>
        {title}
      </label>
  
      <input
        className={classNames(
          'form-item__input', {
            'form-item__input--text-area': type === 'text-area',
          }
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};
