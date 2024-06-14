import { useState } from "react";
import { Button } from "../../components/Button";
import { FormItem } from "../../components/FormItem";
import { TopMenuItem } from "../../components/TopMenuItem";
import { buttonTypes } from "../../variables/button";
import '../../styles/Support.scss';

const defaultContactUs = {
  name: '',
  email: '',
  message: '',
};

export const BrandSupport = () => {
  const [contactUs, setContactUs] = useState(defaultContactUs);

  const setContactUsValue = (key, value) => {
    setContactUs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <section className="support">
      <div className="support__bg" />

      <div className="manager__header">
        <TopMenuItem title='Ліди' value='601,78' lineColor='red' />
        <TopMenuItem title='Списання' value='3002,49' lineColor='yellow' />
        <TopMenuItem title='Approve' value='216' lineColor='green' />
        <TopMenuItem title='Сповіщення' value='212' lineColor='purple' />
      </div>

      <div className="support__body">
        <div className="support__item support__item--1">
          <p className="support__item-question">
            Чи можу я додавати або редагувати більше ніж одного користувача одночасно?
          </p>

          <p className="support__item-answer">
            Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки (у сленгу дизайнерів такий текст називається «рибою»).
          </p>
        </div>

        <div className="support__item support__item--2">
          <p className="support__item-question">
            Як редагувати дані існуючого користувача?
          </p>

          <p className="support__item-answer">
            Існує багато інших варіантів Lorem ipsum, часто дуже віддалені від оригіналу.
          </p>
        </div>

        <div className="support__item support__item--3">
          <p className="support__item-question">
            Які «додаткові дані» можна вибрати?
          </p>

          <p className="support__item-answer">
            Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною.
          </p>
        </div>

        <div className="support__item support__item--4">
          <p className="support__item-question">
            Як створити та визначати дозволи для ролі?
          </p>

          <p className="support__item-answer">
            Часом вони містять додаткові літери, такі як k, w і z — які не існували або були рідко вживані в латині, і беззмістовні слова на кшталт zzril, takimata і gubergren, додані до первинного тексту.
          </p>
        </div>

        <div className="support__item support__item--5">
          <p className="support__item-question">
            Які адміністративні функції тепер доступні для RapidLite?
          </p>

          <p className="support__item-answer">
            З точки зору зручності сприйняття друкованих текстів Lorem ipsum показує, що латинська графіка найслушніше пристосовується для написання саме творів латинською мовою (тут враховується частота вживання символів з виносними елементами, таких як g, l, h, p).
          </p>
        </div>

        <div className="support__item support__item--6">
          <p className="support__item-question">
            Як користуватися вкладкою PSAP?
          </p>

          <p className="support__item-answer">
            В Microsoft Word 2007 і PowerPoint 2007 (і в більш пізніх версіях) є функція lorem (=lorem(параметр1,параметр2), де параметр1 — число абзаців, параметр2 — число речень в абзаці). Необхідно набрати, наприклад =lorem(2,7) (і натиснути Enter), після чого в документі з'явиться текст.
          </p>
        </div>
      </div>

      <form className="support__contact-us">
        <p className="support__contact-us-title">Зворотній зв’язок</p>

        <div className="support__contact-us-group">
          <FormItem
            title="Вкажіть ім’я"
            placeholder=""
            value={contactUs.name}
            setValue={(value) => setContactUsValue('name', value)}
          />

          <FormItem
            title="E-mail для зв’язку"
            placeholder=""
            value={contactUs.email}
            setValue={(value) => setContactUsValue('email', value)}
          />
        </div>

        <FormItem
          title="Повідомлення"
          placeholder=""
          type="text area"
          value={contactUs.message}
          setValue={(value) => setContactUsValue('message', value)}
        />

        <div className="support__file-input-container">
          <label className="support__file-input-label">Додати файл</label>
          <input type="file" className="support__file-input" />
        </div>

        <div className="balance__button-wrapper">
          <Button type={buttonTypes.medium} title='Відправити' hasBG={true} />
        </div>
      </form>
    </section>
  );
};
