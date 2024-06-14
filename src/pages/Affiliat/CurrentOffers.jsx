import { Button } from "../../components/Button";
import { TopMenuItem } from "../../components/TopMenuItem";
import { buttonIcons, buttonTypes, iconButtonTypes } from "../../variables/button";
import '../../styles/Users.scss';
import '../../styles/AddedOffers.scss';
import '../../styles/CurrentOffers.scss';

const tableData = [
  {
    id: 112,
    brand: 'Kritipur, Kathmandu',
    status: 'VIP',
  },
  {
    id: 113,
    brand: 'Natole, Lalitpur',
    status: '',
  },
  {
    id: 114,
    brand: 'Natole, Lalitpur',
    status: 'VIP',
  },
  {
    id: 115,
    brand: 'Natole, Lalitpur',
    status: 'VIP',
  },
  {
    id: 116,
    brand: 'Natole, Lalitpur',
    status: '',
  },
  {
    id: 117,
    brand: 'Natole, Lalitpur',
    status: '',
  },
  {
    id: 118,
    brand: 'Natole, Lalitpur',
    status: 'VIP',
  },
  {
    id: 119,
    brand: 'Natole, Lalitpur',
    status: '',
  },
  {
    id: 120,
    brand: 'Natole, Lalitpur',
    status: 'VIP',
  },
  {
    id: 121,
    brand: 'Natole, Lalitpur',
    status: '',
  },
  {
    id: 122,
    brand: 'Natole, Lalitpur',
    status: '',
  },
];

export const CurrentOffers = () => {
  return (
    <section className="users">
      <div className="users__header">
        <TopMenuItem title='Кліки' value='601,78' lineColor='red' />
        <TopMenuItem title='Холд' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Нарахування' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="manager__offers-buttons added-offers__buttons">
        <div>
          <Button type={buttonTypes.extraLarge} title='Офери у роботі' />
        </div>

        <div className="manager__offers-buttons-wrapper brand__search">
          <Button type={buttonTypes.search} title='Пошук' icon={buttonIcons.search} />
        </div>
      </div>

      <div className="users__table">
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
            {tableData.map(({ id, brand, status }) => (
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
                <div className="table__item">{brand}</div>
                <div className="table__item">$122</div>
                <div className="table__item">$1489</div>
                <div className="table__item manager__table--button">RevShare</div>
                <div className="table__item current-offers__table-item">
                  <p>{status}</p>
                  <Button type={buttonTypes.icon} icon={iconButtonTypes.deleteBasket} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
