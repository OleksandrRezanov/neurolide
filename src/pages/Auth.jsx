import { useState } from "react";
import { Button } from "../components/Button";
import '../styles/Auth.scss';
import { buttonTypes } from "../variables/button";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const defaultLogin = {
  rememberData: false,
  email: '',
  password: '',
};

const defaultSignIn = {
  rememberData: false,
  name: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

export const Auth = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [loginData, setLoginData] = useState(defaultLogin);
  const [signInData, setSignInData] = useState(defaultSignIn);

  const navigate = useNavigate();

  const setDataValue = (key, value) => {
    if (hasAccount) {
      setLoginData((prev) => ({
        ...prev,
        [key]: value,
      }));
    } else {
      setSignInData((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  return (
    <section className="auth">
      <article className="auth__body">
        <h1 className="auth__body-title">
          {hasAccount ? 'Вхід до акаунту' : 'Реєстрація'}
        </h1>

        <div className="auth__body-buttons">
          <Button title='Аффіліат' type={buttonTypes.medium} hasBG={true} />
          <Button title='Бренд' type={buttonTypes.medium} hasBG={true} isSelected={true} />
        </div>

        <form className="auth__body-form">
          {!hasAccount && (
            <div className='form-item'>
              <label className='form-item__title auth__input-title'>
                Ім’я
              </label>

              <input
                className='form-item__input auth__input'
                type="text"
                placeholder="Введіть Ваше ім'я"
                value={signInData.name}
                onChange={e => setDataValue('name', e.target.value)}
                required
              />
            </div>
          )}

          <div className='form-item'>
            <label className='form-item__title auth__input-title'>
              E-mail
            </label>

            <input
              className='form-item__input auth__input'
              type="text"
              placeholder="Введіть Ваш email"
              value={hasAccount ? loginData.email : signInData.email}
              onChange={e => setDataValue('email', e.target.value)}
              required
            />
          </div>

          <div className='form-item auth__input-password'>
            <label className='form-item__title auth__input-title'>
              Пароль
            </label>

            <input
              className='form-item__input auth__input'
              type="password"
              placeholder="Введіть Ваш пароль"
              value={hasAccount ? loginData.password : signInData.password}
              onChange={e => setDataValue('password', e.target.value)}
              required
            />

            <div className="auth__input-eye" />

            {
              hasAccount &&
              <p className="auth__input-forgot-password">
                Забули пароль?
              </p>
            }
          </div>

          {!hasAccount && (
            <div className='form-item auth__input-password'>
              <label className='form-item__title auth__input-title'>
                Повторіть пароль
              </label>

              <input
                className='form-item__input auth__input'
                type="password"
                placeholder="Повторіть Ваш пароль"
                value={signInData.confirmedPassword}
                onChange={e => setDataValue('confirmedPassword', e.target.value)}
                required
              />

              <div className="auth__input-eye" />
            </div>
          )}

          <p
            onClick={() => setDataValue(
              'rememberData',
              hasAccount ? !loginData.rememberData : !signInData.rememberData
            )}
            className={classNames(
              "auth__input-title auth__remember-data", {
              "auth__remember-data--active": hasAccount ? loginData.rememberData : signInData.rememberData,
            }
            )}>
            Запам’ятати дані
          </p>

          {hasAccount ? (
            <p
              className="auth__input-title auth__nav-button"
              onClick={() => setHasAccount(false)}
            >
              Зареєструватися
            </p>
          ) : (
            <p
              className="auth__input-title auth__nav-button"
              onClick={() => setHasAccount(true)}
            >
              У мене вже є акаунт
            </p>
          )}

          {hasAccount ? (
            <div className="auth__button-submit" onClick={() => navigate("/offers")}>
              <Button title='Вхід до акаунту' type={buttonTypes.mediumLarge} hasBG={true} />
            </div>
          ) : (
            <div className="auth__button-submit" onClick={() => navigate("/offers")}>
              <Button title='Зареєструватися' type={buttonTypes.mediumLarge} hasBG={true} />
            </div>
          )}

        </form>
      </article>

      <div className="auth__bg" />
    </section>
  );
};
