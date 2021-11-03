# thrindle
FORMAT: 1A
#Thrindle
This is the official documntation for the Thrindle
Backend Restful API Service.
This Document Contains Information needed to
facilitate a developer on how
best to interact with the API service

https://thrindle.herokuapp.com/thrindle/level5 is the main URL

However The Main URL For The Landing Page is : https://currin.herokuapp.com/currin/level5

# Currin

## Countries [/countries]

### Fetch All Countries [GET]


+ Response 200 (application/json)

    + Headers

            Access-Control-Allow-Methods: GET, POST, PUT, DELETE
            Access-Control-Allow-Headers: Content-Type
            Access-Control-Allow-Credentials: true
            Content-Type: application/json
            Date: Fri, 11 Sep 2020 14:36:56 GMT
            Connection: keep-alive
            Transfer-Encoding: chunked

    + Body

            {
		  "status": "Success",
		  "data": [
		    {
		      "country": "Afghanistan",
		      "currency": "Afghan afghani",
		      "shortForm": "AFN"
		    },
		    {
		      "country": "Akrotiri and Dhekelia (UK)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Aland Islands (Finland)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Albania",
		      "currency": "Albanian lek",
		      "shortForm": "ALL"
		    },
		    {
		      "country": "Algeria",
		      "currency": "Algerian dinar",
		      "shortForm": "DZD"
		    },
		    {
		      "country": "American Samoa (USA)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Andorra",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Angola",
		      "currency": "Angolan kwanza",
		      "shortForm": "AOA"
		    },
		    {
		      "country": "Anguilla (UK)",
		      "currency": "East Caribbean dollar",
		      "shortForm": "XCD"
		    },
		    {
		      "country": "Antigua and Barbuda",
		      "currency": "East Caribbean dollar",
		      "shortForm": "XCD"
		    },
		    {
		      "country": "Argentina",
		      "currency": "\tArgentine peso",
		      "shortForm": "ARS"
		    },
		    {
		      "country": "Armenia",
		      "currency": "Armenian dram",
		      "shortForm": "AMD"
		    },
		    {
		      "country": "Aruba (Netherlands)",
		      "currency": "Aruban florin",
		      "shortForm": "AWG"
		    },
		    {
		      "country": "Ascension Island (UK)",
		      "currency": "Saint Helena pound",
		      "shortForm": "SHP"
		    },
		    {
		      "country": "Australia",
		      "currency": "Australian dollar",
		      "shortForm": "AUD"
		    },
		    {
		      "country": "Austria",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Azerbaijan",
		      "currency": "Azerbaijan manat",
		      "shortForm": "AZN"
		    },
		    {
		      "country": "Bahamas",
		      "currency": "Bahamian dollar",
		      "shortForm": "BSD"
		    },
		    {
		      "country": "Bahrain",
		      "currency": "Bahraini dinar",
		      "shortForm": "BHD"
		    },
		    {
		      "country": "Barbados",
		      "currency": "Barbadian dollar",
		      "shortForm": "BBD"
		    },
		    {
		      "country": "Belarus",
		      "currency": "Belarusian ruble",
		      "shortForm": "BYN"
		    },
		    {
		      "country": "Belgium",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Belize",
		      "currency": "Belize dollar",
		      "shortForm": "BZD"
		    },
		    {
		      "country": "Benin",
		      "currency": "West African CFA franc",
		      "shortForm": "XOF"
		    },
		    {
		      "country": "Bermuda (UK)",
		      "currency": "Bermudian dollar",
		      "shortForm": "BMD"
		    },
		    {
		      "country": "Bhutan",
		      "currency": "Bhutanese ngultrum",
		      "shortForm": "BTN"
		    },
		    {
		      "country": "Bolivia",
		      "currency": "Bolivian boliviano",
		      "shortForm": "BOB"
		    },
		    {
		      "country": "Bonaire (Netherlands)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Bosnia and Herzegovina",
		      "currency": "Bosnia and Herzegovina convertible mark",
		      "shortForm": "BAM"
		    },
		    {
		      "country": "Botswana",
		      "currency": "Botswana pula",
		      "shortForm": "BWP"
		    },
		    {
		      "country": "Brazil",
		      "currency": "Brazilian real",
		      "shortForm": "BRL"
		    },
		    {
		      "country": "British Indian Ocean Territory (UK)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "British Virgin Islands (UK)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Brunei",
		      "currency": "Brunei dollar",
		      "shortForm": "BND"
		    },
		    {
		      "country": "Bulgaria",
		      "currency": "Bulgarian lev",
		      "shortForm": "BGN"
		    },
		    {
		      "country": "Burkina Faso",
		      "currency": "West African CFA franc",
		      "shortForm": "XOF"
		    },
		    {
		      "country": "Burundi",
		      "currency": "Burundi franc",
		      "shortForm": "BIF"
		    },
		    {
		      "country": "Cabo Verde",
		      "currency": "Cabo Verdean escudo",
		      "shortForm": "CVE"
		    },
		    {
		      "country": "Cambodia",
		      "currency": "Cambodian riel",
		      "shortForm": "KHR"
		    },
		    {
		      "country": "Cameroon",
		      "currency": "Central African CFA franc",
		      "shortForm": "XAF"
		    },
		    {
		      "country": "Canada",
		      "currency": "Canadian dollar",
		      "shortForm": "CAD"
		    },
		    {
		      "country": "Caribbean Netherlands (Netherlands)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Cayman Islands (UK)",
		      "currency": "Cayman Islands dollar",
		      "shortForm": "KYD"
		    },
		    {
		      "country": "Central African Republic",
		      "currency": "Central African CFA franc",
		      "shortForm": "XAF"
		    },
		    {
		      "country": "Chad",
		      "currency": "Central African CFA franc",
		      "shortForm": "XAF"
		    },
		    {
		      "country": "Chatham Islands (New Zealand)",
		      "currency": "New Zealand dollar",
		      "shortForm": "NZD"
		    },
		    {
		      "country": "Chile",
		      "currency": "Chilean peso",
		      "shortForm": "CLP"
		    },
		    {
		      "country": "China",
		      "currency": "\tChinese Yuan Renminbi",
		      "shortForm": "CNY"
		    },
		    {
		      "country": "Christmas Island (Australia)",
		      "currency": "Australian dollar",
		      "shortForm": "AUD"
		    },
		    {
		      "country": "Cocos (Keeling) Islands (Australia)",
		      "currency": "Australian dollar",
		      "shortForm": "AUD"
		    },
		    {
		      "country": "Colombia",
		      "currency": "Colombian peso",
		      "shortForm": "COP"
		    },
		    {
		      "country": "Comoros",
		      "currency": "Comorian franc",
		      "shortForm": "KMF"
		    },
		    {
		      "country": "Congo, Democratic Republic of the",
		      "currency": "Congolese franc",
		      "shortForm": "CDF"
		    },
		    {
		      "country": "Congo, Republic of the",
		      "currency": "Central African CFA franc",
		      "shortForm": "XAF"
		    },
		    {
		      "country": "Cook Islands (New Zealand)",
		      "currency": "Cook Islands dollar",
		      "shortForm": "Cook Islands dollar"
		    },
		    {
		      "country": "Costa Rica",
		      "currency": "Costa Rican colon",
		      "shortForm": "CRC"
		    },
		    {
		      "country": "Cote d'Ivoire",
		      "currency": "West African CFA franc",
		      "shortForm": "XOF"
		    },
		    {
		      "country": "Croatia",
		      "currency": "Croatian kuna",
		      "shortForm": "HRK"
		    },
		    {
		      "country": "Cuba",
		      "currency": "Cuban peso",
		      "shortForm": "CUP"
		    },
		    {
		      "country": "Curacao (Netherlands)",
		      "currency": "Netherlands Antillean guilder",
		      "shortForm": "ANG"
		    },
		    {
		      "country": "Cyprus",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Czechia",
		      "currency": "Czech koruna",
		      "shortForm": "CZK"
		    },
		    {
		      "country": "Denmark",
		      "currency": "Danish krone",
		      "shortForm": "DKK"
		    },
		    {
		      "country": "Djibouti",
		      "currency": "Djiboutian franc",
		      "shortForm": "DJF"
		    },
		    {
		      "country": "Dominica",
		      "currency": "East Caribbean dollar",
		      "shortForm": "XCD"
		    },
		    {
		      "country": "Dominican Republic",
		      "currency": "Dominican peso",
		      "shortForm": "DOP"
		    },
		    {
		      "country": "Ecuador",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Egypt",
		      "currency": "Egyptian pound",
		      "shortForm": "EGP"
		    },
		    {
		      "country": "El Salvador",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Equatorial Guinea",
		      "currency": "Central African CFA franc",
		      "shortForm": "XAF"
		    },
		    {
		      "country": "Eritrea",
		      "currency": "Eritrean nakfa",
		      "shortForm": "ERN"
		    },
		    {
		      "country": "Estonia",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Eswatini (formerly Swaziland)",
		      "currency": "Swazi lilangeni",
		      "shortForm": "SZL"
		    },
		    {
		      "country": "Ethiopia",
		      "currency": "Ethiopian birr",
		      "shortForm": "ETB"
		    },
		    {
		      "country": "Falkland Islands (UK)",
		      "currency": "Falkland Islands pound",
		      "shortForm": "FKP"
		    },
		    {
		      "country": "Faroe Islands (Denmark)",
		      "currency": "Faroese krona",
		      "shortForm": "Faroese krona"
		    },
		    {
		      "country": "Fiji",
		      "currency": "Fijian dollar",
		      "shortForm": "FJD"
		    },
		    {
		      "country": "Finland",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "France",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "French Guiana (France)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "French Polynesia (France)",
		      "currency": "CFP franc",
		      "shortForm": "XPF"
		    },
		    {
		      "country": "Gabon",
		      "currency": "Central African CFA franc",
		      "shortForm": "XAF"
		    },
		    {
		      "country": "Gambia",
		      "currency": "Gambian dalasi",
		      "shortForm": "GMD"
		    },
		    {
		      "country": "Georgia",
		      "currency": "Georgian lari",
		      "shortForm": "GEL"
		    },
		    {
		      "country": "Germany",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Ghana",
		      "currency": "Ghanaian cedi",
		      "shortForm": "GHS"
		    },
		    {
		      "country": "Gibraltar (UK)",
		      "currency": "Gibraltar pound",
		      "shortForm": "GIP"
		    },
		    {
		      "country": "Greece",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Greenland (Denmark)",
		      "currency": "Danish krone",
		      "shortForm": "DKK"
		    },
		    {
		      "country": "Grenada",
		      "currency": "East Caribbean dollar",
		      "shortForm": "XCD"
		    },
		    {
		      "country": "Guadeloupe (France)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Guam (USA)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Guatemala",
		      "currency": "Guatemalan quetzal",
		      "shortForm": "GTQ"
		    },
		    {
		      "country": "Guernsey (UK)",
		      "currency": "Guernsey Pound",
		      "shortForm": "GGP"
		    },
		    {
		      "country": "Guinea",
		      "currency": "Guinean franc",
		      "shortForm": "GNF"
		    },
		    {
		      "country": "Guinea-Bissau",
		      "currency": "West African CFA franc",
		      "shortForm": "XOF"
		    },
		    {
		      "country": "Guyana",
		      "currency": "Guyanese dollar",
		      "shortForm": "GYD"
		    },
		    {
		      "country": "Haiti",
		      "currency": "Haitian gourde",
		      "shortForm": "HTG"
		    },
		    {
		      "country": "Honduras",
		      "currency": "Honduran lempira",
		      "shortForm": "HNL"
		    },
		    {
		      "country": "Hong Kong (China)",
		      "currency": "Hong Kong dollar",
		      "shortForm": "HKD"
		    },
		    {
		      "country": "Hungary",
		      "currency": "Hungarian forint",
		      "shortForm": "HUF"
		    },
		    {
		      "country": "Iceland",
		      "currency": "Icelandic krona",
		      "shortForm": "ISK"
		    },
		    {
		      "country": "India",
		      "currency": "\tIndian rupee",
		      "shortForm": "INR"
		    },
		    {
		      "country": "Indonesia",
		      "currency": "Indonesian rupiah",
		      "shortForm": "IDR"
		    },
		    {
		      "country": "International Monetary Fund (IMF)",
		      "currency": "\tSDR (Special Drawing Right)",
		      "shortForm": "XDR"
		    },
		    {
		      "country": "Iran",
		      "currency": "Iranian rial",
		      "shortForm": "IRR"
		    },
		    {
		      "country": "Iraq",
		      "currency": "Iraqi dinar",
		      "shortForm": "IQD"
		    },
		    {
		      "country": "Ireland",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Isle of Man (UK)",
		      "currency": "Manx pound",
		      "shortForm": "IMP"
		    },
		    {
		      "country": "Israel",
		      "currency": "Israeli new shekel",
		      "shortForm": "ILS"
		    },
		    {
		      "country": "Italy",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Jamaica",
		      "currency": "Jamaican dollar",
		      "shortForm": "JMD"
		    },
		    {
		      "country": "Japan",
		      "currency": "Japanese yen",
		      "shortForm": "JPY"
		    },
		    {
		      "country": "Jersey (UK)",
		      "currency": "Jersey pound",
		      "shortForm": "JEP"
		    },
		    {
		      "country": "Jordan",
		      "currency": "Jordanian dinar",
		      "shortForm": "JOD"
		    },
		    {
		      "country": "Kazakhstan",
		      "currency": "Kazakhstani tenge",
		      "shortForm": "KZT"
		    },
		    {
		      "country": "Kenya",
		      "currency": "Kenyan shilling",
		      "shortForm": "KES"
		    },
		    {
		      "country": "Kiribati",
		      "currency": "Australian dollar",
		      "shortForm": "AUD"
		    },
		    {
		      "country": "Kosovo",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Kuwait",
		      "currency": "Kuwaiti dinar",
		      "shortForm": "KWD"
		    },
		    {
		      "country": "Kyrgyzstan",
		      "currency": "Kyrgyzstani som",
		      "shortForm": "KGS"
		    },
		    {
		      "country": "Laos",
		      "currency": "Lao kip",
		      "shortForm": "LAK"
		    },
		    {
		      "country": "Latvia",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Lebanon",
		      "currency": "Lebanese pound",
		      "shortForm": "LBP"
		    },
		    {
		      "country": "Lesotho",
		      "currency": "Lesotho loti",
		      "shortForm": "LSL"
		    },
		    {
		      "country": "Liberia",
		      "currency": "Liberian dollar",
		      "shortForm": "LRD"
		    },
		    {
		      "country": "Libya",
		      "currency": "Libyan dinar",
		      "shortForm": "LYD"
		    },
		    {
		      "country": "Liechtenstein",
		      "currency": "Swiss franc",
		      "shortForm": "CHF"
		    },
		    {
		      "country": "Lithuania",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Luxembourg",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Macau (China)",
		      "currency": "Macanese pataca",
		      "shortForm": "MOP"
		    },
		    {
		      "country": "Madagascar",
		      "currency": "Malagasy ariary",
		      "shortForm": "MGA"
		    },
		    {
		      "country": "Malawi",
		      "currency": "Malawian kwacha",
		      "shortForm": "MWK"
		    },
		    {
		      "country": "Malaysia",
		      "currency": "Malaysian ringgit",
		      "shortForm": "MYR"
		    },
		    {
		      "country": "Maldives",
		      "currency": "Maldivian rufiyaa",
		      "shortForm": "MVR"
		    },
		    {
		      "country": "Mali",
		      "currency": "West African CFA franc",
		      "shortForm": "XOF"
		    },
		    {
		      "country": "Malta",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Marshall Islands",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Martinique (France)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Mauritania",
		      "currency": "Mauritanian ouguiya",
		      "shortForm": "MRU"
		    },
		    {
		      "country": "Mauritius",
		      "currency": "Mauritian rupee",
		      "shortForm": "MUR"
		    },
		    {
		      "country": "Mayotte (France)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Mexico",
		      "currency": "Mexican peso",
		      "shortForm": "MXN"
		    },
		    {
		      "country": "Micronesia",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Moldova",
		      "currency": "Moldovan leu",
		      "shortForm": "MDL"
		    },
		    {
		      "country": "Monaco",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Mongolia",
		      "currency": "Mongolian tugrik",
		      "shortForm": "MNT"
		    },
		    {
		      "country": "Montenegro",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Montserrat (UK)",
		      "currency": "East Caribbean dollar",
		      "shortForm": "XCD"
		    },
		    {
		      "country": "Morocco",
		      "currency": "Moroccan dirham",
		      "shortForm": "MAD"
		    },
		    {
		      "country": "Mozambique",
		      "currency": "Mozambican metical",
		      "shortForm": "MZN"
		    },
		    {
		      "country": "Myanmar (formerly Burma)",
		      "currency": "Myanmar kyat",
		      "shortForm": "MMK"
		    },
		    {
		      "country": "Namibia",
		      "currency": "Namibian dollar",
		      "shortForm": "NAD"
		    },
		    {
		      "country": "Nauru",
		      "currency": "Australian dollar",
		      "shortForm": "AUD"
		    },
		    {
		      "country": "Nepal",
		      "currency": "Nepalese rupee",
		      "shortForm": "NPR"
		    },
		    {
		      "country": "Netherlands",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "New Caledonia (France)",
		      "currency": "CFP franc",
		      "shortForm": "XPF"
		    },
		    {
		      "country": "New Zealand",
		      "currency": "New Zealand dollar",
		      "shortForm": "NZD"
		    },
		    {
		      "country": "Nicaragua",
		      "currency": "Nicaraguan cordoba",
		      "shortForm": "NIO"
		    },
		    {
		      "country": "Niger",
		      "currency": "West African CFA franc",
		      "shortForm": "XOF"
		    },
		    {
		      "country": "Nigeria",
		      "currency": "Nigerian naira",
		      "shortForm": "NGN"
		    },
		    {
		      "country": "Niue (New Zealand)",
		      "currency": "New Zealand dollar",
		      "shortForm": "NZD"
		    },
		    {
		      "country": "Norfolk Island (Australia)",
		      "currency": "Australian dollar",
		      "shortForm": "AUD"
		    },
		    {
		      "country": "Northern Mariana Islands (USA)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "North Korea",
		      "currency": "North Korean won",
		      "shortForm": "KPW"
		    },
		    {
		      "country": "North Macedonia (formerly Macedonia)",
		      "currency": "Macedonian denar",
		      "shortForm": "MKD"
		    },
		    {
		      "country": "Norway",
		      "currency": "Norwegian krone",
		      "shortForm": "NOK"
		    },
		    {
		      "country": "Oman",
		      "currency": "Omani rial",
		      "shortForm": "OMR"
		    },
		    {
		      "country": "Pakistan",
		      "currency": "Pakistani rupee",
		      "shortForm": "PKR"
		    },
		    {
		      "country": "Palau",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Palestine",
		      "currency": "Israeli new shekel",
		      "shortForm": "ILS"
		    },
		    {
		      "country": "Panama",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Papua New Guinea",
		      "currency": "Papua New Guinean kina",
		      "shortForm": "PGK"
		    },
		    {
		      "country": "Paraguay",
		      "currency": "Paraguayan guarani",
		      "shortForm": "PYG"
		    },
		    {
		      "country": "Peru",
		      "currency": "Peruvian sol",
		      "shortForm": "PEN"
		    },
		    {
		      "country": "Philippines",
		      "currency": "Philippine peso",
		      "shortForm": "PHP"
		    },
		    {
		      "country": "Pitcairn Islands (UK)",
		      "currency": "New Zealand dollar",
		      "shortForm": "NZD"
		    },
		    {
		      "country": "Poland",
		      "currency": "Polish zloty",
		      "shortForm": "PLN"
		    },
		    {
		      "country": "Portugal",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Puerto Rico (USA)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Qatar",
		      "currency": "Qatari riyal",
		      "shortForm": "QAR"
		    },
		    {
		      "country": "Reunion (France)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Romania",
		      "currency": "Romanian leu",
		      "shortForm": "RON"
		    },
		    {
		      "country": "Russia",
		      "currency": "Russian ruble",
		      "shortForm": "RUB"
		    },
		    {
		      "country": "Rwanda",
		      "currency": "Rwandan franc",
		      "shortForm": "RWF"
		    },
		    {
		      "country": "Saba (Netherlands)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Saint Barthelemy (France)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Saint Helena (UK)",
		      "currency": "Saint Helena pound\t",
		      "shortForm": "SHP"
		    },
		    {
		      "country": "Saint Kitts and Nevis",
		      "currency": "East Caribbean dollar",
		      "shortForm": "XCD"
		    },
		    {
		      "country": "Saint Lucia",
		      "currency": "East Caribbean dollar",
		      "shortForm": "XCD"
		    },
		    {
		      "country": "Saint Martin (France)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Saint Pierre and Miquelon (France)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Saint Vincent and the Grenadines",
		      "currency": "East Caribbean dollar",
		      "shortForm": "XCD"
		    },
		    {
		      "country": "Samoa",
		      "currency": "Samoan tala",
		      "shortForm": "WST"
		    },
		    {
		      "country": "San Marino",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Sao Tome and Principe",
		      "currency": "Sao Tome and Principe dobra",
		      "shortForm": "STN"
		    },
		    {
		      "country": "Saudi Arabia",
		      "currency": "Saudi Arabian riyal",
		      "shortForm": "SAR"
		    },
		    {
		      "country": "Senegal",
		      "currency": "West African CFA franc",
		      "shortForm": "XOF"
		    },
		    {
		      "country": "Serbia",
		      "currency": "Serbian dinar",
		      "shortForm": "RSD"
		    },
		    {
		      "country": "Seychelles",
		      "currency": "Seychellois rupee",
		      "shortForm": "SCR"
		    },
		    {
		      "country": "Sierra Leone",
		      "currency": "Sierra Leonean leone",
		      "shortForm": "SLL"
		    },
		    {
		      "country": "Singapore",
		      "currency": "Singapore dollar",
		      "shortForm": "SGD"
		    },
		    {
		      "country": "Sint Eustatius (Netherlands)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Sint Maarten (Netherlands)",
		      "currency": "Netherlands Antillean guilder",
		      "shortForm": "ANG"
		    },
		    {
		      "country": "Slovakia",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Slovenia",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Solomon Islands",
		      "currency": "Solomon Islands dollar",
		      "shortForm": "SBD"
		    },
		    {
		      "country": "Somalia",
		      "currency": "Somali shilling",
		      "shortForm": "SOS"
		    },
		    {
		      "country": "South Africa",
		      "currency": "South African rand",
		      "shortForm": "ZAR"
		    },
		    {
		      "country": "South Georgia Island (UK)",
		      "currency": "Pound sterling",
		      "shortForm": "GBP"
		    },
		    {
		      "country": "South Korea",
		      "currency": "South Korean won",
		      "shortForm": "KRW"
		    },
		    {
		      "country": "South Sudan",
		      "currency": "South Sudanese pound",
		      "shortForm": "SSP"
		    },
		    {
		      "country": "Spain",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Sri Lanka",
		      "currency": "Sri Lankan rupee",
		      "shortForm": "LKR"
		    },
		    {
		      "country": "Sudan",
		      "currency": "Sudanese pound",
		      "shortForm": "SDG"
		    },
		    {
		      "country": "Suriname",
		      "currency": "Surinamese dollar",
		      "shortForm": "SRD"
		    },
		    {
		      "country": "Svalbard and Jan Mayen (Norway)",
		      "currency": "Norwegian krone",
		      "shortForm": "NOK"
		    },
		    {
		      "country": "Sweden",
		      "currency": "Swedish krona",
		      "shortForm": "SEK"
		    },
		    {
		      "country": "Switzerland",
		      "currency": "Swiss franc",
		      "shortForm": "CHF"
		    },
		    {
		      "country": "Syria",
		      "currency": "Syrian pound",
		      "shortForm": "SYP"
		    },
		    {
		      "country": "Taiwan",
		      "currency": "New Taiwan dollar",
		      "shortForm": "TWD"
		    },
		    {
		      "country": "Tajikistan",
		      "currency": "Tajikistani somoni",
		      "shortForm": "TJS"
		    },
		    {
		      "country": "Tanzania",
		      "currency": "Tanzanian shilling",
		      "shortForm": "TZS"
		    },
		    {
		      "country": "Thailand",
		      "currency": "Thai baht",
		      "shortForm": "THB"
		    },
		    {
		      "country": "Timor-Leste",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Togo",
		      "currency": "West African CFA franc",
		      "shortForm": "XOF"
		    },
		    {
		      "country": "Tokelau (New Zealand)",
		      "currency": "New Zealand dollar",
		      "shortForm": "NZD"
		    },
		    {
		      "country": "Tonga",
		      "currency": "Tongan pa’anga",
		      "shortForm": "TOP"
		    },
		    {
		      "country": "Trinidad and Tobago",
		      "currency": "Trinidad and Tobago dollar",
		      "shortForm": "TTD"
		    },
		    {
		      "country": "Tristan da Cunha (UK)",
		      "currency": "Pound sterling",
		      "shortForm": "GBP"
		    },
		    {
		      "country": "Tunisia",
		      "currency": "Tunisian dinar",
		      "shortForm": "TND"
		    },
		    {
		      "country": "Turkey",
		      "currency": "Turkish lira",
		      "shortForm": "TRY"
		    },
		    {
		      "country": "Turkmenistan",
		      "currency": "Turkmen manat",
		      "shortForm": "TMT"
		    },
		    {
		      "country": "Turks and Caicos Islands (UK)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Tuvalu",
		      "currency": "Australian dollar",
		      "shortForm": "AUD"
		    },
		    {
		      "country": "Uganda",
		      "currency": "Ugandan shilling",
		      "shortForm": "UGX"
		    },
		    {
		      "country": "Ukraine",
		      "currency": "Ukrainian hryvnia",
		      "shortForm": "UAH"
		    },
		    {
		      "country": "United Arab Emirates",
		      "currency": "UAE dirham",
		      "shortForm": "AED"
		    },
		    {
		      "country": "United Kingdom",
		      "currency": "Pound sterling",
		      "shortForm": "GBP"
		    },
		    {
		      "country": "United States of America",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Uruguay",
		      "currency": "Uruguayan peso",
		      "shortForm": "UYU"
		    },
		    {
		      "country": "US Virgin Islands (USA)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Uzbekistan",
		      "currency": "Uzbekistani som",
		      "shortForm": "UZS"
		    },
		    {
		      "country": "Vanuatu",
		      "currency": "Vanuatu vatu",
		      "shortForm": "VUV"
		    },
		    {
		      "country": "Vatican City (Holy See)",
		      "currency": "European euro",
		      "shortForm": "EUR"
		    },
		    {
		      "country": "Venezuela",
		      "currency": "Venezuelan bolivar",
		      "shortForm": "VES"
		    },
		    {
		      "country": "Vietnam",
		      "currency": "Vietnamese dong",
		      "shortForm": "VND"
		    },
		    {
		      "country": "Wake Island (USA)",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    },
		    {
		      "country": "Wallis and Futuna (France)",
		      "currency": "CFP franc",
		      "shortForm": "XPF"
		    },
		    {
		      "country": "Yemen",
		      "currency": "Yemeni rial",
		      "shortForm": "YER"
		    },
		    {
		      "country": "Zambia",
		      "currency": "Zambian kwacha",
		      "shortForm": "ZMW"
		    },
		    {
		      "country": "Zimbabwe",
		      "currency": "United States dollar",
		      "shortForm": "USD"
		    }
		  ]
	}
       

## Fetch Country [/countries/nigeria]

### Get A ountry [GET]


+ Response 200 (application/json)

    + Headers

            Access-Control-Allow-Methods: GET, POST, PUT, DELETE
            Access-Control-Allow-Headers: Content-Type
            Access-Control-Allow-Credentials: true
            Content-Type: application/json
            Date: Fri, 11 Sep 2020 14:36:56 GMT
            Connection: keep-alive
            Transfer-Encoding: chunked

    + Body

            {
		  "status": "Success",
		  "data": {
		    "result": {
		      "country": "Nigeria",
		      "currency": "Nigerian naira",
		      "shortForm": "NGN"
		    }
		  }
	}
       


## Fetch Countries Group [/countries/group/s]

### Get Alphabetical Group of Countries [GET]

+ Request (application/json)


	

+ Response 200 (application/json)

    + Headers

            Access-Control-Allow-Methods: GET, POST, PUT, DELETE
            Access-Control-Allow-Headers: Content-Type
            Access-Control-Allow-Credentials: true
            Content-Type: application/json
            Date: Fri, 11 Sep 2020 14:36:56 GMT
            Connection: keep-alive
            Transfer-Encoding: chunked

    + Body

           {
		  "status": "Success",
		  "data": {
		    "result": [
		      {
			"country": "Saba (Netherlands)",
			"currency": "United States dollar",
			"shortForm": "USD"
		      },
		      {
			"country": "Saint Barthelemy (France)",
			"currency": "European euro",
			"shortForm": "EUR"
		      },
		      {
			"country": "Saint Helena (UK)",
			"currency": "Saint Helena pound\t",
			"shortForm": "SHP"
		      },
		      {
			"country": "Saint Kitts and Nevis",
			"currency": "East Caribbean dollar",
			"shortForm": "XCD"
		      },
		      {
			"country": "Saint Lucia",
			"currency": "East Caribbean dollar",
			"shortForm": "XCD"
		      },
		      {
			"country": "Saint Martin (France)",
			"currency": "European euro",
			"shortForm": "EUR"
		      },
		      {
			"country": "Saint Pierre and Miquelon (France)",
			"currency": "European euro",
			"shortForm": "EUR"
		      },
		      {
			"country": "Saint Vincent and the Grenadines",
			"currency": "East Caribbean dollar",
			"shortForm": "XCD"
		      },
		      {
			"country": "Samoa",
			"currency": "Samoan tala",
			"shortForm": "WST"
		      },
		      {
			"country": "San Marino",
			"currency": "European euro",
			"shortForm": "EUR"
		      },
		      {
			"country": "Sao Tome and Principe",
			"currency": "Sao Tome and Principe dobra",
			"shortForm": "STN"
		      },
		      {
			"country": "Saudi Arabia",
			"currency": "Saudi Arabian riyal",
			"shortForm": "SAR"
		      },
		      {
			"country": "Senegal",
			"currency": "West African CFA franc",
			"shortForm": "XOF"
		      },
		      {
			"country": "Serbia",
			"currency": "Serbian dinar",
			"shortForm": "RSD"
		      },
		      {
			"country": "Seychelles",
			"currency": "Seychellois rupee",
			"shortForm": "SCR"
		      },
		      {
			"country": "Sierra Leone",
			"currency": "Sierra Leonean leone",
			"shortForm": "SLL"
		      },
		      {
			"country": "Singapore",
			"currency": "Singapore dollar",
			"shortForm": "SGD"
		      },
		      {
			"country": "Sint Eustatius (Netherlands)",
			"currency": "United States dollar",
			"shortForm": "USD"
		      },
		      {
			"country": "Sint Maarten (Netherlands)",
			"currency": "Netherlands Antillean guilder",
			"shortForm": "ANG"
		      },
		      {
			"country": "Slovakia",
			"currency": "European euro",
			"shortForm": "EUR"
		      },
		      {
			"country": "Slovenia",
			"currency": "European euro",
			"shortForm": "EUR"
		      },
		      {
			"country": "Solomon Islands",
			"currency": "Solomon Islands dollar",
			"shortForm": "SBD"
		      },
		      {
			"country": "Somalia",
			"currency": "Somali shilling",
			"shortForm": "SOS"
		      },
		      {
			"country": "South Africa",
			"currency": "South African rand",
			"shortForm": "ZAR"
		      },
		      {
			"country": "South Georgia Island (UK)",
			"currency": "Pound sterling",
			"shortForm": "GBP"
		      },
		      {
			"country": "South Korea",
			"currency": "South Korean won",
			"shortForm": "KRW"
		      },
		      {
			"country": "South Sudan",
			"currency": "South Sudanese pound",
			"shortForm": "SSP"
		      },
		      {
			"country": "Spain",
			"currency": "European euro",
			"shortForm": "EUR"
		      },
		      {
			"country": "Sri Lanka",
			"currency": "Sri Lankan rupee",
			"shortForm": "LKR"
		      },
		      {
			"country": "Sudan",
			"currency": "Sudanese pound",
			"shortForm": "SDG"
		      },
		      {
			"country": "Suriname",
			"currency": "Surinamese dollar",
			"shortForm": "SRD"
		      },
		      {
			"country": "Svalbard and Jan Mayen (Norway)",
			"currency": "Norwegian krone",
			"shortForm": "NOK"
		      },
		      {
			"country": "Sweden",
			"currency": "Swedish krona",
			"shortForm": "SEK"
		      },
		      {
			"country": "Switzerland",
			"currency": "Swiss franc",
			"shortForm": "CHF"
		      },
		      {
			"country": "Syria",
			"currency": "Syrian pound",
			"shortForm": "SYP"
		      }
		    ]
		  }
	}
       



