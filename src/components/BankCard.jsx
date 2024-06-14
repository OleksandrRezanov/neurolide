import classNames from 'classnames';
import '../styles/BankCard.scss';

export const BankCard = ({ cardNumber, cardHolder, expirationDate, cardBallance, cardType }) => {
  return (
    <div className='card'>
      <div className={classNames(
        'card__ballance',
        {
          'card__ballance--visa': cardType === 'visa',
          'card__ballance--master-card': cardType === 'master-card',
        }
      )}>
        <p className='card__ballance-value'>
          ${cardBallance}
          <span className='highlighted'> USD</span>
        </p>
      </div>

      <div className='card__info'>
        <p className='card__number'>**** **** **** {cardNumber.split(' ')[3]}</p>

        <div className='card__expiration-date'>
          <p className='card__expiration-date-title highlighted'>Expires</p>

          <p className='card__expiration-date-value'>{expirationDate}</p>
        </div>
      </div>

      <div className='card__holder'>
        <p className='card__holder-name'>{cardHolder}</p>

        <p className='card__cvv'>. . .</p>
      </div>
    </div>
  );
};
