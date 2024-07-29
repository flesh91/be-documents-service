import { CreatePdfRequest, Logo } from '@diia-inhouse/super-gen-client'

export default class MedicalDeclarationPdfDataMapper {
    toSharingPdf(): CreatePdfRequest {
        const data: CreatePdfRequest = {
            body: [
                {
                    pdfHeaderMlc: {
                        logos: [Logo.trident, Logo.diia],
                        title: 'Декларація',
                        subtitles: ['про вибір лікаря, який надає первинну медичну допомогу'],
                        additionalTexts: [],
                    },
                },
                {
                    pdfGeneralSectionMlc: {
                        titles: ['Дія', 'Надія', 'Володимирівна'],
                        mainHeading: '0001-33ДІ-M000',
                        subHeadings: [],
                        additionalTexts: [],
                    },
                },
                {
                    pdfSectionOrg: {
                        items: [
                            {
                                pdfSubsectionTitleMlc: {
                                    subsectionTitle: 'Інформація про пацієнта',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'ПІБ:',
                                    value: 'Дія Надія Володимирівна',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Дата народження:',
                                    value: '01.01.1991',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Місце народження:',
                                    value: 'Київ, Україна',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Фактичне місце проживання/перебування:',
                                    value: 'Україна, Львівська область, Калинівський район, м. Жовква, вул. Дієвих, 1',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Стать:',
                                    value: 'Ж',
                                },
                            },
                        ],
                    },
                },
                {
                    pdfSectionOrg: {
                        items: [
                            {
                                pdfSubsectionTitleMlc: {
                                    subsectionTitle: 'Контактні дані пацієнта',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Телефон:',
                                    value: '+38 (044) 000 00 00',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Електронна пошта:',
                                    value: 'emailadress@mailservice.com',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Бажаний спосіб звʼязку:',
                                    value: 'телефон',
                                },
                            },
                        ],
                    },
                },
                {
                    pdfSectionOrg: {
                        items: [
                            {
                                pdfSubsectionTitleMlc: {
                                    subsectionTitle: 'Документ, що посвідчує особу',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Тип документа:',
                                    value: 'Паспорт громадянина України',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Серія та номер:',
                                    value: 'ДІ333333',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Дата видачі:',
                                    value: '19.10.2021',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Ким видано:',
                                    value: 'Голосіївським РУ ГУМВС України в м. Камʼянець-Подільський',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'РНОКПП:',
                                    value: '1234567890',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'УНЗР:',
                                    value: '333333333-00001',
                                },
                            },
                        ],
                    },
                },
                {
                    pdfSectionOrg: {
                        items: [
                            {
                                pdfSubsectionTitleMlc: {
                                    subsectionTitle: 'Довірена особа пацієнта',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'ПІБ:',
                                    value: 'Дія Ярослав Володимирович',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Телефон:',
                                    value: '+38 (000) 000 00 00',
                                },
                            },
                        ],
                    },
                },
                {
                    pdfSectionOrg: {
                        items: [
                            {
                                pdfSubsectionTitleMlc: {
                                    subsectionTitle: 'Інформація про лікаря який надає ПМД',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'ПІБ:',
                                    value: 'Дія Тарас Тарасович',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Посада:',
                                    value: 'Лікар загальної практики - сімейний лікар',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Телефон:',
                                    value: '+38 (044) 000 00 00',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Електронна пошта:',
                                    value: 'emailadress@mailservice.com',
                                },
                            },
                        ],
                    },
                },
                {
                    pdfSectionOrg: {
                        items: [
                            {
                                pdfSubsectionTitleMlc: {
                                    subsectionTitle: 'Інформація про надавача ПМД',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Повне найменування / ПІБ:',
                                    value: 'Дія Марія Макарівна',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Код ЄДРПОУ:',
                                    value: '3333333333',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Телефон:',
                                    value: '+38 (044) 000 00 00',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Електронна пошта:',
                                    value: 'clinicmail@mailservice.com',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Адреса місця надання медичних послуг лікарем, який надає ПМД:',
                                    value: 'місто Київ, вулиця Дієвих, 333',
                                },
                            },
                        ],
                    },
                },
                {
                    pdfSectionOrg: {
                        items: [
                            {
                                pdfSubsectionTitleMlc: {
                                    subsectionTitle: 'Законний представник пацієнта',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'ПІБ:',
                                    value: 'Дія Ярослав Володимирович',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Документ, що підтверджує особу законного представника:',
                                    value: '000000',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Документ, що підтверджує права законного представника:',
                                    value: '000000',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Телефон:',
                                    value: '+38 (044) 000 00 00',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Електронна пошта:',
                                    value: 'emailadress@mailservice.com',
                                },
                            },
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Бажаний спосіб звʼязку:',
                                    value: 'телефон',
                                },
                            },
                        ],
                    },
                },
                {
                    pdfSectionOrg: {
                        items: [
                            {
                                pdfRowItemsHorizontalMlc: {
                                    label: 'Дата подання декларації:',
                                    value: '01.01.2021',
                                },
                            },
                        ],
                    },
                },
            ],
        }

        return data
    }
}
