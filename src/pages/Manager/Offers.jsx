import { useState } from "react";
import { Button } from "../../components/Button";
import { DropDownButton } from "../../components/DropDownButton";
import { FormItem } from "../../components/FormItem";
import { Modal } from "../../components/Modal";
import { TopMenuItem } from "../../components/TopMenuItem";
import { buttonIcons, buttonTypes, iconButtonTypes } from "../../variables/button";
import '../../styles/Offers.scss';

const tableData = [
  { id: 112 },
  { id: 113 },
  { id: 114 },
  { id: 115 },
  { id: 116 },
  { id: 117 },
  { id: 118 },
  { id: 119 },
  { id: 120 },
  { id: 121 },
  { id: 122 },
];

const defaultEditModal = {
  isOpen: false,
  name: '',
  link: '',
  brand: '',
  payments: '',
  balance: '',
};

export const Offers = () => {
  const [addModal, setAddModal] = useState(defaultEditModal);

  const setAddModalValue = (key, value) => {
    setAddModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <section className="offers">
      <div className="offers__header">
        <TopMenuItem title='Індекс' value='601,78' lineColor='red' />
        <TopMenuItem title='Зачислення' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Бюджет' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="media-channels__buttons">
        <div>
          <Button type={buttonTypes.extraLarge} title='Офери' />
        </div>

        <div className="media-channels__buttons-wrapper">
          <div>
            <Button type={buttonTypes.search} icon={buttonIcons.search} title='Пошук' />
          </div>

          <div onClick={() => setAddModal({ ...addModal, isOpen: true })}>
            <Button type={buttonTypes.medium} title='Додати офер' hasBG={true} />
          </div>
        </div>
      </div>

      <div className="media-channels__table">
        <div className="table">
          <div className="table__header offers__table-grid">
            <div className="table__item table__item--header">UID</div>
            <div className="table__item table__item--header">Назва</div>
            <div className="table__item table__item--header">Посилання</div>
            <div className="table__item table__item--header">Бренд</div>
            <div className="table__item table__item--header">Виплати</div>
            <div className="table__item table__item--header">Баланс</div>
            <div className="table__item table__item--header">Payout</div>
            <div className="table__item table__item--header">Статус</div>
          </div>

          <div className="table__rows">
            {tableData.map(({ id }) => (
              <div
                key={id}
                className="
                  table__row
                  offers__table-grid
                  media-channels__row
                  manager__table--row
                "
              >
                <div className="table__item">{id}</div>
                <div className="table__item">Mithlesha Kumara Singha</div>
                <div className="table__item media-channels__row-item--large">wordwall.net</div>
                <div className="table__item">Natole, Lalitpur</div>
                <div className="table__item">$122</div>
                <div className="table__item">$1489</div>
                <div className="table__item manager__table--button">RevShare</div>
                <div className="table__item">
                  <div>
                    <Button type={buttonTypes.icon} icon={iconButtonTypes.crossMarkRed} />
                  </div>
                  <Button type={buttonTypes.icon} icon={iconButtonTypes.checkMarkGreen} />
                  <Button type={buttonTypes.icon} icon={iconButtonTypes.vip} />
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
    </section>
  );
};
