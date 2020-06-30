import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  countries:string[] = ["Afghanistan","Albania","Algeria","American Samoa","Andorra",
  "Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria",
    "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of The",
  "Cook Islands",
  "Costa Rica",
  "Cote D'ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-bissau",
  "Guyana",
  "Haiti",
  "Heard Island and Mcdonald Islands",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran, Islamic Republic of",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic of",
  "Korea, Republic of",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia, The Former Yugoslav Republic of",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova, Republic of",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory, Occupied",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and The Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and The South Sandwich Islands",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan, Province of China",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands, British",
  "Virgin Islands, U.S",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"];
  underlineColor: '#38d39f';
  login = 'true';
  registershowing: boolean = false;
  sidetitle = 'Hello, Friend!';
  sidep1 = 'Enter your personal details';
  sidep2 = 'and start journey with us';
  sidebutton = 'SIGN UP';
  logintitle = 'Sign in';
  loginbutton = 'SIGN IN';
  profile_image: String | ArrayBuffer = '/assets/avatar.svg';
  name: string;
  email_user: string;
  password_user: string;
  constructor() {
  }

  ngOnInit(): void {
  }
  addfocus(event){
    event.srcElement.parentElement.parentElement.classList.add("focus");
  }
  addblur(event){
    if(event.srcElement.value == '')
    {
      event.srcElement.parentElement.parentElement.classList.remove("focus")
    }
  }
  login_register() {
    var node = document.getElementById('side--content');
    var node2 = document.getElementById('login--content');
    if (this.login == 'true') {
      node.classList.add('change1');
      node2.classList.add('change2');
      node.classList.remove('change3');
      node2.classList.remove('change4');
      setTimeout(() => {
        this.registershowing = true; this.sidetitle = 'Welcome Back!';
        this.sidep1 = 'To keep connected with us please';
        this.sidep2 = 'login with your personal info';
        this.sidebutton = 'SIGN IN';
        this.logintitle = 'Create Account';
        this.loginbutton = 'SIGN UP';
      }, 500);
      this.login = 'false';
    }
    else {
      node.classList.add('change3');
      node2.classList.add('change4');
      node.classList.remove('change1');
      node2.classList.remove('change2');
      setTimeout(() => {
        this.registershowing = false;
        this.sidetitle = 'Hello, Friend!';
        this.sidep1 = 'Enter your personal details';
        this.sidep2 = 'and start journey with us';
        this.sidebutton = 'SIGN UP';
        this.logintitle = 'Sign In';
        this.loginbutton = 'SIGN IN';
      }, 500);
      this.login = 'true';
    }
  }
  viewpic(file: File) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = event => {
      this.profile_image = reader.result;
    }
  }
  resize() {
    var width = window.innerWidth;
    var node = document.getElementById('side--content');
    var node2 = document.getElementById('login--content');
    if (width < 760) {
      node.classList.remove('change1');
      node2.classList.remove('change2');
      node.classList.remove('change3');
      node2.classList.remove('change4');
    }
    else {
      if (this.registershowing) {
        node.classList.add('change1');
        node2.classList.add('change2');
        setTimeout(() => {
          this.registershowing = true; this.sidetitle = 'Welcome Back!';
          this.sidep1 = 'To keep connected with us please';
          this.sidep2 = 'login with your personal info';
          this.sidebutton = 'SIGN IN';
          this.logintitle = 'Create Account';
          this.loginbutton = 'SIGN UP';
        }, 500);
        this.login = 'false';
      }
    }
  }

}
