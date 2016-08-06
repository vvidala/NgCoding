(function() {
    var mails = [
      {
        "index": 0,
        "guid": "9abcdeeb-e771-4e8a-ae08-3b85c4f05c1b",
        "isActive": true,
        "name": "Carver Nichols",
        "company": "FOSSIEL",
        "inbound": true,
        "email": "carvernichols@fossiel.com",
        "content": "Ut laborum sunt reprehenderit consequat adipisicing officia reprehenderit do mollit anim. Laborum ad nisi nulla laboris labore eiusmod deserunt cupidatat consectetur fugiat. Non excepteur ex nisi sunt cupidatat velit eiusmod do incididunt ipsum deserunt cupidatat aliquip esse. Et sunt Lorem voluptate laboris Lorem id anim cupidatat velit eu sit elit culpa sint. Officia dolore fugiat sit ipsum incididunt esse enim. Elit duis quis in qui exercitation. Sunt minim irure fugiat tempor mollit Lorem consequat ea exercitation est duis qui velit ad.\r\n",
        "sent": "2014-06-09T11:55:33 +07:00",
        "tags": [
          "non",
          "Lorem",
          "ullamco",
          "elit",
          "nulla",
          "ullamco",
          "incididunt"
        ]
      },
      {
        "index": 1,
        "guid": "f14b8ccd-1bb6-44d9-b695-a9ec5e606111",
        "isActive": true,
        "name": "Mcguire Barker",
        "company": "AVIT",
        "inbound": true,
        "email": "mcguirebarker@avit.com",
        "content": "Ea do ullamco fugiat Lorem exercitation irure. Excepteur eu Lorem ex fugiat ad ea aute quis consequat. Esse irure veniam do et velit ex ea tempor cillum labore labore irure velit mollit. Irure adipisicing ipsum nisi aliqua commodo officia. Duis minim tempor anim laboris eu minim consequat eiusmod et mollit.\r\n",
        "sent": "2015-11-26T12:52:56 +08:00",
        "tags": [
          "excepteur",
          "velit",
          "ut",
          "adipisicing",
          "eiusmod",
          "eiusmod",
          "ut"
        ]
      },
      {
        "index": 2,
        "guid": "0cda9b13-76b1-4b05-9e6c-5f0a91eaf56f",
        "isActive": true,
        "name": "Jones Bush",
        "company": "ZEDALIS",
        "email": "jonesbush@zedalis.com",
        "inbound": false,
        "content": "Mollit enim incididunt minim Lorem sit consequat fugiat. Aute tempor magna ut esse officia amet. Cillum ex consequat occaecat anim aliqua.\r\n",
        "sent": "2014-05-27T09:27:49 +07:00",
        "tags": [
          "enim",
          "nostrud",
          "velit",
          "proident",
          "irure",
          "officia",
          "voluptate"
        ]
      },
      {
        "index": 3,
        "guid": "26d6efb2-fd59-42f8-952d-9e4d83df6a59",
        "isActive": false,
        "name": "Cochran Freeman",
        "company": "PROSELY",
        "inbound": true,
        "email": "cochranfreeman@prosely.com",
        "content": "Proident velit cupidatat excepteur do pariatur sint. Velit occaecat minim magna pariatur amet amet officia aliqua consequat. Cupidatat eiusmod commodo ullamco ea fugiat. Proident aute aliqua aliquip aliqua fugiat nostrud culpa. In fugiat minim sit do mollit nostrud in proident Lorem ipsum laboris culpa ex. Labore duis exercitation dolore labore reprehenderit ad. Non ipsum cupidatat proident dolore adipisicing.\r\n",
        "sent": "2014-08-28T01:56:53 +07:00",
        "tags": [
          "et",
          "culpa",
          "voluptate",
          "proident",
          "aute",
          "quis",
          "in"
        ]
      },
      {
        "index": 4,
        "guid": "68e7b876-a030-4ab9-8fd0-ec5598a0948b",
        "isActive": true,
        "name": "Teri Beck",
        "company": "COMSTRUCT",
        "inbound": false,
        "email": "teribeck@comstruct.com",
        "content": "Ea nisi esse dolor sint laboris ipsum in elit tempor dolore quis deserunt. Est mollit elit dolor occaecat cupidatat commodo. Veniam amet aute eiusmod dolor consequat officia dolor ex eiusmod magna pariatur. Non commodo minim irure velit ex mollit minim ad sunt pariatur esse ut. Ad qui anim quis nostrud.\r\n",
        "sent": "2016-06-14T04:43:38 +07:00",
        "tags": [
          "occaecat",
          "nostrud",
          "commodo",
          "ea",
          "cillum",
          "ut",
          "commodo"
        ]
      },
      {
        "index": 5,
        "guid": "8e89a12e-6bcb-4589-9b28-007e26249c87",
        "isActive": true,
        "name": "Clarke Shaw",
        "company": "TRANSLINK",
        "inbound": true,
        "email": "clarkeshaw@translink.com",
        "content": "Ut irure nostrud nisi ex. Sint pariatur nostrud reprehenderit tempor sint laboris. Pariatur sunt Lorem ad excepteur et proident aute nostrud do deserunt Lorem. Sunt voluptate exercitation excepteur irure dolore et consequat occaecat deserunt aliquip quis deserunt ex nisi.\r\n",
        "sent": "2014-12-29T01:16:49 +08:00",
        "tags": [
          "cupidatat",
          "mollit",
          "anim",
          "ad",
          "adipisicing",
          "eu",
          "mollit"
        ]
      },
      {
        "index": 6,
        "guid": "29ac64c4-62eb-40e0-b270-135b482a56aa",
        "isActive": false,
        "name": "Kelly Moon",
        "company": "SENSATE",
        "inbound": true,
        "email": "kellymoon@sensate.com",
        "content": "Ad cupidatat et pariatur veniam aute amet velit irure laboris esse. Anim aliqua sit excepteur eu eu irure cupidatat do ullamco. Non fugiat nisi nostrud ad quis nostrud nisi. Excepteur fugiat magna minim fugiat id do et laborum ipsum. Sunt non id adipisicing velit. Et Lorem duis dolor irure esse esse. Anim dolor nisi sit laborum id exercitation consectetur ullamco pariatur adipisicing aliquip voluptate consectetur officia.\r\n",
        "sent": "2015-09-13T06:26:07 +07:00",
        "tags": [
          "incididunt",
          "consequat",
          "ullamco",
          "ullamco",
          "cupidatat",
          "voluptate",
          "proident"
        ]
      },
      {
        "index": 7,
        "guid": "fd34c9d0-ecac-48a3-aedb-75eecc31b1c1",
        "isActive": true,
        "name": "Adkins Lynch",
        "company": "MOMENTIA",
        "inbound": true,
        "email": "adkinslynch@momentia.com",
        "content": "Laboris in eiusmod do laboris nisi commodo labore id. Aliquip aliqua dolore veniam qui ex dolore id culpa et magna tempor pariatur veniam. Irure reprehenderit pariatur deserunt culpa. Elit anim exercitation do do anim velit id nostrud excepteur. In non ut ullamco tempor nostrud ex. Incididunt labore dolore reprehenderit cillum amet eu consectetur. Aute pariatur sunt consectetur nostrud consectetur culpa labore voluptate eiusmod aute nisi do.\r\n",
        "sent": "2014-11-25T03:18:12 +08:00",
        "tags": [
          "ullamco",
          "incididunt",
          "ut",
          "dolor",
          "officia",
          "ipsum",
          "dolor"
        ]
      },
      {
        "index": 8,
        "guid": "1d39924e-7450-438b-a44b-5d0f0d51bdfd",
        "isActive": false,
        "name": "Dina Petersen",
        "company": "RUBADUB",
        "inbound": true,
        "email": "dinapetersen@rubadub.com",
        "content": "Aliqua ex amet cillum veniam occaecat dolore Lorem incididunt. Culpa labore elit non cillum reprehenderit reprehenderit tempor id laborum pariatur aliqua occaecat magna veniam. Id est sunt Lorem amet ullamco nulla non quis consectetur sit consectetur esse.\r\n",
        "sent": "2014-02-27T02:06:48 +08:00",
        "tags": [
          "fugiat",
          "exercitation",
          "laboris",
          "pariatur",
          "minim",
          "aliqua",
          "commodo"
        ]
      },
      {
        "index": 9,
        "guid": "37220828-289a-4fc5-9ed9-3bb371d4223c",
        "isActive": false,
        "name": "Copeland Travis",
        "company": "DANJA",
        "inbound": true,
        "email": "copelandtravis@danja.com",
        "content": "Do id elit anim ad anim do deserunt anim aliquip consectetur consectetur veniam sit. Aliquip occaecat sit sint irure labore et occaecat sit. Cillum ipsum nulla amet exercitation velit commodo laborum eu. Ea quis ad consectetur laboris exercitation id minim laboris reprehenderit esse culpa Lorem. Cillum velit duis ullamco enim occaecat consequat elit Lorem ullamco. Voluptate ipsum adipisicing cupidatat laboris voluptate consequat mollit adipisicing ex pariatur incididunt ex ad.\r\n",
        "sent": "2014-12-06T04:57:00 +08:00",
        "tags": [
          "sit",
          "sint",
          "sunt",
          "duis",
          "sit",
          "ea",
          "magna"
        ]
      },
      {
        "index": 10,
        "guid": "e166ef4d-4a74-478b-b58f-233fec2e827c",
        "isActive": false,
        "name": "Roxanne Carlson",
        "company": "ASSISTIA",
        "inbound": true,
        "email": "roxannecarlson@assistia.com",
        "content": "Anim esse voluptate excepteur aliqua eu esse labore incididunt ullamco labore consequat minim. Adipisicing nostrud consectetur incididunt ad et proident ipsum. Deserunt cupidatat velit et occaecat qui voluptate sit tempor exercitation consectetur. Ut voluptate officia commodo exercitation excepteur reprehenderit anim dolor officia exercitation ad cupidatat labore. Aliqua est deserunt occaecat quis fugiat anim adipisicing deserunt nulla. Dolore minim incididunt nulla aliqua fugiat ad enim. Fugiat consequat sunt quis magna consectetur esse aute ad eu eu ad proident commodo.\r\n",
        "sent": "2014-06-09T08:32:40 +07:00",
        "tags": [
          "officia",
          "id",
          "anim",
          "enim",
          "amet",
          "dolor",
          "occaecat"
        ]
      },
      {
        "index": 11,
        "guid": "d36903f4-33cd-4fc8-86aa-26e72f5563ec",
        "isActive": true,
        "name": "Aimee Miles",
        "company": "ENERSOL",
        "inbound": false,
        "email": "aimeemiles@enersol.com",
        "content": "Cupidatat fugiat exercitation dolore mollit. Esse sunt id cillum dolor nisi tempor occaecat officia. Mollit Lorem ut sit eiusmod fugiat proident voluptate aliquip esse cillum voluptate id culpa excepteur. Occaecat voluptate laborum ad do incididunt in et anim consequat id irure deserunt sit.\r\n",
        "sent": "2014-05-29T01:35:33 +07:00",
        "tags": [
          "excepteur",
          "nulla",
          "nulla",
          "non",
          "eiusmod",
          "minim",
          "anim"
        ]
      },
      {
        "index": 12,
        "guid": "14ed7630-3c7d-4f2c-9f73-0f790ef15c56",
        "isActive": true,
        "name": "Lindsey Fuentes",
        "company": "TALKALOT",
        "email": "lindseyfuentes@talkalot.com",
        "content": "Qui velit cupidatat Lorem sint ex nostrud nostrud do elit nisi adipisicing sit ad sunt. Qui irure occaecat veniam id sit irure magna mollit voluptate ut commodo sunt ullamco non. Et anim eu voluptate irure duis Lorem magna tempor sit nostrud occaecat commodo. Ea do reprehenderit eiusmod fugiat officia Lorem veniam.\r\n",
        "sent": "2014-01-12T12:45:22 +08:00",
        "tags": [
          "voluptate",
          "consequat",
          "nisi",
          "elit",
          "anim",
          "consequat",
          "anim"
        ]
      },
      {
        "index": 13,
        "guid": "abe0b37e-0d05-41f9-b261-0ccdd07b88a3",
        "isActive": false,
        "name": "Dunn Knapp",
        "company": "GYNKO",
        "inbound": true,
        "email": "dunnknapp@gynko.com",
        "content": "Mollit culpa pariatur magna ad eu ea in nostrud. Veniam in occaecat veniam nulla in voluptate anim duis dolore dolor. In labore incididunt ut cupidatat irure do Lorem. Proident nulla ex esse occaecat velit amet nostrud aute culpa.\r\n",
        "sent": "2014-12-21T09:04:09 +08:00",
        "tags": [
          "minim",
          "anim",
          "do",
          "do",
          "pariatur",
          "amet",
          "Lorem"
        ]
      },
      {
        "index": 14,
        "guid": "c6d05187-74ee-430d-b678-a80bff5798f1",
        "isActive": false,
        "name": "Avis Kirkland",
        "company": "AQUASURE",
        "inbound": true,
        "email": "aviskirkland@aquasure.com",
        "content": "Cillum occaecat quis voluptate quis commodo deserunt labore minim amet enim. Eiusmod exercitation officia sunt sunt. Excepteur aliqua non dolore excepteur eiusmod nisi. Ex aute eu velit cillum ipsum incididunt voluptate aliqua.\r\n",
        "sent": "2015-12-27T05:12:10 +08:00",
        "tags": [
          "adipisicing",
          "ut",
          "adipisicing",
          "elit",
          "et",
          "deserunt",
          "magna"
        ]
      },
      {
        "index": 15,
        "guid": "c761a051-63e6-4732-abf4-86dac5ce1ebf",
        "isActive": false,
        "name": "Gay Whitfield",
        "company": "DIGIGEN",
        "inbound": true,
        "email": "gaywhitfield@digigen.com",
        "content": "Mollit quis adipisicing sit ad elit officia excepteur laboris adipisicing. Ea consequat amet reprehenderit mollit quis anim mollit reprehenderit nostrud. Duis velit minim anim ea cupidatat. Nulla culpa cillum sunt commodo ea fugiat laborum ex amet occaecat est. Est Lorem aliqua fugiat elit. Qui cupidatat voluptate adipisicing laboris magna Lorem minim.\r\n",
        "sent": "2016-06-13T05:09:10 +07:00",
        "tags": [
          "excepteur",
          "adipisicing",
          "veniam",
          "anim",
          "consectetur",
          "veniam",
          "incididunt"
        ]
      },
      {
        "index": 16,
        "guid": "fe40c8cc-1864-41cb-86c5-5535cfb3d5f7",
        "isActive": true,
        "name": "Carmen Patton",
        "company": "QUIZKA",
        "inbound": false,
        "email": "carmenpatton@quizka.com",
        "content": "Dolore quis irure aute est reprehenderit Lorem aliqua Lorem irure. Voluptate enim nulla deserunt commodo nostrud velit ullamco adipisicing incididunt. Exercitation cupidatat ipsum proident id Lorem reprehenderit consequat reprehenderit sint eiusmod anim nostrud. Ex veniam pariatur incididunt deserunt ex deserunt id non ex. Consectetur minim pariatur nulla laboris laborum et commodo elit dolor adipisicing officia. Nulla do do deserunt ullamco voluptate ex sit. Consequat sit ut culpa aute officia labore mollit culpa nostrud amet enim.\r\n",
        "sent": "2014-09-15T08:14:15 +07:00",
        "tags": [
          "eiusmod",
          "cillum",
          "eiusmod",
          "dolor",
          "est",
          "deserunt",
          "mollit"
        ]
      },
      {
        "index": 17,
        "guid": "92d93177-8699-431a-8f6f-b1bd05ff31c2",
        "isActive": true,
        "name": "Maritza Whitley",
        "company": "EARTHPLEX",
        "inbound": true,
        "email": "maritzawhitley@earthplex.com",
        "content": "Tempor quis veniam pariatur irure mollit adipisicing labore commodo labore anim Lorem aliquip. Laboris mollit quis nisi irure nulla incididunt eu minim ad do nostrud velit non ut. Veniam aliqua incididunt nisi incididunt.\r\n",
        "sent": "2016-05-14T05:23:48 +07:00",
        "tags": [
          "tempor",
          "nulla",
          "minim",
          "id",
          "aliqua",
          "tempor",
          "incididunt"
        ]
      },
      {
        "index": 18,
        "guid": "52cb2e24-69dc-4a97-acd6-296e411b910f",
        "isActive": true,
        "name": "Stone Duran",
        "company": "MAINELAND",
        "inbound": true,
        "email": "stoneduran@maineland.com",
        "content": "Deserunt laborum exercitation anim eiusmod minim ut. Excepteur et tempor incididunt sunt. Velit pariatur deserunt duis non reprehenderit. Adipisicing enim adipisicing tempor occaecat excepteur. Laboris officia cillum sit anim qui elit consectetur. Cupidatat sit sunt ea occaecat deserunt nisi. Ea in ex officia labore est duis aute laborum amet ipsum aute.\r\n",
        "sent": "2014-12-16T11:18:25 +08:00",
        "tags": [
          "velit",
          "irure",
          "et",
          "aliquip",
          "elit",
          "in",
          "ullamco"
        ]
      },
      {
        "index": 19,
        "guid": "1e02019d-2026-40ff-a1f6-76139d690296",
        "isActive": true,
        "name": "Cherry Sykes",
        "company": "FANGOLD",
        "inbound": false,
        "email": "cherrysykes@fangold.com",
        "content": "Excepteur laborum mollit irure do Lorem consequat amet culpa adipisicing. Est pariatur et irure culpa eiusmod do aliqua culpa ut in. Ad sint tempor ad ad. Exercitation nisi occaecat ad id consectetur magna laboris sit adipisicing excepteur aute velit dolor Lorem. Officia consectetur eiusmod do esse labore laboris dolor id elit occaecat id dolore. Deserunt non cupidatat eu deserunt in magna dolor tempor nisi in eiusmod.\r\n",
        "sent": "2014-11-05T08:12:21 +08:00",
        "tags": [
          "duis",
          "consectetur",
          "est",
          "sunt",
          "cupidatat",
          "nisi",
          "ipsum"
        ]
      }
    ]

    angular.module('app')
        .service('MailService', MailService);

    function MailService($q) {
        this.getMail = function() {
            return $q.when(angular.copy(mails));
        }

        this.getSentMail = function() {
            return $q.when(mails.filter(function(mail) {
                return !mail.inbound;
            }))
        }

        this.getRecievedMail = function() {
            return $q.when(mails.filter(function(mail) {
                return mail.inbound;
            }))
        }
    }
})()
