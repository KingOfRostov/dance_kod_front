import styles from './inviting_form.module.scss'
import InputMask from 'react-input-mask'
import React, { useState } from 'react'
import axios from 'axios' // Для HTTP запросов

export const InvitingForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    address: '',
    phone: ''
  })

  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setFormData({
        parentName: e.currentTarget.parentName.value,
        childName: e.currentTarget.childName.value,
        childAge: e.currentTarget.childAge.value,
        address: e.currentTarget.address.value,
        phone: e.currentTarget.phone.value
      })

      const response = await axios.post(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_API_KEY}/sendMessage`,
        {
          chat_id: Number(process.env.NEXT_PUBLIC_CHAT_ID),
          text:
            'НОВАЯ ЗАЯВКА:\n\n' +
            `ФИО родителя: ${formData.parentName}\n\n` +
            `ФИО ребенка: ${formData.childName}\n\n` +
            `Возраст ребенка: ${formData.childAge}\n\n` +
            `Адрес: ${formData.address}\n\n` +
            `Телефон: ${formData.phone}`
        }
      )

      if (response.status === 200) {
        setSuccessMessage('Ваши данные успешно отправлены. Спасибо за доверие!')
        setTimeout(
          function () {
            setSuccessMessage('')
          }.bind(this),
          5000
        )
      }
    } catch (error) {
      setErrorMessage(
        'Произошла ошибка при попытке отправить данные. Пожалуйста, повторите попытку или свяжитесь с нами по телефонам, указанным внизу страницы. Спасибо!'
      )
      setTimeout(
        function () {
          setErrorMessage('')
        }.bind(this),
        5000
      )

      console.error('Error sending Telegram message:', error)
    }
  }

  return (
    <div>
      {errorMessage && <div className={styles.error_popup}>{errorMessage}</div>}
      {successMessage && (
        <div className={styles.success_popup}>{successMessage}</div>
      )}
      <div className={styles.inviting_form_block}>
        <h1 className="page-header-text">
          <span className="red">Запишись</span>
        </h1>
        <form
          className={styles.inviting_form}
          onSubmit={handleFormSubmit}
          onChange={(e) => {
            setFormData({
              parentName: e.currentTarget.parentName.value,
              childName: e.currentTarget.childName.value,
              childAge: e.currentTarget.childAge.value,
              address: e.currentTarget.address.value,
              phone: e.currentTarget.phone.value
            })
          }}
        >
          <label htmlFor="parentName">ФИО родителя *</label>
          <input type="text" id="parentName" name="parentName" required />

          <label htmlFor="childName">ФИО ребенка *</label>
          <input type="text" id="childName" name="childName" required />

          <label htmlFor="childAge">Возраст ребенка *</label>
          <input type="number" id="childAge" name="childAge" min="1" required />

          <label htmlFor="address">Выберите адрес *</label>
          <select id="address" name="address" required>
            <option value="2-й пос. Орджонизидзе | ул. Днепропетровская 27">
              2-й пос. Орджонизидзе | ул. Днепропетровская 27
            </option>
            <option value="Северный | пер. Ольховский 71">
              Северный | пер. Ольховский 71
            </option>
          </select>

          <label htmlFor="phone">Телефон *</label>
          <InputMask
            mask="8 (999) 999 - 99 - 99"
            id="phone"
            type="tel"
            name="phone"
            placeholder="8 (999) 999 - 99 - 99"
            pattern="8 \([0-9]{3}\) [0-9]{3} - [0-9]{2} - [0-9]{2}"
            required
          />

          <button type="submit">Записаться</button>
        </form>
      </div>
    </div>
  )
}
