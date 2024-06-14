import '../styles/Modal.scss';

export const Modal = ({ title = 'Заголовок форми', children }) => (
  <div className='modal'>
    <div className='modal__body'>
      <p className='modal__title'>{title}</p>

      <div className='modal__wrapper'>
        {children}
      </div>
    </div>
  </div>
);