import { useState } from "react";

import { Button } from "../../components/Button";
import { TopMenuItem } from "../../components/TopMenuItem";
import { BankCard } from '../../components/BankCard';
import { AddCard } from '../../components/AddCard';
import { Modal } from "../../components/Modal";
import { FormItem } from "../../components/FormItem";
import { buttonTypes } from "../../variables/button";

import '../../styles/Balance.scss';

const defaultNewCard = {
  isOpen: false,
  number: '',
  name: '',
  cvc: '',
  date: '',
};

const defaultCashOut = {
  isOpen: false,
  name: '',
  number: '',
  email: '',
  sum: '',
};

const defaultRefillCard = {
  isOpen: false,
  number: '',
  validity: '',
  cvv2: '',
  holderName: '',
  phoneNumber: '',
  email: '',
  sum: '',
};

export const AffiliatBalance = () => {
  const [addCardModal, setAddCardModal] = useState(defaultNewCard);
  const [cashOutModal, setCashOutModal] = useState(defaultCashOut);
  const [refillCardModal, setRefillCardModal] = useState(defaultRefillCard);

  const setAddCardModalValue = (key, value) => {
    setAddCardModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setCashOutModalValue = (key, value) => {
    setCashOutModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setRefillCardModalValue = (key, value) => {
    setRefillCardModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className="balance">
      <div className="manager__profile">
        <div className="manager__profile-wrapper" />
      </div>

      <div className="manager__header">
        <TopMenuItem title='Кліки' value='601,78' lineColor='red' />
        <TopMenuItem title='Холд' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Нарахування' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="manager__body">
        <div className="manager__wrapper">
          <div className="balance__button-wrapper">
            <Button type={buttonTypes.mediumLarge} title='Платіжний метод' />
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

          <div className="balance__buttons">
            <div className="balance__button-wrapper">
              <Button type={buttonTypes.mediumLarge} title='Особистий баланс' />
            </div>

            <div
              className="balance__button-wrapper"
              onClick={() => setRefillCardModal({ ...refillCardModal, isOpen: true })}
            >
              <Button type={buttonTypes.mediumLarge} title='Поповнити баланс' hasBG={true} />
            </div>

            <div
              className="balance__button-wrapper"
              onClick={() => setCashOutModal({ ...cashOutModal, isOpen: true })}
            >
              <Button type={buttonTypes.mediumLarge} title='Вивести баланс' hasBG={true} />
            </div>
          </div>

          <div className="balance__item">
            <p className="balance__item-title">Баланс</p>
            <p className="balance__item-value">$85,400.00</p>
          </div>

          <div className="balance__history">
            <div className="balance__button-wrapper">
              <Button type={buttonTypes.mediumLarge} title='Історія платежів' />
            </div>

            <div className="balance__history-list">
              <div className="balance__history-list-grid balance__history-list-title">
                <p>Номер.</p>
                <p>Дата рахунку</p>
                <p>Дата оплати</p>
                <p>Статус</p>
                <p>Спосіб оплати</p>
                <p>Підписка</p>
                <p>Сума</p>
              </div>

              <div className="balance__history-list-grid balance__history-list-item">
                <p>EKG464SJFN17</p>
                <p>10 грудня 2024 р.</p>
                <p>10 грудня 2024 р</p>

                <p className="balance__history-list-destination balance__history-list-destination--continue">
                  Прямує до
                </p>

                <p>0077 **** **** 3814 (Visa)</p>
                <p>Бонус (річний)</p>
                <p>$129.88</p>
              </div>

              <div className="balance__history-list-grid balance__history-list-item">
                <p>EKG464SJFN17</p>
                <p>10 грудня 2024 р.</p>
                <p>10 грудня 2024 р</p>

                <p className="balance__history-list-destination  balance__history-list-destination--finished">
                  Завершено
                </p>

                <p>0077 **** **** 3814 (Visa)</p>
                <p>Бонус (річний)</p>
                <p>$129.88</p>
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

      {cashOutModal.isOpen && (
        <Modal title='Вивести баланс'>
          <FormItem
            title="Ім'я"
            value={cashOutModal.name}
            setValue={(value) => setCashOutModalValue('name', value)}
          />

          <FormItem
            title='Номер картки'
            value={cashOutModal.number}
            setValue={(value) => setCashOutModalValue('number', value)}
          />

          <FormItem
            title='Пошта'
            value={cashOutModal.email}
            setValue={(value) => setCashOutModalValue('email', value)}
          />

          <FormItem
            title='Вивести суму'
            value={cashOutModal.sum}
            setValue={(value) => setCashOutModalValue('sum', value)}
          />

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setCashOutModal({ ...cashOutModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='+ Додати канал' />
          </div>
        </Modal>
      )}

      {refillCardModal.isOpen && (
        <Modal title='Поповнення балансу'>
          <FormItem
            title='Номер карти'
            value={refillCardModal.number}
            setValue={(value) => setRefillCardModalValue('number', value)}
          />

          <div className="users__modal-item-group">
            <FormItem
              title='Термін дії'
              value={refillCardModal.validity}
              setValue={(value) => setRefillCardModalValue('validity', value)}
            />

            <FormItem
              title='CVV2'
              value={refillCardModal.cvv2}
              setValue={(value) => setRefillCardModalValue('cvv2', value)}
            />
          </div>

          <FormItem
            title='ПІБ власника'
            value={refillCardModal.holderName}
            setValue={(value) => setRefillCardModalValue('holderName', value)}
          />

          <div className="users__modal-item-group">
            <FormItem
              title='Номер телефону'
              placeholder="+380"
              value={refillCardModal.phoneNumber}
              setValue={(value) => setRefillCardModalValue('phoneNumber', value)}
            />

            <FormItem
              title='Email'
              value={refillCardModal.email}
              setValue={(value) => setRefillCardModalValue('email', value)}
            />
          </div>

          <FormItem
            title='Сума поповнення'
            value={refillCardModal.sum}
            setValue={(value) => setRefillCardModalValue('sum', value)}
          />

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setRefillCardModal({ ...refillCardModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='Поповнити' />
          </div>
        </Modal>
      )}
    </section>
  );
};
