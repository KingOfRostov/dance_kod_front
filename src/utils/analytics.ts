// Утилиты для отправки событий в аналитику

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void
    ym?: (
      counterId: number,
      method: string,
      target: string,
      params?: Record<string, unknown>
    ) => void
  }
}

// Отслеживание события в Google Analytics
export const trackGAEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Отслеживание события в Яндекс.Метрике
export const trackYandexEvent = (
  target: string,
  params?: Record<string, unknown>
) => {
  const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID
  if (typeof window !== 'undefined' && window.ym && yandexId) {
    window.ym(Number(yandexId), 'reachGoal', target, params)
  }
}

// Отслеживание события в обеих системах
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  trackGAEvent(action, category, label, value)
  trackYandexEvent(`${category}_${action}`, { label, value })
}

