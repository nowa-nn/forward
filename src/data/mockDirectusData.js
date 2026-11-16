/**
 * Mock data structure aligned with Directus collections.
 * When Directus is connected, these structures will be fetched directly
 * via Directus SDK (@directus/sdk) with zero refactoring needed.
 */

export const siteSettings = {
  brand_name: "Форвард",
  network_title: "Сеть автошкол в Нижнем Новгороде",
  legal_name: "АНО «КУЦ «Форвард-НН»",
  phone_primary: "+7 (831) 230-90-00",
  phone_primary_raw: "+78312309000",
  phone_secondary: "+7 (904) 909-19-00",
  phone_secondary_raw: "+79049091900",
  telegram_url: "https://t.me/+79049091900",
  vk_url: "https://vk.com/forward_152nn",
  email: "forward-152@yandex.ru",
  work_hours: "Пн–Сб: 10:00 – 18:00",
  license_info: "Лицензия Министерства образования Нижегородской области № 1083",
};

export const districts = [
  "Все районы",
  "Автозаводский",
  "Ленинский",
  "Нижегородский",
  "Советский",
  "Канавинский",
  "Московский",
  "Сормовский"
];

export const branches = [
  {
    id: 1,
    district: "Ленинский",
    address: "ул. Энтузиастов, 10",
    landmark: "м. Заречная",
    floor: "2 этаж",
    schedule: "Пн-пт: 10:00–18:00, сб: 10:00–15:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 2,
    district: "Ленинский",
    address: "пр. Ленина, 11",
    landmark: "м. Ленинская",
    floor: "этаж 2, офис 203",
    schedule: "Пн-пт: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 3,
    district: "Ленинский",
    address: "пр. Ленина, 93",
    landmark: "м. Пролетарская",
    floor: "1 этаж",
    schedule: "Пн-пт: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 4,
    district: "Автозаводский",
    address: "ул. Краснодонцев, 4",
    landmark: "СК «Торпедо»",
    floor: "1 этаж",
    schedule: "Пн-пт: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 5,
    district: "Автозаводский",
    address: "ул. Львовская, 9",
    landmark: "корпус ВШЭ",
    floor: "2 этаж",
    schedule: "Пн-пт: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 6,
    district: "Автозаводский",
    address: "ул. Бориса Видяева, 12",
    landmark: "ТЦ «Торпедо»",
    floor: "2 этаж",
    schedule: "Пн-пт: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 7,
    district: "Автозаводский",
    address: "ул. Сазанова, 17",
    landmark: "ЖК «Водный мир»",
    floor: "1 этаж",
    schedule: "Пн-пт: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 8,
    district: "Нижегородский",
    address: "ул. Новая, 51",
    landmark: "м. Горьковская",
    floor: "цокольный этаж",
    schedule: "Пн-сб: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 9,
    district: "Советский",
    address: "ул. Белинского, 102",
    landmark: "ост. Полтавская",
    floor: "1 этаж",
    schedule: "Пн-сб: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 10,
    district: "Московский",
    address: "ул. Бурнаковская, 51А",
    landmark: "ТЦ «Бурнаковский», вход 4",
    floor: "2 этаж",
    schedule: "Пн-сб: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 11,
    district: "Сормовский",
    address: "пр. Кораблестроителей, 76",
    landmark: "ТЦ «Корабли»",
    floor: "2 этаж",
    schedule: "Пн-сб: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  },
  {
    id: 12,
    district: "Канавинский",
    address: "Мещерский бульвар, д. 7",
    landmark: "м. Стрелка / 7 небо",
    floor: "корп. 2, оф. 12",
    schedule: "Пн-сб: 10:00–18:00",
    phone: "+7 (831) 230-90-00",
    phone_raw: "+78312309000"
  }
];

export const heroContent = {
  h1: "Обучение на права категории «B» в Нижнем Новгороде",
  description: "Готовим уверенных водителей с 2011 года. 12 оборудованных учебных классов во всех районах города. 56 часов практики на автомобиле, теория очно или онлайн, ГСМ включен в договор без скрытых доплат.",
  price_full: "36 000 ₽",
  price_installment: "от 10 000 ₽",
  features: [
    {
      title: "56 часов практики",
      subtitle: "Честный регламент вождения по экзаменационным маршрутам ГИБДД"
    },
    {
      title: "ГСМ включен",
      subtitle: "Никаких отдельных сборов за бензин и автодром"
    },
    {
      title: "Рассрочка 0% без банков",
      subtitle: "Первый взнос 10 000 ₽, оплата частями напрямую автошколе на 3 месяца"
    },
    {
      title: "12 классов у дома и метро",
      subtitle: "Учебные аудитории и автодромы в каждом районе Нижнего Новгорода"
    }
  ]
};
