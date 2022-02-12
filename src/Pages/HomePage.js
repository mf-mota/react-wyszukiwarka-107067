import React, { useState } from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import SearchBar from "../Components/SearchBar";
import Catalog from "../Components/Catalog";
import Footer from "../Components/Footer";
import { carFilter } from "../filter.js";


const myTitle = "Wyszukiwarka Samochodów Audi";

const listOfModels = [
  {
    model: "A1 Sportback",
    brand: "Audi",
    description:
      "Cena od 102 500 PLN",
    imageurl:
      "https://i.gremicdn.pl/image/free/856ac660c4762a3cb360c852745e73cb/?t=resize:fill:948:592,enlarge:1",
    engines: [
      "30 TFSI - 110 KM (Benzyna)",
      "35 TFSI - 150 KM (Benzyna)",
      "40 TFSI - 205 KM (Benzyna)",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a1/a1-sportback/pakiety.html"
  },
  {
    
    model: "A3 Sportback",
    brand: "Audi",
    description: 
      "Cena od 106 800 PLN",
    imageurl:
      "https://www.auto-motor-i-sport.pl/media/lib/2952/2021-audi-a3-sportback-40-tfsi-e-phev-9-6f7cb645af5aa2e56e0f190681c527b4.jpg",
    engines: [
      "30 TFSI - 110 KM", 
      "35 TFSI - 150 KM",
      "40 TFSI - 190 KM",
      "30 TDI - 116 KM",
      "35 TDI - 150 KM" ,
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a3/nowe-a3-sportback/pakiety.html"
  },
  {
    model: "e-tron GT quattro",
    brand: "Audi",
    description:
      "Cena od 448 600 PLN",
    imageurl:
      "https://bi.im-g.pl/im/b3/88/19/z26772659IH,Audi-RS-e-tron-GT.jpg",
    engines: ["Silnik Elektryczny - 490 KM"],
    konfig: "https://www.audi.pl/pl/web/pl/modele/e-tron-gt/audi-e-tron-gt/pakiety.html"
  },
  {
    model: "RS e-tron GT",
    brand: "Audi",
    description:
      "Cena od 604 900 PLN",
    imageurl:
      "https://ocdn.eu/pulscms-transforms/1/06pk9kpTURBXy82YTkwYmY5OWQ0ZjQ1NjVkOWJiYmQ0MWZiZjIxY2ZkYi5qcGeSlQPMu8yPzQbFzQPPkwXNAxTNAbyCoTAFoTEA",
    engines: ["Silnik elektryczny - 590 KM"],
    konfig: "https://www.audi.pl/pl/web/pl/modele/e-tron-gt/audi-rs-e-tron-gt/pakiety.html"
  },
  {
    model: "e-tron",
    brand: "Audi",
    description:
      "Cena od 310 300 PLN",
    imageurl:
      "https://audimediacenter-a.akamaihd.net/system/production/media/67889/images/b810d9a1e64a967b2ab220efbbaed8f140802a70/A1811300_x750.jpg?1582454697",
    engines: ["Silnik elektryczny 50 quattro - 309 KM",
    "Silnik Elektryczny 55 quattro - 402 KM"],
    konfig: "https://www.audi.pl/pl/web/pl/modele/tron/audi-e-tron/pakiety.html"
  },
  {
    model: "e-tron Sportback",
    brand: "Audi",
    description:
      "Cena od 331 600 PLN",
    imageurl:
      "https://www.wyborkierowcow.pl/wp-content/uploads/2020/01/e-tron-sportback-otwarcie-696x464.jpg",
      engines: ["Silnik elektryczny 50 quattro - 309 KM",
      "Silnik Elektryczny 55 quattro - 402 KM"],
      konfig: "https://www.audi.pl/pl/web/pl/modele/tron/audi-e-tron-sportback/pakiety.html"
  },
  {
    model: "e-tron S",
    brand: "Audi",
    description:
      "Cena od 418 800 PLN",
    imageurl:
      "https://www.wyborkierowcow.pl/wp-content/uploads/2020/07/audi-etron-s-sylwetka1-696x392.jpg",
    engines: [
      "Silnik Elektryczny quattro -  496 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/tron/audi-e-tron-s/pakiety.html"
  },
  {
    model: "e-tron S Sportback",
    brand: "Audi",
    description:
      "Cena od 428 100 PLN",
    imageurl:
      "https://i.wpimg.pl/730x0/m.autokult.pl/2021-audi-e-tron-s-sport-9b2ae40.jpg",
    engines: ["Silnik Elektryczny quattro -  496 KM"],
    konfig: "https://www.audi.pl/pl/web/pl/modele/tron/audi-e-tron-s-sportback/pakiety.html"
  },
  {
    model: "A3 Sportback TFSI e",
    brand: "Audi",
    description:
      "Cena od 179 400 PLN",
    imageurl:
      "https://www.pooleaudi.co.uk/media/images/50848559/p214.a3sb6.jpg",
    engines: ["Silnik 45 TFSI e - 245 KM (Hybrid)"],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a3/a3-sportback-tfsi-e/pakiety.html"
  },
  {
    model: "A3 Limousine",
    brand: "Audi",
    description:
      "Cena od 109 800 PLN",
    imageurl:
      "https://motofilm.pl/wp-content/uploads/2020/04/2021-Audi-A3-limo_02.jpg",
      engines: [
        "30 TFSI - 110 KM", 
        "35 TFSI - 150 KM",
        "40 TFSI - 190 KM",
        "30 TDI - 116 KM",
        "35 TDI - 150 KM" ,
      ],
      konfig: "https://www.audi.pl/pl/web/pl/modele/a3/nowe-a3-limousine/pakiety.html"
  },
  {
    model: "S3 Sportback",
    brand: "Audi",
    description:
      "Cena od 200 800 PLN",
    imageurl:
      "https://audimediacenter-a.akamaihd.net/system/production/media/93114/images/33cab01636ccde848c3a36b08d5114a77389f1bc/A204410_x750.jpg?1597057675",
    engines: [
        "TFSI quattro - 310 KM"
      ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a3/nowe-s3-sportback/pakiety.html"
  },
  {
    model: "S3 Limousine",
    brand: "Audi",
    description:
      "Cena od 203 800 PLN",
    imageurl:
      "https://motohigh.pl/wp-content/uploads/2020/08/Audi-S3_Sedan-2021-1024-01.jpg",
      engines: [
        "TFSI quattro - 310 KM"
      ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a3/nowe-s3-limousine/pakiety.html"
  },
  {
    model: "RS3 Sportback",
    brand: "Audi",
    description:
    "Cena od 283 400 PLN",
    imageurl: "https://www.24auto.de/bilder/2021/07/19/90869692/26547112-fahraufnahme-eines-audi-rs3-2oouneISLC70.jpg",
    engines: ["quattro - 400 KM"],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a3/rs-3-sportback/pakiety.html"
  },
  {
    model: "RS3 Limousine",
    brand: "Audi",
    description:
    "Cena od 292 400 PLN",
    imageurl: "https://motofilm.pl/wp-content/uploads/2021/06/x2022-Audi-RS3-Limousine-3.jpg.pagespeed.ic._AzVtFptFn.webp",
    engines: ["quattro - 400 KM"],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a3/rs-3-limousine/pakiety.html"
  },
  {
    model: "A4 Limousine",
    brand: "Audi",
    description:
    "Cena od 142 500 PLN",
    imageurl: "https://audimediacenter-a.akamaihd.net/system/production/media/77772/images/7075302e9ee79cf6336cc7f5925e5de25dcd99f8/A195687_full.jpg?1595847145",
    engines: [
        "35 TFSI - 150 KM", 
        "40 TFSI - 204 KM",
        "45 TFSI (quattro) - 265 KM",
        "30 TDI - 136 KM",
        "35 TDI - 163 KM" ,
      	"40 TDI (quattro) - 204 KM"
      ],
      konfig: "https://www.audi.pl/pl/web/pl/modele/a4/a4-limousine/pakiety.html"    
  },
{
    model: "A4 Avant",
    brand: "Audi",
    description:
    "Cena od 150 100 PLN",
    imageurl: "https://audimediacenter-a.akamaihd.net/system/production/media/77775/images/251a183c872fa68ff9381e63c159fe44ac2ed73d/A195690_full.jpg?1582518388",
    engines: [
        "35 TFSI - 150 KM", 
        "40 TFSI - 204 KM",
        "45 TFSI (quattro) - 265 KM",
        "30 TDI - 136 KM",
        "35 TDI - 163 KM" ,
	      "40 TDI (quattro) - 204 KM"
      ],
      konfig: "https://www.audi.pl/pl/web/pl/modele/a4/a4-avant/pakiety.html"
  },
  {
    model: "A4 allroad quattro",
    brand: "Audi",
    description:
    "Cena od 206 300 PLN",
    imageurl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-audi-a4-allroad-mmp-1-1623774847.jpg?crop=0.907xw:0.903xh;0.0641xw,0.0795xh&resize=2048:*",
    engines: [
        "40 TDI quattro - 204 KM", 
        "45 TFSI quattro - 265 KM"
      ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a4/a4-allroad-quattro/pakiety.html"
  },
{
    model: "S4 Limousine",
    brand: "Audi",
    description:
    "Cena od 341 100 PLN",
    imageurl: "https://static.cargurus.com/images/site/2020/09/01/09/13/2021_audi_s4-pic-18071886478291222982-640x480.jpeg",
    engines: [
        "TDI quattro - 341 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a4/s4-limousine/pakiety.html"
  },
{
    model: "S4 Avant",
    brand: "Audi",
    description:
    "Cena od 348 700 PLN",
    imageurl: "https://wrc.net.pl/app/uploads/2019/12/2020-audi-s4-avant-tdi-5-1024x576.jpg",
    engines: [
        "TDI quattro - 341 KM"
      ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a4/s4-avant/pakiety.html"
  },
{
    model: "RS4 Avant",
    brand: "Audi",
    description:
    "Cena od 434 700 PLN",
    imageurl: "https://www.tuningblog.eu/pl/kategorie/to-ty-tam/audi-rs-nogaro-niebieski-336253/przywi%C4%85zanie/Audi-sport-editions-nogaro-tt-rs-rs4-rs5-rs6-tuning-2021-3/",
    engines: [
        "TFSI quattro - 450 KM"
      ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a4/nowe-rs-4-avant/pakiety.html"
  },
  {
    model: "A5 Coupé",
    brand: "Audi",
    description:
    "Cena od 178 900 PLN",
    imageurl: "https://www.autotrader.com/wp-content/uploads/2020/06/2021-audi-a5-coupe-front-left-side.jpg",
    engines: [
        "35 TFSI - 150 KM",
	"40 TFSI - 204 KM", 
	"45 TFSI - 265 KM",
        "35 TDI - 163 KM",
	"40 TDI - 204 KM",
      ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a5/a5-coupe/pakiety.html"
 },
  {
    model: "A5 Sportback",
    brand: "Audi",
    description:
    "Cena od 186 900 PLN",
    imageurl: "https://i.ytimg.com/vi/R-SnoGkbvdg/maxresdefault.jpg",
    engines: [
        "35 TFSI - 150 KM",
	"40 TFSI - 204 KM", 
	"45 TFSI - 265 KM",
        "35 TDI - 163 KM",
	"40 TDI - 204 KM",
      ],
      konfig: "https://www.audi.pl/pl/web/pl/modele/a5/a5-sportback/pakiety.html"
 },
  {
    model: "S5 Coupé",
    brand: "Audi",
    description:
    "Cena od 347 500 PLN",
    imageurl: "https://cdn.carbuzz.com/gallery-images/2022-audi-s5-coupe-front-view-driving-carbuzz-691238.jpg",
    engines: [
        "TDI quattro - 341 KM"
      ],
      konfig: "https://www.audi.pl/pl/web/pl/modele/a5/nowe-s5-coupe/pakiety.html"
 },
  {
    model: "S5 Sportback",
    brand: "Audi",
    description:
    "Cena od 355 500 PLN",
    imageurl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6948-2020audis5sportback-copy-1642199836.jpg?crop=0.790xw:0.594xh;0.151xw,0.262xh&resize=1200:*",
    engines: [
        "TDI quattro - 341 KM"
      ],
      konfig: "https://www.audi.pl/pl/web/pl/modele/a5/nowe-s5-sportback/pakiety.html"
 },
  {
    model: "RS5 Coupé",
    brand: "Audi",
    description:
    "Cena od 438 400 PLN",
    imageurl: "https://cdn.carbuzz.com/gallery-images/2022-audi-rs5-coupe-rear-view-driving-carbuzz-813037.jpg",
    engines: [
        "TFSI quattro - 450 KM"
      ],
      konfig: "https://www.audi.pl/pl/web/pl/modele/a5/nowe-rs-5-coupe/pakiety.html"
 },
  {
    model: "RS5 Sportback",
    brand: "Audi",
    description:
    "Cena od 446 400 PLN",
    imageurl: "https://imgcdnblog.carbay.com/wp-content/uploads/2021/09/10095522/2-1.jpg",
    engines: [
        "TFSI quattro - 450 KM"
      ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a5/nowe-rs-5-sportback/pakiety.html"
 },
 {
  model: "A6 Limousine",
  brand: "Audi",
  description:
  "Cena od 219 200 PLN",
  imageurl: "https://wokolmotoryzacji.pl/wp-content/uploads/2021/12/2023-audi-a6-sedan-unofficial-renderings-1.jpg",
  engines: [
      "45 TFSI (quattro) - 265 KM",
      "55 TFSI quattro- 340 KM",
      "35 TDI - 163 KM",
      "40 TDI (quattro) - 204 KM",
      "50 TDI (quattro) - 340 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a6/a6-limousine/pakiety.html"
},
{
  model: "A6 Limousine TFSI e",
  brand: "Audi",
  description:
  "Cena od 275 400 PLN",
  imageurl: "https://i.iplsc.com/audi-a6-55-tfsi-e-quattro/0009BH2P98GLNIKB-C122-F4.jpg",
  engines: [
      "50 TFSI e quattro - 299 KM (Hybrid)",
      "55 TFSI e quattro - 367 KM (Hybrid)",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a6/a6-limousine-tfsi-e/pakiety.html"
},
{
  model: "A6 Avant",
  brand: "Audi",
  description:
  "Cena od 231 700 PLN",
  imageurl: "https://static.moniteurautomobile.be/imgcontrol/images_tmp/clients/moniteur/c680-d465/content/medias/images/cars/audi/a6/audi--a6-avant--2021/audi--a6-avant--2021-m-3.jpg",
  engines: [
      "45 TFSI (quattro) - 265 KM",
      "55 TFSI quattro- 340 KM",
      "35 TDI - 163 KM",
      "40 TDI (quattro) - 204 KM",
      "50 TDI (quattro) - 340 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a6/a6-avant/pakiety.html"
},
{
  model: "A6 Avant TFSI e",
  brand: "Audi",
  description:
  "Cena od 287 800 PLN",
  imageurl: "https://www.wyborkierowcow.pl/wp-content/uploads/2020/04/audi-a6-avant-hybryda-otwarcie.jpg",
  engines: [
      "50 TFSI e quattro - 299 KM (Hybrid)",
      "55 TFSI e quattro - 367 KM (Hybrid)"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a6/a6-avant-tfsi-e/pakiety.html"
},
{
  model: "A6 allroad quattro",
  brand: "Audi",
  description:
  "Cena od 274 300 PLN",
  imageurl: "https://i.wpimg.pl/1920x0/m.autokult.pl/2020-audi-a6-allroad-qua-cb6aa21.jpg",
  engines: [
      "55 TFSI quattro - 340 KM",
      "40 TDI quattro - 204 KM",
      "45 TDI quattro - 245 KM",
      "50 TDI quattro - 286 KM",
      "55 TDI quattro - 344 KM",	
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a6/a6-allroad-quattro/pakiety.html"
},
{
  model: "S6 Avant",
  brand: "Audi",
  description:
  "Cena od 423 400 PLN",
  imageurl: "https://audimediacenter-a.akamaihd.net/system/production/media/75959/images/c275c844c651d1f16b320572f5fb307f1d5e8a0f/A193900_blog.jpg?1582507108",
  engines: [
      "TDI quattro - 344 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a6/s6-avant/pakiety.html"
},
{
  model: "S6 Limousine",
  brand: "Audi",
  description:
  "Cena od 411 800 PLN",
  imageurl: "https://img.chceauto.pl/audi/a6/audi-a6-sedan-4140-43499_head.jpg",
  engines: [
      "TDI quattro - 344 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a6/s6-limousine/pakiety.html"
},
{
  model: "RS6 Avant",
  brand: "Audi",
  description:
  "Cena od 634 300 PLN",
  imageurl: "https://img.wprost.pl/img/nowe-audi-rs6-avant/65/1f/c1b6ffb1a64a12510310f405ca54.jpeg",
  engines: [
      "TFSI quattro - 600 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a6/rs-6-avant/pakiety.html"
},
{
  model: "A7 Sportback",
  brand: "Audi",
  description:
  "Cena od 269 200 PLN",
  imageurl: "https://audireviewcars.com/wp-content/uploads/2020/09/New-Audi-A7-2022-Next-Generation.jpg",
  engines: [
      "45 TFSI (quattro) - 265 KM",
      "55 TFSI quattro - 340 KM",
      "40 TDI (quattro) - 204 KM",
      "50 TDI quattro - 286 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a7/a7-sportback/pakiety.html"
},
{
  model: "A7 Sportback TFSI e",
  brand: "Audi",
  description:
  "Cena od 301 100 PLN",
  imageurl: "https://pbs.twimg.com/media/EmPUKOYUYAA-nBS.jpg",
  engines: [
      "50 TFSI e quattro - 299 KM (Hybrid)",
      "55 TFSI e quattro - 367 KM (Hybrid)"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a7/a7-sportback-tfsi-e/pakiety.html"
},
{
  model: "S7 Sportback",
  brand: "Audi",
  description:
  "Cena od 435 600 PLN",
  imageurl: "https://cdn.static-carhp.com/images/car/Audi/old_Audi_S7_2022_Sportback_61408fb988710.jpg",
  engines: [
      "TDI quattro - 344 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a7/s7-sportback/pakiety.html"
},
{
  model: "RS7 Sportback",
  brand: "Audi",
  description:
  "Cena od 636 000 PLN",
  imageurl: "https://i.ytimg.com/vi/7V7wKsZhbK8/maxresdefault.jpg",
  engines: [
      "TFSI quattro - 600 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a7/rs-7-sportback/pakiety.html"
},
{
  model: "A8",
  brand: "Audi",
  description:
  "Cena od 442 100 PLN",
  imageurl: "https://www.chip.pl/wp-content/uploads/2021/11/Premiera-Audi-A8-2022.-Co-przynioslo-swiatu-odswiezone-A8-2.jpg",
  engines: [
      "55 TFSI quattro - 286 KM",
      "60 TFSI quattro - 340 KM",
      "50 TDI quattro - 460 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a8/a8/pakiety.html"
},
{
  model: "A8 TFSI e",
  brand: "Audi",
  description:
  "Cena od 507 200 PLN",
  imageurl: "https://car-images.bauersecure.com/pagefiles/93548/480x270/a8hybrid_100.jpg",
  engines: [
      "60 TFSI e quattro - 462 KM (Hybrid)"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a8/a8-tfsi-e/pakiety.html"
},
{
  model: "A8 L",
  brand: "Audi",
  description:
  "Cena od 462 200 PLN",
  imageurl: "https://www.auto-motor-i-sport.pl/media/lib/2764/a1c11662-2020-audi-a8-l-60-tfsi-e-quattro-12.jpg",
  engines: [
      "55 TFSI quattro - 286 KM",
      "60 TFSI quattro - 340 KM",
      "50 TDI quattro - 460 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a8/a8-l/pakiety.html"
},
{
  model: "A8 L TFSI e",
  brand: "Audi",
  description:
  "Cena od 527 300 PLN",
  imageurl: "https://bi.im-g.pl/im/c8/25/18/z25319880V,Audi-A8-L-60-TFSI-e-quattro.jpg",
  engines: [
      "60 TFSI e quattro - 462 KM (Hybrid)"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a8/a8-l-tfsi-e/pakiety.html"
},
{
  model: "S8 TFSI",
  brand: "Audi",
  description:
  "Cena od 630 200 PLN",
  imageurl: "https://f.magazynauto.pl/magazynauto_prod_2021_05/thumb-article-1066-tmain.jpg?v=3e9d6c1ced8aaa516c2a6b02df6467d6",
  engines: [
      " TFSI quattro - 571 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/a8/s8/pakiety.html"
},
{
  model: "Q2",
  brand: "Audi",
  description:
  "Cena od 118 900 PLN",
  imageurl: "https://motofilm.pl/wp-content/uploads/2022/02/xAudi-Q2-1.jpg.pagespeed.ic.pHzstKKTxg.jpg",
  engines: [
      "30 TFSI - 110 KM",
      "35 TFSI - 150 KM",
      "40 TFSI (quattro) - 190 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q2/nowe-q2/pakiety.html"
},
{
  model: "Q3",
  brand: "Audi",
  description:
  "Cena od 144 900 PLN",
  imageurl: "https://www.wyborkierowcow.pl/wp-content/uploads/2020/01/audi-q3-sportback-45-tfsi-test-2020-prz%C3%B3d-00.jpg",
  engines: [
      "35 TFSI - 150 KM",
      "40 TFSI (quattro) - 190 KM",
      "45 TFSI (quattro) - 245 KM",
      "35 TDI - 150 KM",
      "40 TDI (quattro) - 200 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q3/q3/pakiety.html"
},
{
  model: "Q3 TFSI e",
  brand: "Audi",
  description:
  "Cena od 204 300 PLN",
  imageurl: "https://automacha.com/wp-content/uploads/2020/12/A209361_overfull-1024x684.jpg",
  engines: [
      "45 TFSI e - 245 KM (Hybrid)"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q3/q3-tfsi-e/pakiety.html"
},
{
  model: "Q3 Sportback",
  brand: "Audi",
  description:
  "Cena od 152 900 PLN",
  imageurl: "https://www.wyborkierowcow.pl/wp-content/uploads/2020/01/audi-q3-sportback-45-tfsi-test-2020.jpg",
  engines: [
      "35 TFSI - 150 KM",
      "40 TFSI (quattro) - 190 KM",
      "45 TFSI (quattro) - 245 KM",
      "35 TDI - 150 KM",
      "40 TDI (quattro) - 200 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q3/q3-sportback/pakiety.html"
},
{
  model: "Q3 Sportback TFSI e",
  brand: "Audi",
  description:
  "Cena od 212 300 PLN",
  imageurl: "https://www.freedofollow.com/sites/default/files/images/audi-q3-sportback-tfsi-plug-in-hybrid-suv-2021-01.jpg",
  engines: [
      "45 TFSI e - 245 KM (Hybrid)"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q3/q3-sportback-tfsi-e/pakiety.html"
},
{
  model: "RS Q3",
  brand: "Audi",
  description:
  "Cena od 290 900 PLN",
  imageurl: "https://s-trojmiasto.pl/zdj/c/n/9/2607/3000x0/2607647.jpg",
  engines: [
      "TFSI quattro - 400 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q3/nowe-rs-q3/pakiety.html"
},
{
  model: "RS Q3 Sportback",
  brand: "Audi",
  description:
  "Cena od 298 900 PLN",
  imageurl: "https://www.wyborkierowcow.pl/wp-content/uploads/2021/08/audi-rsq3-abt-2.jpg",
  engines: [
      "TFSI quattro - 400 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q3/nowe-rs-q3-sportback/pakiety.html"
},
{
  model: "Q4 e-tron",
  brand: "Audi",
  description:
  "Cena od 198 400 PLN",
  imageurl: "https://www.autogen.pl/news/2019/q4etron1.jpg",
  engines: [
      "35 e-tron - 125 kW / 170 KM",
      "40 e-tron - 150 kW / 204 KM",
      "45 e-tron - 195 kW / 265 KM",
      "50 e-tron - 220 kW / 299 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q4-e-tron/audi-q4-e-tron/pakiety.html"
},

{
  model: "Q4 Sportback e-tron",
  brand: "Audi",
  description:
  "Cena od 209 700 PLN",
  imageurl: "https://ocdn.eu/images/pulscms/YzM7MDA_/305a59aa13caa282d1de1b70dca62e5f.jpg",
  engines: [
      "35 e-tron - 125 kW / 170 KM",
      "40 e-tron - 150 kW / 204 KM",
      "45 e-tron - 195 kW / 265 KM",
      "50 e-tron - 220 kW / 299 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q4-e-tron/audi-q4-e-tron-sportback/pakiety.html"
},
{
  model: "Q5",
  brand: "Audi",
  description:
  "Cena od 198 800 PLN",
  imageurl: "https://www.autogen.pl/news/2019/q4etron1.jpg",
  engines: [
"45 TFSI (quattro) - 265 KM",
      "35 TDI - 163 KM",
      "40 TDI (quattro) - 204 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q5/nowe-q5/pakiety.html"
},
{
  model: "Q5 TFSI e",
  brand: "Audi",
  description:
  "Cena od 249 600 PLN",
  imageurl: "https://i.ytimg.com/vi/Uhs-BrexHMA/maxresdefault.jpg",
  engines: [
      "35 e-tron - 125 kW / 170 KM",
      "40 e-tron - 150 kW / 204 KM",
      "45 e-tron - 195 kW / 265 KM",
      "50 e-tron - 220 kW / 299 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q5/q5-tfsi-e"
},
{
  model: "Q5 Sportback",
  brand: "Audi",
  description:
  "Cena od 214 500 PLN",
  imageurl: "https://www.autogen.pl/news/2019/q4etron1.jpg",
  engines: [
"45 TFSI (quattro) - 265 KM",
      "35 TDI - 163 KM",
      "40 TDI (quattro) - 204 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q5/nowe-q5-sportback/pakiety.html"
},
{
  model: "Q5 Sportback TFSI e",
  brand: "Audi",
  description:
  "Cena od 265 300 PLN",
  imageurl: "https://overdrive.com.pl/wp-content/gallery/audi-q5-sportback-tfsi-e-quattro-1/a210891_large.jpg",
  engines: [
      "35 e-tron - 125 kW / 170 KM",
      "40 e-tron - 150 kW / 204 KM",
      "45 e-tron - 195 kW / 265 KM",
      "50 e-tron - 220 kW / 299 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q5/q5-sportback-tfsi-e/pakiety.html"
},
{
  model: "SQ5",
  brand: "Audi",
  description:
  "Cena od 358 100 PLN",
  imageurl: "https://www.wyborkierowcow.pl/wp-content/uploads/2020/11/audi-sq5-fl-otwarcie.jpg",
  engines: [
      "TDI quattro - 341 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q5/nowe-sq5/pakiety.html"
},
{
  model: "SQ5 Sportback",
  brand: "Audi",
  description:
  "Cena od 370 400 PLN",
  imageurl: "https://www.tapeciarnia.pl/tapety/normalne/tapeta-audi-sq5-sportback.jpg",
  engines: [
      "TDI quattro - 341 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q5/nowe-sq5-sportback/pakiety.html"
},
{
  model: "Q7",
  brand: "Audi",
  description:
  "Cena od 319 200 PLN",
  imageurl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-q7-205-1584322591.jpg?crop=0.997xw:0.748xh;0.00160xw,0.0913xh&resize=1200:*",
  engines: [
"55 TFSI quattro - 340 KM",
"45 TDI quattro - 231 KM",
"50 TDI quattro - 340 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q7/q7/pakiety.html"
},
{
  model: "Q7 TFSI e",
  brand: "Audi",
  description:
  "Cena od 334 100 PLN",
  imageurl: "https://www.audi.pl/content/dam/nemo/models/q7/q7-tfsi-e/my-2020/1920x1080-inline-media-gallery/1920x1080_AQ7_TFSIe_191007_RGB.jpg",
  engines: [
"55 TFSI e quattro - 381 KM",
      "60 TFSI e quattro - 462 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q7/q7-tfsi-e/pakiety.html"
},
{
  model: "SQ7",
  brand: "Audi",
  description:
  "Cena od 476 800 PLN",
  imageurl: "https://wrc.net.pl/app/uploads/2019/12/audi-sq7-by-abt-2.jpg",
  engines: [
"TFSI quattro - 507 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q7/nowe-sq7/pakiety.html"
},
{
  model: "Q8",
  brand: "Audi",
  description:
  "Cena od 359 300 PLN",
  imageurl: "https://www.hankooktire-mediacenter.com/fileadmin/user_upload_DL/MediaCenter/pressreleases/2019/09/20190918_Audi_Q8/img/20190912_Hankook_as_original_equipment_on_Audi_s_Q8_model_series_01.jpg",
  engines: [
"55 TFSI quattro - 340 KM",
"45 TDI quattro - 231 KM",
"50 TDI quattro - 340 KM",
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q8/q8/pakiety.html"
},
{
  model: "Q8 TFSI e",
  brand: "Audi",
  description:
  "Cena od 409 300 PLN",
  imageurl: "https://www.automobilsport.com/uploads/_neustart36/14-9-2020/A206976_small.jpg",
  engines: [
"55 TFSI e quattro - 381 KM",
"60 TDI e quattro - 462 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q8/q8-tfsi-e/pakiety.html"
},
{
  model: "SQ8",
  brand: "Audi",
  description:
  "Cena od 505 600 PLN",
  imageurl: "https://i.ytimg.com/vi/cO5FkSUpqTA/maxresdefault.jpg",
  engines: [
"TFSI quattro - 507 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q8/sq8/pakiety.html"
},
{
  model: "RSQ8",
  brand: "Audi",
  description:
  "Cena od 657 900 PLN",
  imageurl: "https://fazicars.pl/wp-content/uploads/2021/04/1J7A0968-scaled.jpg",
  engines: [
    "TFSI quattro - 600 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/q8/nowe-rs-q8/pakiety.html"
},
{
  model: "R8 Coupé V10 performance quattro",
  brand: "Audi",
  description:
  "Cena od 993 500 PLN",
  imageurl: "https://www.audi.pl/content/dam/nemo/models/r8/r8-coupe-v10-performance/my-2019/1920x1080-inline-media-gallery/1920x1080_AR8_181009.jpg",
  engines: [
"V10 FSI quattro - 620 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/r8/r8-coupe-v10-performance-quattro/pakiety.html"
},
  {
  model: "R8 Coupé V10 performance RWD",
  brand: "Audi",
  description:
  "Cena od 738 500 PLN",
  imageurl: "https://cdn.drivek.it/configurator-covermobile/cars/gb/768/AUDI/R8/38521_COUPE-2-DOORS/audi-r8-coupe-2018-mobile-cover.jpg",
  engines: [
"V10 FSI - 570 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/r8/r8-coupe-v10-performance-rwd/pakiety.html"
},
{
  model: "R8 Spyder V10 performance quattro",
  brand: "Audi",
  description:
  "Cena od 1 120 800 PLN",
  imageurl: "https://audimediacenter-a.akamaihd.net/system/production/media/69449/images/8f9b2844b4ddfaddcd27b463a11afd81dd35beb8/A1812858_full.jpg?1582462392",
  engines: [
    "V10 FSI quattro - 620 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/r8/r8-spyder-v10-performance-quattro/pakiety.html"
},
{
  model: "R8 Spyder V10 Performace RWD",
  brand: "Audi",
  description:
  "Cena od 865 900 PLN",
  imageurl: "https://motofilm.pl/wp-content/uploads/2021/10/xAudi-R8-V10-Performance-RWD-Coupe-1.jpg.pagespeed.ic.5L2laQdN7u.jpg",
  engines: [
    "V10 FSI - 570 KM"
    ],
    konfig: "https://www.audi.pl/pl/web/pl/modele/r8/r8-spyder-v10-performance-rwd/pakiety.html"
}
  ];

const HomePage = () => {
  const [searchWord, setSearchWord] = useState();

  /// 1. funkcja filtrująca filmy
  /// 2. jeżeli searchWord istnieje to przekazujemy do Catalog wyfiltrowaną tablicę filmów
  /// a jeżeli nie istnieje to przekazujemy do Catalog allMovies

  const cars = searchWord ? carFilter(listOfModels, searchWord) : listOfModels;

  const saveUserWord = (data) => {
    setSearchWord(data);
  };


  return (
    <>
      <Container>
        <Header title={myTitle} />
        <SearchBar getUserWordFunc={saveUserWord} />
        <Catalog cars={cars} />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
