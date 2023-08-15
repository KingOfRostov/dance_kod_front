import styles from "./inviting_form.module.scss";

export const InvitingForm = () => {
  return (
    <div className={styles.inviting_form_block}>
      <form className={styles.inviting_form}>
        <label htmlFor="parentName">ФИО родителя *</label>
        <input type="text" id="parentName" name="parentName" required />

        <label htmlFor="childName">ФИО ребенка *</label>
        <input type="text" id="childName" name="childName" required />

        <label htmlFor="childAge">Возраст ребенка *</label>
        <input type="number" id="childAge" name="childAge" required />

        <label htmlFor="address">Выберите адрес *</label>
        <select id="address" name="address" required>
          <option value="address1">
            2-й пос. Оржонизидзе | ул. Днепропетровская 27
          </option>
          <option value="address2">Северный | пер. Ольховский 71</option>
        </select>

        <label htmlFor="phone">Телефон *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="8 888 888 8888"
          pattern="[7-8]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
          required
        />

        <button type="submit">Записаться</button>
      </form>
      <span className={styles.after_form_info}>
        <ul>
          или запишитесь по телефонам:
          <li>‌‌+7 (918) 571 26 89</li>
          <li>‌+7 (919) 873 93 65</li>
        </ul>
      </span>
    </div>

  );
};
