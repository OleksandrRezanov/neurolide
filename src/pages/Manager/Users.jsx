import { useState } from "react";
import classNames from "classnames";

import { Button } from "../../components/Button";
import { TopMenuItem } from "../../components/TopMenuItem";
import { buttonTypes, iconButtonTypes } from "../../variables/button";
import { Modal } from "../../components/Modal";
import { FormItem } from "../../components/FormItem";
import '../../styles/Users.scss';

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

const defaultUser = {
  isOpen: false,
  nicName: '',
  email: '',
  balance: '',
  transactions: '',
};

const defaultPayment = {
  isOpen: false,
  number: '',
  invoiceDate: '',
  paymentDate: '',
  status: '',
  paymentMethod: '',
  subscribe: '',
  sum: '',
};

export const Users = () => {
  const [selectedRowId, setSelectedRowId] = useState(0);
  const [editUserModal, setEditUserModal] = useState(defaultUser);
  const [editPaymentModal, setEditPaymentModal] = useState(defaultPayment);
  const [adjustmentsPaymentModal, setAdjustmentsPaymentModal] = useState(defaultPayment);

  const setEditUserModalValue = (key, value) => {
    setEditUserModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setEditPaymentModalValue = (key, value) => {
    setEditPaymentModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setAdjustmentsPaymentModalValue = (key, value) => {
    setAdjustmentsPaymentModal((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const tableRowClickHandle = (paramId) => {
    if (selectedRowId === paramId) {
      setSelectedRowId(0);
    } else {
      setSelectedRowId(paramId);
    }
  };

  return (
    <section className="users">
      <div className="users__header">
        <TopMenuItem title='Індекс' value='601,78' lineColor='red' />
        <TopMenuItem title='Зачислення' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Бюджет' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="users__table">
        <div className="table">
          <div className="table__header users__table-grid">
            <div className="table__item table__item--header">UID</div>
            <div className="table__item table__item--header">Нікнейм</div>
            <div className="table__item table__item--header">Пошта</div>
            <div className="table__item table__item--header">Баланс</div>
            <div className="table__item table__item--header">Транзакції</div>
            <div className="table__item table__item--header">Статус</div>
          </div>

          <div className="table__rows">
            {tableData.map(({ id, email, status }) => (
              <div key={id}>
                <div className={classNames(
                  "table__row users__table-grid", {
                  "users__table-row-selected": selectedRowId === id,
                }
                )}>
                  <div className="table__item users__table-id">
                    <p>{id}</p>
                    {selectedRowId === id ? (
                      <div onClick={() => tableRowClickHandle(id)}>
                        <Button
                          type={buttonTypes.icon}
                          icon={iconButtonTypes.crossMarkYellow}
                        />
                      </div>
                    ) : (
                      <div onClick={() => tableRowClickHandle(id)}>
                        <Button
                          type={buttonTypes.icon}
                          icon={iconButtonTypes.checkMarkYellow}
                        />
                      </div>
                    )}
                  </div>

                  <div className="table__item">Mithlesha Kumara Singha</div>
                  <div className="table__item">{email}</div>
                  <div className="table__item">$122</div>
                  <div className="table__item">$1489</div>
                  <div className="table__item users__table-status">
                    <p>{status}</p>
                    <div className="users__table-buttons">
                      <div onClick={() => setEditUserModal({ ...editUserModal, isOpen: true })}>
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

                {selectedRowId === id && (
                  <div className="users__table-aditional">
                    <div className="users__table-aditional-header">
                      <TopMenuItem
                        title={status === 'Бренд' ? 'Ліди' : 'Кліки'}
                        value='601,78'
                        lineColor='red'
                        icon={iconButtonTypes.edit}
                      />

                      <TopMenuItem
                        title={status === 'Бренд' ? 'Списання' : 'Холд'}
                        value='3002,49'
                        lineColor='yellow'
                        icon={iconButtonTypes.edit}
                      />

                      <TopMenuItem
                        title={status === 'Бренд' ? 'Approve' : 'Нарахування'}
                        value='216'
                        lineColor='green'
                        icon={iconButtonTypes.edit}
                      />

                      <TopMenuItem
                        title='Сповіщення'
                        value='212'
                        lineColor='purple'
                        icon={iconButtonTypes.edit}
                      />

                      <TopMenuItem
                        title='Баланс'
                        value='216'
                        lineColor='blue'
                        icon={iconButtonTypes.settings}
                      />
                    </div>

                    <div className="users__table-aditional-info">
                      <p>EKG464SJFN17</p>
                      <p>10 грудня 2024 р.</p>
                      <p>10 грудня 2024 р</p>

                      <p className="users__table-aditional-info-destination">
                        Прямує до
                      </p>

                      <p>0077 **** **** 3814 (Visa)</p>
                      <p>Бонус (річний)</p>
                      <p>$129.88</p>
                      <div className="users__table-aditional-info-buttons">
                        <div onClick={() => setEditPaymentModal({ ...editPaymentModal, isOpen: true })}>
                          <Button
                            type={buttonTypes.icon}
                            icon={iconButtonTypes.edit}
                            isSmal={true}
                          />
                        </div>

                        <div onClick={() => setAdjustmentsPaymentModal({ ...adjustmentsPaymentModal, isOpen: true })}>
                          <Button
                            type={buttonTypes.icon}
                            icon={iconButtonTypes.settings}
                            isSmal={true}
                          />
                        </div>

                        <div>
                          <Button
                            type={buttonTypes.icon}
                            icon={iconButtonTypes.checkMarkGreenBold}
                            isSmal={true}
                          />
                        </div>

                        <div>
                          <Button
                            type={buttonTypes.icon}
                            icon={iconButtonTypes.deleteBasket}
                            isSmal={true}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="users__table-aditional-cards">
                      <p className="users__table-aditional-card">
                        Картки
                      </p>

                      <p className="users__table-aditional-card">
                        5024  3468  1424  2100
                      </p>

                      <p className="users__table-aditional-card">
                        6090  1234  5678  4509
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {editUserModal.isOpen && (
        <Modal title='Редагувати данні користувача'>
          <FormItem
            title='Нікнейм'
            value={editUserModal.nicName}
            setValue={(value) => setEditUserModalValue('nicName', value)}
          />

          <FormItem
            title='Пошта'
            value={editUserModal.email}
            setValue={(value) => setEditUserModalValue('email', value)}
          />

          <FormItem
            title='Баланс'
            value={editUserModal.balance}
            setValue={(value) => setEditUserModalValue('balance', value)}
          />

          <FormItem
            title='Транзакції'
            value={editUserModal.transactions}
            setValue={(value) => setEditUserModalValue('transactions', value)}
          />

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setEditUserModal({ ...editUserModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='Зберегти' />
          </div>
        </Modal>
      )}

      {editPaymentModal.isOpen && (
        <Modal title='Заміна данних платежу'>
          <FormItem
            title='Номер'
            value={editPaymentModal.number}
            setValue={(value) => setEditPaymentModalValue('number', value)}
          />

          <div className="users__modal-item-group">
            <FormItem
              title='Дата рахунку'
              value={editPaymentModal.invoiceDate}
              setValue={(value) => setEditPaymentModalValue('invoiceDate', value)}
            />

            <FormItem
              title='Дата оплати'
              value={editPaymentModal.paymentDate}
              setValue={(value) => setEditPaymentModalValue('paymentDate', value)}
            />
          </div>

          <FormItem
            title='Статус'
            value={editPaymentModal.status}
            setValue={(value) => setEditPaymentModalValue('status', value)}
          />

          <FormItem
            title='Спосіб оплати'
            value={editPaymentModal.paymentMethod}
            setValue={(value) => setEditPaymentModalValue('paymentMethod', value)}
          />

          <FormItem
            title='Підписка'
            value={editPaymentModal.subscribe}
            setValue={(value) => setEditPaymentModalValue('subscribe', value)}
          />

          <FormItem
            title='Сума'
            value={editPaymentModal.sum}
            setValue={(value) => setEditPaymentModalValue('sum', value)}
          />

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setEditPaymentModal({ ...editPaymentModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='Зберегти' />
          </div>
        </Modal>
      )}

      {adjustmentsPaymentModal.isOpen && (
        <Modal title='Внесення коректив платежу'>
          <FormItem
            title='Номер'
            value={adjustmentsPaymentModal.number}
            setValue={(value) => setAdjustmentsPaymentModalValue('number', value)}
          />

          <div className="users__modal-item-group">
            <FormItem
              title='Дата рахунку'
              value={adjustmentsPaymentModal.invoiceDate}
              setValue={(value) => setAdjustmentsPaymentModalValue('invoiceDate', value)}
            />

            <FormItem
              title='Дата оплати'
              value={adjustmentsPaymentModal.paymentDate}
              setValue={(value) => setAdjustmentsPaymentModalValue('paymentDate', value)}
            />
          </div>

          <FormItem
            title='Статус'
            value={adjustmentsPaymentModal.status}
            setValue={(value) => setAdjustmentsPaymentModalValue('status', value)}
          />

          <FormItem
            title='Спосіб оплати'
            value={adjustmentsPaymentModal.paymentMethod}
            setValue={(value) => setAdjustmentsPaymentModalValue('paymentMethod', value)}
          />

          <FormItem
            title='Підписка'
            value={adjustmentsPaymentModal.subscribe}
            setValue={(value) => setAdjustmentsPaymentModalValue('subscribe', value)}
          />

          <FormItem
            title='Сума'
            value={adjustmentsPaymentModal.sum}
            setValue={(value) => setAdjustmentsPaymentModalValue('sum', value)}
          />

          <div className="manager__modal-edit-wrapper">
            <div onClick={() => setAdjustmentsPaymentModal({ ...adjustmentsPaymentModal, isOpen: false })}>
              <Button type={buttonTypes.cancel} title='Відмінити' />
            </div>

            <Button type={buttonTypes.gradient} title='Зберегти' />
          </div>
        </Modal>
      )}
    </section>
  );
};
