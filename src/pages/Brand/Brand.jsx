import { Button } from '../../components/Button';
import { TopMenuItem } from '../../components/TopMenuItem';
import { buttonIcons, buttonTypes } from '../../variables/button';

import '../../styles/table.scss';
import '../../styles/Manager.scss';
import '../../styles/Brand.scss';
import avatar from '../../img/avatar.png';

const tableData = [
  { id: 112, status: 'VIP' },
  { id: 113, status: '' },
  { id: 114, status: 'VIP' },
  { id: 115, status: 'VIP' },
  { id: 116, status: '' },
  { id: 117, status: '' },
];


export const Brand = () => {
  return (
    <section className="manager">
      <div className="manager__profile">
        <div className="brand__profile-wrapper">
          <img src={avatar} alt='Avatar' />
          <Button title='Вихід' type={buttonTypes.large} />
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

          <div className="manager__offers brand__offers">
            <div className="manager__offers-buttons">
              <div>
                <Button type={buttonTypes.extraLarge} title='Активні офери ' />
              </div>

              <div className="manager__offers-buttons-wrapper brand__search">
                <Button type={buttonTypes.search} title='Пошук' icon={buttonIcons.search} />
              </div>
            </div>

            <div className="manager__offers-table">
              <div className="table">
                <div className="table__header brand__table-grid">
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
                    <div key={id} className="table__row brand__table-grid">
                      <div className="table__item">{id}</div>
                      <div className="table__item">Mithlesha Kumara Singha</div>
                      <div className="table__item">wordwall.net</div>
                      <div className="table__item">Kritipur, Kathmandu</div>
                      <div className="table__item">$122</div>
                      <div className="table__item">$1489</div>
                      <div className="table__item">{status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
