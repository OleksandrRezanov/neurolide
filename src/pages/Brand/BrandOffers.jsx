import { Button } from "../../components/Button";
import { TopMenuItem } from "../../components/TopMenuItem";
import { buttonIcons, buttonTypes } from "../../variables/button";
import '../../styles/Offers.scss';
import '../../styles/BrandOffers.scss';

const tableData = [
  { id: 112, status: 'VIP' },
  { id: 113, status: '' },
  { id: 114, status: 'VIP' },
  { id: 115, status: 'VIP' },
  { id: 116, status: '' },
  { id: 117, status: '' },
  { id: 118, status: 'VIP' },
  { id: 119, status: '' },
  { id: 120, status: 'VIP' },
  { id: 121, status: '' },
  { id: 122, status: '' },
];

export const BrandOffers = () => {
  return (
    <section className="offers">
      <div className="offers__header">
        <TopMenuItem title='Ліди' value='601,78' lineColor='red' />
        <TopMenuItem title='Списання' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Approve' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="media-channels__buttons">
        <div>
          <Button type={buttonTypes.extraLarge} title='Офери' />
        </div>

        <div className="brand-offers__search">
          <Button type={buttonTypes.search} icon={buttonIcons.search} title='Пошук' />
        </div>
      </div>

      <div className="media-channels__table">
        <div className="table">
          <div className="table__header brand-offers__table-grid">
            <div className="table__item table__item--header">UID</div>
            <div className="table__item table__item--header">Назва</div>
            <div className="table__item table__item--header">Посилання</div>
            <div className="table__item table__item--header">Бренд</div>
            <div className="table__item table__item--header">Виплати</div>
            <div className="table__item table__item--header">Баланс</div>
            <div className="table__item table__item--header">Статус</div>
          </div>

          <div className="table__rows">
            {tableData.map(({ id, status }) => (
              <div
                key={id}
                className="
                  table__row
                  brand-offers__table-grid
                "
              >
                <div className="table__item">{id}</div>
                <div className="table__item">Mithlesha Kumara Singha</div>
                <div className="table__item media-channels__row-item--large">wordwall.net</div>
                <div className="table__item">Natole, Lalitpur</div>
                <div className="table__item">$122</div>
                <div className="table__item">$1489</div>
                <div className="table__item">{status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
