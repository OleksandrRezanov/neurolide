import { useState } from "react";

import { Button } from "../../components/Button";
import { TopMenuItem } from "../../components/TopMenuItem";
import { SelectButton } from "../../components/SelectButton";
import { Modal } from "../../components/Modal";
import { FormItem } from "../../components/FormItem";

import { buttonIcons, buttonTypes, iconButtonTypes } from "../../variables/button";
import tableImage from '../../img/media-channel-table-image.png';
import '../../styles/MediaChannels.scss';

const tableData = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
];

const defaultOffer = {
  isOpen: false,
  name: '',
  subscribers: '',
  views: '',
  price: '',
};

export const MediaChannels = () => {
  const [addOfferModal, setAddOfferModal] = useState(defaultOffer);

  const setAddOfferModalValue = (key, value) => {
    setAddOfferModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className="media-channels">
      <div className="media-channels__header">
        <TopMenuItem title='Індекс' value='601,78' lineColor='red' />
        <TopMenuItem title='Зачислення' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Бюджет' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="media-channels__buttons">
        <div>
          <Button type={buttonTypes.extraLarge} title='Медіа канали' />
        </div>

        <div className="media-channels__buttons-wrapper">
          <div>
            <Button type={buttonTypes.search} icon={buttonIcons.search} title='Пошук' />
          </div>

          <div onClick={() => setAddOfferModal({ ...addOfferModal, isOpen: true })}>
            <Button type={buttonTypes.medium} title='Додати офер' hasBG={true} />
          </div>
        </div>
      </div>

      <div className="media-channels__table">
        <div className="table">
          <div className="table__header media-channels__table-grid">
            <div className="table__item table__item--header">UID</div>
            <div className="table__item table__item--header">Назва</div>
            <div className="table__item table__item--header">Посилання</div>
            <div className="table__item table__item--header">Підписники</div>
            <div className="table__item table__item--header">CTR</div>
            <div className="table__item table__item--header">Payout</div>
            <div className="table__item table__item--header">Ціна</div>
            <div className="table__item table__item--header">Статус</div>
          </div>

          <div className="table__rows">
            {tableData.map(({ id }) => (
              <div key={id} className="table__row media-channels__table-grid media-channels__row">
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
                <div className="table__item">
                  <SelectButton />
                </div>
                <div className="table__item">32 700 ₴</div>
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

      {addOfferModal.isOpen && (
        <Modal title='Додати новий канал'>
          <FormItem
            title='Назва'
            value={addOfferModal.nicName}
            setValue={(value) => setAddOfferModalValue('name', value)}
          />

          <FormItem
            title='Підписники'
            value={addOfferModal.email}
            setValue={(value) => setAddOfferModalValue('subscribers', value)}
          />

          <FormItem
            title='Перегляди'
            value={addOfferModal.balance}
            setValue={(value) => setAddOfferModalValue('views', value)}
          />

          <FormItem
            title='Ціна'
            value={addOfferModal.transactions}
            setValue={(value) => setAddOfferModalValue('price', value)}
          />

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setAddOfferModal({ ...addOfferModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='+ Додати канал' />
          </div>
        </Modal>
      )}
    </section>
  );
};
