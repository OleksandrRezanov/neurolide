import { useState } from 'react';
import { Button } from '../../components/Button';
import { buttonIcons, buttonTypes, iconButtonTypes } from '../../variables/button';
import { TopMenuItem } from '../../components/TopMenuItem';
import { Modal } from '../../components/Modal';
import { FormItem } from '../../components/FormItem';
import { DropDownInputButton } from '../../components/DropDownInputButton';

import avatar from '../../img/avatar.png';
import tableImage from '../../img/media-channel-table-image.png';
import '../../styles/Profile.scss';

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
  subscribers: '',
  ctr: '',
  price: '',
};

export const Profile = () => {
  const [addModal, setAddModal] = useState(defaultEditModal);
  const [editModal, setEditModal] = useState(defaultEditModal);

  const setAddModalValue = (key, value) => {
    setAddModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setEditModalValue = (key, value) => {
    setEditModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className="profile">
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
                <Button type={buttonTypes.extraLarge} title='Медіа канали' />
              </div>

              <div className="manager__offers-buttons-wrapper">
                <div className="manager__offers-search">
                  <Button type={buttonTypes.search} title='Пошук' icon={buttonIcons.search} />
                </div>

                <div
                  className="manager__offers-add-offer"
                  onClick={() => setAddModal({ ...addModal, isOpen: true })}
                >
                  <Button type={buttonTypes.medium} title='Додати канал' hasBG={true} />
                </div>
              </div>
            </div>

            <div className="media-channels__table">
              <div className="table">
                <div className="table__header profile__table-grid">
                  <div className="table__item table__item--header">UID</div>
                  <div className="table__item table__item--header">Нікнейм</div>
                  <div className="table__item table__item--header">Посилання</div>
                  <div className="table__item table__item--header">Підписники</div>
                  <div className="table__item table__item--header">CTR</div>
                  <div className="table__item table__item--header">Ціна</div>
                  <div className="table__item table__item--header">Статус</div>
                </div>

                <div className="table__rows">
                  {tableData.map(({ id }) => (
                    <div key={id} className="table__row profile__table-grid media-channels__row">
                      <div className="table__item">
                        <img src={tableImage} alt="Media channel" />
                      </div>

                      <div className="table__item media-channels__row-item-wrapper">
                        <p>Кріейтори</p>
                        <p className="media-channels__row-item--small">Ком’юніті українських АІ-крінйторів</p>
                      </div>

                      <div className="table__item media-channels__row-item--large">wordwall.net</div>
                      <div className="table__item">20 989</div>
                      <div className="table__item">9 897</div>
                      <div className="table__item">32 700 ₴</div>
                      <div className="table__item manager__table--buttons">
                        <div onClick={() => setEditModal({ ...editModal, isOpen: true })}>
                          <Button type={buttonTypes.icon} icon={iconButtonTypes.settings} />
                        </div>

                        <div>
                          <Button type={buttonTypes.icon} icon={iconButtonTypes.deleteBasket} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {addModal.isOpen && (
        <Modal title='Додати новий канал'>
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
            title='Підписники'
            value={addModal.brand}
            setValue={(value) => setAddModalValue('subscribers', value)}
          />

          <FormItem
            title='CTR'
            value={addModal.payments}
            setValue={(value) => setAddModalValue('ctr', value)}
          />

          <FormItem
            title='Ціна'
            value={addModal.balance}
            setValue={(value) => setAddModalValue('price', value)}
          />

          <div className="manager__modal-edit-buttons">
            <p className="manager__modal-edit-buttons-title">Модель нарахування</p>

            <div className="manager__modal-edit-buttons-container">
              <DropDownInputButton title='CPH' placeholder='UTC' />
              <DropDownInputButton title='CPM' placeholder='CTR' />
            </div>
          </div>

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setAddModal({ ...addModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='+ Додати канал' />
          </div>
        </Modal>
      )}

      {editModal.isOpen && (
        <Modal title='Редагувати канал'>
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
            title='Підписники'
            value={editModal.brand}
            setValue={(value) => setEditModalValue('subscribers', value)}
          />

          <FormItem
            title='CTR'
            value={editModal.payments}
            setValue={(value) => setEditModalValue('ctr', value)}
          />

          <FormItem
            title='Ціна'
            value={editModal.balance}
            setValue={(value) => setEditModalValue('price', value)}
          />

          <div className="manager__modal-edit-buttons">
            <p className="manager__modal-edit-buttons-title">Модель нарахування</p>

            <div className="manager__modal-edit-buttons-container">
              <DropDownInputButton title='CPH' placeholder='UTC' />
              <DropDownInputButton title='CPM' placeholder='CTR' />
            </div>
          </div>

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setEditModal({ ...editModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='+ Додати канал' />
          </div>
        </Modal>
      )}
    </section>
  );
};
