import { useState } from 'react';
import { Button } from '../../components/Button';
import { TopMenuItem } from '../../components/TopMenuItem';
import { buttonIcons, buttonTypes, iconButtonTypes } from '../../variables/button';
import { Modal } from '../../components/Modal';
import { FormItem } from '../../components/FormItem';
import { DropDownButton } from '../../components/DropDownButton';

import '../../styles/table.scss';
import '../../styles/Manager.scss';
import avatar from '../../img/avatar.png';

const tableData = [
  { id: 112 },
  { id: 113 },
  { id: 114 },
  { id: 115 },
  { id: 116 },
];

const defaultEditModal = {
  isOpen: false,
  name: '',
  link: '',
  brand: '',
  payments: '',
  balance: '',
};

export const Manager = () => {
  const [editModal, setEditModal] = useState(defaultEditModal);
  const [addModal, setAddModal] = useState(defaultEditModal);

  const setEditModalValue = (key, value) => {
    setEditModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setAddModalValue = (key, value) => {
    setAddModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <section className="manager">
      <div className="manager__profile">
        <div className="manager__profile-wrapper">
          <img src={avatar} alt='Avatar' />
          <Button title='Вихід' type={buttonTypes.medium} />
          <Button title='Видалити профіль' type={buttonTypes.medium} hasBG={true} />
        </div>
      </div>

      <div className="manager__header">
        <TopMenuItem title='Індекс' value='601,78' lineColor='red' />
        <TopMenuItem title='Зачислення' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Бюджет' value='216' lineColor='green' />
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

          <div className="manager__offers">
            <div className="manager__offers-buttons">
              <div>
                <Button type={buttonTypes.extraLarge} title='Додані офери' />
              </div>

              <div className="manager__offers-buttons-wrapper">
                <div className="manager__offers-search">
                  <Button type={buttonTypes.search} title='Пошук' icon={buttonIcons.search} />
                </div>

                <div
                  className="manager__offers-add-offer"
                  onClick={() => setAddModal({ ...addModal, isOpen: true })}
                >
                  <Button type={buttonTypes.medium} title='Додати офер' hasBG={true} />
                </div>
              </div>
            </div>

            <div className="manager__offers-table">
              <div className="table">
                <div className="table__header manager__table">
                  <div className="table__item table__item--header">UID</div>
                  <div className="table__item table__item--header">Назва</div>
                  <div className="table__item table__item--header">Посилання</div>
                  <div className="table__item table__item--header">Бренд</div>
                  <div className="table__item table__item--header">Виплати</div>
                  <div className="table__item table__item--header">Payout</div>
                  <div className="table__item table__item--header">Баланс</div>
                  <div className="table__item table__item--header">Налаштування</div>
                </div>

                <div className="table__rows">
                  {tableData.map(({ id }) => (
                    <div key={id} className="table__row manager__table manager__table--row">
                      <div className="table__item">{id}</div>
                      <div className="table__item">Mithlesha Kumara Singha</div>
                      <div className="table__item">wordwall.net</div>
                      <div className="table__item">Kritipur, Kathmandu</div>
                      <div className="table__item">$122</div>
                      <div className="table__item manager__table--button">RevShare</div>
                      <div className="table__item">$1489</div>
                      <div className="table__item manager__table--buttons">
                        <div onClick={() => setEditModal({ ...editModal, isOpen: true })}>
                          <Button type={buttonTypes.icon} icon={iconButtonTypes.settings} />
                        </div>
                        <Button type={buttonTypes.icon} icon={iconButtonTypes.deleteBasket} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {editModal.isOpen && (
        <Modal title='Редагувати офер'>
          <FormItem
            title='Назва'
            value={editModal.name}
            setValue={(value) => setEditModalValue('name', value)}
          />

          <FormItem
            title='Посилання'
            value={editModal.link}
            setValue={(value) => setEditModalValue('link', value)}
          />

          <FormItem
            title='Бренд'
            value={editModal.brand}
            setValue={(value) => setEditModalValue('brand', value)}
          />

          <FormItem
            title='Виплати'
            value={editModal.payments}
            setValue={(value) => setEditModalValue('payments', value)}
          />

          <FormItem
            title='Баланс'
            value={editModal.balance}
            setValue={(value) => setEditModalValue('balance', value)}
          />

          <div className="manager__modal-edit-buttons">
            <p className="manager__modal-edit-buttons-title">Модель оплати</p>

            <div className="manager__modal-edit-buttons-container">
              <DropDownButton title='RevShare' dropTitle='%$' />
              <DropDownButton title='CPL' dropTitle='$' />
              <DropDownButton title='CPC' dropTitle='$' />
              <DropDownButton title='CPM' />
              <DropDownButton title='CPH' />
            </div>
          </div>

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setEditModal({ ...editModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='+ Додати офер' />
          </div>
        </Modal>
      )}

      {addModal.isOpen && (
        <Modal title='Додати офер'>
          <FormItem
            title='Назва'
            value={addModal.name}
            setValue={(value) => setAddModalValue('name', value)}
          />

          <FormItem
            title='Посилання'
            value={addModal.link}
            setValue={(value) => setAddModalValue('link', value)}
          />

          <FormItem
            title='Бренд'
            value={addModal.brand}
            setValue={(value) => setAddModalValue('brand', value)}
          />

          <FormItem
            title='Виплати'
            value={addModal.payments}
            setValue={(value) => setAddModalValue('payments', value)}
          />

          <FormItem
            title='Баланс'
            value={addModal.balance}
            setValue={(value) => setAddModalValue('balance', value)}
          />

          <div className="manager__modal-edit-buttons">
            <p className="manager__modal-edit-buttons-title">Модель оплати</p>

            <div className="manager__modal-edit-buttons-container">
              <DropDownButton title='RevShare' dropTitle='%$' />
              <DropDownButton title='CPL' dropTitle='$' />
              <DropDownButton title='CPC' dropTitle='$' />
              <DropDownButton title='CPM' />
              <DropDownButton title='CPH' />
            </div>
          </div>

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setAddModal({ ...addModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='+ Додати офер' />
          </div>
        </Modal>
      )}
    </section>
  );
};
