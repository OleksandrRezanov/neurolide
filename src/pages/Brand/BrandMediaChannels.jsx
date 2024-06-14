import { Button } from "../../components/Button";
import { TopMenuItem } from "../../components/TopMenuItem";
import { SelectButton } from "../../components/SelectButton";

import { buttonIcons, buttonTypes } from "../../variables/button";
import tableImage from '../../img/media-channel-table-image.png';
import '../../styles/MediaChannels.scss';
import '../../styles/BrandMediaChannels.scss';

const tableData = [
  { id: 1, status: 'VIP' },
  { id: 2, status: '' },
  { id: 3, status: 'VIP' },
  { id: 4, status: 'VIP' },
  { id: 5, status: '' },
  { id: 6, status: '' },
  { id: 7, status: 'VIP' },
  { id: 8, status: '' },
  { id: 9, status: 'VIP' },
  { id: 10, status: '' },
  { id: 11, status: '' },
];

export const BrandMediaChannels = () => {
  return (
    <section className="media-channels">
      <div className="media-channels__header">
        <TopMenuItem title='Ліди' value='601,78' lineColor='red' />
        <TopMenuItem title='Списання' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Approve' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="media-channels__buttons">
        <div>
          <Button type={buttonTypes.extraLarge} title='Медіа канали' />
        </div>

        <div className="brand-media-channels__search">
          <Button type={buttonTypes.search} icon={buttonIcons.search} title='Пошук' />
        </div>
      </div>

      <div className="media-channels__table">
        <div className="table">
          <div className="table__header brand-media-channels__table-grid">
            <div className="table__item table__item--header">UID</div>
            <div className="table__item table__item--header">Назва</div>
            <div className="table__item table__item--header">Підписники</div>
            <div className="table__item table__item--header">CTR</div>
            <div className="table__item table__item--header">Payout</div>
            <div className="table__item table__item--header">Ціна</div>
            <div className="table__item table__item--header">Статус</div>
          </div>

          <div className="table__rows">
            {tableData.map(({ id, status }) => (
              <div key={id} className="table__row brand-media-channels__table-grid media-channels__row">
                <div className="table__item">
                  <img src={tableImage} alt="Media channel" />
                </div>

                <div className="table__item media-channels__row-item-wrapper">
                  <p>Кріейтори</p>
                  <p className="media-channels__row-item--small">Ком’юніті українських АІ-крінйторів</p>
                </div>

                <div className="table__item">20 989</div>
                <div className="table__item">9 897</div>
                <div className="table__item">
                  <SelectButton />
                </div>
                <div className="table__item">32 700 ₴</div>
                <div className="table__item">{status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
