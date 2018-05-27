import LocalizedStrings from 'react-localization'

export const strings = new LocalizedStrings({
    en:{
        home: {
            intro: `This website is an assignment for my studies in applied information
                technology in HoGent.`,
            what_to_find: `In this website you are able to find personal information, contact and a
                portfolio.`,
        },
        switch: `Switch to Dutch`,
        me: {
            date_of_birth: 'Date of Birth',
            education: {
                label: 'Education',
                value: 'Applied Informatics',
            },
            hobbys: {
                badminton: 'I play badminton at bc danlie since 2011.',
                tv: 'I like to watch movies/tv-shows at home'
            },
            future: {
                label: 'The Future',
                value: `I will graduate in 2018 in applied informatics at HoGent .
                Thereafter, I will look for a job, preferably as a back-end developer (node.js, .net).`
            }
        },
        contact: {
            phone_number: 'Phone-number'
        },
        portfolio: {
            name: 'Name',
            language: 'Language',
            description: 'Description',
            link: 'Link',
            projects: {
                calendar_app: 'A Project for School: Imitates basic calendar functions',
                first_aid: 'A project for school: Gives first aid hints',
                tracking_app: 'A program that keeps track of movies, books, games you have in your collection, have completed...',
                trackr: 'A webapp that keeps track of movies, books, games you have in your collection, have completed...',
                internship: {
                    label: 'Internship',
                    description: 'An internship project for school: Caching of external API requests',
                    no_link: 'No link available'
                },
                bachelorproef: 'Possibilities for decreasing external API dependency'
            }
        }
    },
    nl: {
        home: {
            intro: `Deze website is een opdracht voor mijn studies in toegepaste informatie in HoGent.`,
            what_to_find: `In deze website kan je mijn persoonlijk info, contact en portfolio vinden.`,
        },
        switch: `Verander naar het Engels`,
        me: {
            date_of_birth: 'Geboortedatum',
            education: {
                label: 'Studies',
                value: 'Toegepaste Informatica',
            },
            hobbys: {
                badminton: 'Ik speel badminton bij bc danlie sinds 2011.',
                tv: 'Ik kijk thuis graag filmen/tv.'
            },
            future: {
                label: 'De toekomst',
                value: `In 2018 zal ik afstuderen op HoGent in de richting Toegepaste Informatica.
                    Nadien zal ik als eerste instantie op zoek gaan naar een job in de back-end (node.js, .net).`
            }
        },
        contact: {
            phone_number: 'GSM-nummer'
        },
        portfolio: {
            name: 'Naem',
            language: 'Taal',
            description: 'Beschrijving',
            link: 'Link',
            projects: {
                calendar_app: 'Een project voor school: heeft basis kalender functies',
                first_aid: 'Een project voor school: geeft eerste hulp hints',
                tracking_app: 'Een programma dat bijhoud welke films, boeken, games je in in collectie hebt, gezien/gelezen... hebt',
                trackr: 'Een website die bijhoud welke films, boeken, games je in in collectie hebt, gezien/gelezen... hebt',
                internship: {
                    label: 'Stage',
                    description: 'Een stage project voor school: Caching van externe API requests',
                    no_link: 'Geen link'
                },
                bachelorproef: 'Mogelijkheden voor het verlagen van de afhankelijkheid van externe APIs'
            }
        }
    },
})

export const switchLang = () => {
    strings.setLanguage(strings.getLanguage() === 'en' ? 'nl' : 'en')
    return strings.getLanguage() === 'en' ? 'Switch to Dutch' : 'Verander naar het nederlands'
}