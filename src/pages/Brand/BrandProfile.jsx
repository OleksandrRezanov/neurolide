import { useState } from 'react';
import { Button } from '../../components/Button';
import { buttonTypes } from '../../variables/button';
import { TopMenuItem } from '../../components/TopMenuItem';
import { Modal } from '../../components/Modal';
import { FormItem } from '../../components/FormItem';

import avatar from '../../img/avatar.png';
import '../../styles/Profile.scss';
import '../../styles/BrandProfile.scss';
import { BankCard } from '../../components/BankCard';
import { AddCard } from '../../components/AddCard';

const defaultNewCard = {
  isOpen: false,
  number: '',
  name: '',
  cvc: '',
  date: '',
};

export const BrandProfile = () => {
  const [addCardModal, setAddCardModal] = useState(defaultNewCard);

  const setAddCardModalValue = (key, value) => {
    setAddCardModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className="profile brand-profile">
      <div className="manager__profile brand-profile__bg">
        <div className="brand-profile__profile-wrapper">
          <div>
            <img src={avatar} alt='Avatar' />
          </div>

          <div className='brand-profile__buttons'>
            <div className='brand-profile__button'>
              <Button title='Вихід' type={buttonTypes.medium} />
            </div>

            <div className='brand-profile__button'>
              <Button title='Видалити профіль' type={buttonTypes.medium} hasBG={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="manager__header">
        <TopMenuItem title='Ліди' value='601,78' lineColor='red' />
        <TopMenuItem title='Списання' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Approve' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="manager__body">
        <div className="manager__wrapper">
          <div className="manager__info">
            <div className="manager__info-item">
              <p className="manager__info-item-title">
                Admin id:
              </p>

              <p className="manager__info-item-value">
                110A
              </p>
            </div>

            <div className="manager__info-item">
              <p className="manager__info-item-title">
                Ім’я:
              </p>

              <p className="manager__info-item-value">
                Adela Parkson
              </p>
            </div>

            <div className="manager__info-item">
              <p className="manager__info-item-title">
                Адреса:
              </p>

              <p className="manager__info-item-value">
                Khumaltar, Lalitpur
              </p>
            </div>

            <div className="manager__info-item">
              <p className="manager__info-item-title">
                Номер телефону:
              </p>

              <p className="manager__info-item-value">
                9841236978
              </p>
            </div>

            <div className="manager__info-item">
              <p className="manager__info-item-title">
                Email:
              </p>

              <p className="manager__info-item-value">
                Adela98@gmail.com
              </p>
            </div>

            <div className="manager__info-item">
              <p className="manager__info-item-title">
                Пароль:
              </p>

              <p className="manager__info-item-value">
                *******
              </p>
            </div>
          </div>

          <div className="manager__info-buttons">
            <div>
              <Button type={buttonTypes.medium} title='Редагувати особисти дані' hasBG={true} />
            </div>

            <div>
              <Button type={buttonTypes.medium} title='Зберегти зміни' />
            </div>
          </div>

          <div className='brand-profile__cards'>
            <div className="balance__button-wrapper">
              <Button type={buttonTypes.mediumLarge} title='Метод оплати' />
            </div>

            <div className="balance__cards">
              <BankCard
                cardType='visa'
                cardNumber='4149 4993 5517 3814'
                cardBallance='95,400.00'
                cardHolder='Kevin Gilbert'
                expirationDate='04 / 24'
              />

              <BankCard
                cardType='master-card'
                cardNumber='4149 4993 2546 5468'
                cardBallance='87,580.00'
                cardHolder='Kevin Gilbert'
                expirationDate='12 / 22'
              />

              <div onClick={() => setAddCardModal({ ...addCardModal, isOpen: true })}>
                <AddCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {addCardModal.isOpen && (
        <Modal title='Додати нову карту'>
          <FormItem
            title='Номер карти'
            placeholder='Номер карти'
            value={addCardModal.number}
            setValue={(value) => setAddCardModalValue('number', value)}
          />

          <FormItem
            title='Ініціали, вказані на карті'
            placeholder='Ім’я та прізвище'
            value={addCardModal.name}
            setValue={(value) => setAddCardModalValue('name', value)}
          />

          <div className="users__modal-item-group">
            <FormItem
              title='CVC'
              value={addCardModal.cvc}
              setValue={(value) => setAddCardModalValue('cvc', value)}
            />

            <FormItem
              title='Дата завершення'
              placeholder='MM / YY'
              value={addCardModal.date}
              setValue={(value) => setAddCardModalValue('date', value)}
            />
          </div>

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setAddCardModal({ ...addCardModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='+ Додати карту' />
          </div>
        </Modal>
      )}
    </section>
  );
};
