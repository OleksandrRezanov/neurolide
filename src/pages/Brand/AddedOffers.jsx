import { useState } from "react";

import { Button } from "../../components/Button";
import { TopMenuItem } from "../../components/TopMenuItem";
import { buttonIcons, buttonTypes, iconButtonTypes } from "../../variables/button";
import { Modal } from "../../components/Modal";
import { FormItem } from "../../components/FormItem";
import '../../styles/Users.scss';
import '../../styles/AddedOffers.scss';
import { DropDownButton } from "../../components/DropDownButton";

const tableData = [
  {
    id: 112,
    email: 'Катманду, річка',
    status: 'Бренд',
  },
  {
    id: 113,
    email: 'Ната, Латіпур',
    status: 'Бренд',
  },
  {
    id: 114,
    email: 'Natole, Lalitpur',
    status: 'Бренд',
  },
  {
    id: 115,
    email: 'Natole, Lalitpur',
    status: 'Бренд',
  },
  {
    id: 116,
    email: 'Natole, Lalitpur',
    status: 'Бренд',
  },
  {
    id: 117,
    email: 'Natole, Lalitpur',
    status: 'Бренд',
  },
  {
    id: 118,
    email: 'Natole, Lalitpur',
    status: 'Бренд',
  },
  {
    id: 119,
    email: 'Natole, Lalitpur',
    status: 'Бренд',
  },
  {
    id: 120,
    email: 'Natole, Lalitpur',
    status: 'Аффіліат',
  },
  {
    id: 121,
    email: 'Natole, Lalitpur',
    status: 'Аффіліат',
  },
  {
    id: 122,
    email: 'Natole, Lalitpur',
    status: 'Аффіліат',
  },
  {
    id: 123,
    email: 'Natole, Lalitpur',
    status: 'Аффіліат',
  },
  {
    id: 124,
    email: 'Natole, Lalitpur',
    status: 'Аффіліат',
  },
];

const defaultEditModal = {
  isOpen: false,
  name: '',
  link: '',
  brand: '',
  payments: '',
  balance: '',
};

export const AddedOffers = () => {
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
    <section className="users">
      <div className="users__header">
        <TopMenuItem title='Ліди' value='601,78' lineColor='red' />
        <TopMenuItem title='Списання' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Approve' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="manager__offers-buttons added-offers__buttons">
        <div>
          <Button type={buttonTypes.extraLarge} title='Додані офери' />
        </div>

        <div className="manager__offers-buttons-wrapper">
          <div className="manager__offers-search">
            <Button type={buttonTypes.search} title='Пошук' icon={buttonIcons.search} />
          </div>

          <div
            onClick={() => setAddModal({ ...addModal, isOpen: true })}
            className="manager__offers-add-offer"
          >
            <Button type={buttonTypes.medium} title='Додати офер' hasBG={true} />
          </div>
        </div>
      </div>

      <div className="users__table">
        <div className="table">
          <div className="table__header added-offers__table-grid">
            <div className="table__item table__item--header">UID</div>
            <div className="table__item table__item--header">Назва</div>
            <div className="table__item table__item--header">Посилання</div>
            <div className="table__item table__item--header">Бренд</div>
            <div className="table__item table__item--header">Виплати</div>
            <div className="table__item table__item--header">Баланс</div>
            <div className="table__item table__item--header">Статус</div>
          </div>

          <div className="table__rows">
            {tableData.map(({ id }) => (
              <div key={id}>
                <div className="table__row added-offers__table-grid">
                  <div className="table__item users__table-id">{id}</div>
                  <div className="table__item">Mithlesha Kumara Singha</div>
                  <div className="table__item">wordwall.net</div>
                  <div className="table__item">Natole, Lalitpur</div>
                  <div className="table__item">$122</div>
                  <div className="table__item">$1489</div>
                  <div className="table__item">
                    <div className="users__table-buttons">
                      <div onClick={() => setEditModal({ ...editModal, isOpen: true })}>
                        <Button
                          type={buttonTypes.icon}
                          icon={iconButtonTypes.settings}
                        />
                      </div>

                      <Button
                        type={buttonTypes.icon}
                        icon={iconButtonTypes.deleteBasket}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      {editModal.isOpen && (
        <Modal title='Додати офер'>
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
    </section>
  );
};
