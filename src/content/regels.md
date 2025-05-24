---
title: 'De Regels'
description: 'Op Zondag 13 April kwamen Boeliebot bestuurders uit het hele land samen in Groningen. In het Forum. 28 bots, 13 prijzen, 63 wedstrijden, 1 doel!'
pubDate: '2025-05-24'
---

## De verschillende klassen
Bij de boeliebots hebben we drie klassen, deze zijn gebaseerd op de 2024 standaard voor (UK) antweight die ook door andere roboteers in Nederland worden aangehouden.   
In elke klasse krijgt de top 3 een prijs, daarnaast is er nu ook het originaliteitsklassement met ook 3 prijzen.

**Instap** is het meest beperkt en daardoor makkelijker om mee te beginnen. Alleen standaard componenten voor de electronica en wielen. Optioneel mag een wapen alleen met een servo bediend worden.   
**Plastic ant** is de volgende stap. Hier mogen ook draaiende wapens met meer restricties voor materiaal aan de buitenkant. Een specifieke lijst met plastics, dit om de schade en kosten te beperken.   
**Ant** is de meest vrije klasse, dit is onze smaak van de internationaal gebruikelijke regels.   
  
Meer over specifieke technische regels per klasse vind je in het [[battlebots_regels|het reglement]].  



### Instap klasse
  * maximaal 10x10x10cm (standaard regel)
  * maximaal 150 gram
  * geen volledig draaiende wapens; Servo's die < 360 graden draaien zijn wel toegestaan. (Boeliebot instap klasse specifiek)
  * geen extern metaal voor de structurele integriteit of bepantsering.
  * standaard hardware (Boeliebot instap klasse specifiek), dus allemaal dezelfde wielen, motoren, ontvanger, accu en motor controller.
  * We weten dat grenzen van regels opzoeken leuk is. We willen je vragen in deze klasse in de geest van de [[battlebots_regels|regels]] mee te doen. Als je dit niet doet kun je geweigerd of gediskwalificeerd worden. Neem vooraf [contact](mailto:boeliebots@maakplek.nl) op als je niet zeker weet of jouw robot aan de bovenstaande definitie voldoet.

#### standaard hardware voor de instapklasse
Om de competitie in deze instapklasse zo eerlijk en budgetvriendelijk mogelijk te maken gebruiken we allemaal een standaard kitje met onderdelen. Je kunt hier natuurlijk van afwijken, maar dan kom je daardoor in een andere klasse terecht.

(Gewicht en afmeting zijn snel gemeten, sub-mm preciezie mag je zelf meten als je het spul in de hand hebt):

| Item                                   | Gewicht    | Afmetingen                                               | Link                                                                                                                                                                                                                     |
|---------------------------------------- |------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2 Motoren                              | 10 gram    | 24x12x10mm zonder as (10mm extra)                        | [N20, 6volt, 500rpm](https://www.aliexpress.com/item/33022320164.html)                                                                                                            |
| Ontvanger                              | 2,5 gram   | 12x12x40mm                                               | [4 kanaals ontvanger: FS2A 4CH AFHDS](https://www.aliexpress.com/item/1005004900977069.html)                                                                                      |
| Accu                                   | 25 gram    | 52x20x15mm                                               | [7,4V (2S) 600maH](https://www.aliexpress.com/item/1005005760426036.html)                                                                                                         |
| Wiel                                   | 4,5 gram   | d=33,6 dikte 6,7 flensdikte= 8,7                         | [past precies op as van N20 motor](https://www.aliexpress.com/item/1005006117105238.html)                                                                                         |
| Schakelaar                             | ?          | gatafstand 15mm, lengte 19mm, schuiflengte 6mm, dikte 6mm, lengte "pieleteje" 6mm | [Simpel schuifschakelaartje](https://www.aliexpress.com/item/32812689209.html)                                                                                                    |
| Regelaar                               | 12 gram    | 50x20x10mm                                               | [Dubbele 3S Electronic Speed Controller](https://www.aliexpress.com/item/1005004609003005.html)                                                                                   |
| Optioneel: Servo SG90, MG90 of MG90S    | ?? gram    | ?x?x?mm (Let op, SG90 heeft een andere maat) <br> [STL](https://gitlab.com/KlaasYK/knokbots-parts/-/blob/12d08ba7a5b9c9b18254cf80336f1f14670d7e51/parts/MG90S_Servo.stl) [STEP](https://gitlab.com/KlaasYK/knokbots-parts/-/blob/12d08ba7a5b9c9b18254cf80336f1f14670d7e51/parts/MG90S_Servo.step) | [MG90S](https://nl.aliexpress.com/item/4000903254039.html) |

Als zender is de [[https://nl.aliexpress.com/item/1005006102515851.html|FlySky FS-i6x]] aan te raden, hierin is een hoop in te stellen om rijgedrag te beinvloeden en je hebt meer kanalen om wapens etc te besturen. Je kunt ook overleggen of je een zender met iemand kunt delen. Deze zenders kunnen meerdere "profielen" voor meerdere robots bewaren, dus praktisch zou dat goed te doen moeten zijn. Deze zenders zitten niet in "de kit" want als je er meerdere tegelijk koopt krijg je minder korting.

### Plastic ant klasse
In deze plastic ant klasse zijn alleen specifieke materialen als constructiemateriaal van de robot toegestaan. Niet-plastic onderdelen zoals motoren, electronica, assen, bevestigingsmateriaal en lijm mogen van willekeurig materiaal zijn maar mogen niet gebruikt worden voor de structurele integriteit, bepantsering of verbeteren van een wapen. De keuze van electronica is vrij.

  * Onder andere toegestane materialen:
    * PET, PETG, ABS, ASA, PLA, PLA+, LW-PLA, hout, spons, papier, karton. 
  * Niet toegestane materialen zijn onder andere metaal, UHMW en onderdelen van een composiet materiaal of vezelversterkt filament.
  * maximaal 10x10x10cm, groter uitvouwen mag als dat via de zender kan worden gestuurd.
  * maximaal 150 gram voor een rijdende robot, 225 gram als je op een andere manier beweegt
  * de robot en wapen moeten veilig en zonder gereedschap uit te zetten zijn in geval van nood
  * [[https://www.youtube.com/watch?v=4DGZOaQOzJU|Failsafe functie]] van ontvanger moet ingesteld zijn en alle motoren en servo's stoppen.
  * __Niet toegestane wapens volgens standaard antweight reglement:__ 
    * Lijm of kleef  wapens
    * vloeistof wapens (sproeiers, etc.)
    * draden of netten om te verstrikken
    * wapens met vuur
    * electriciteit als wapen (tesla coil etc.) 
    * explosieve wapens 
    * ronddraaiende wapens die bedoeld zijn uit elkaar spatten 
    * Magnetische / inductieve systemen 
  * Boeliebot specifiek worden er geen Gas of vloeistof aangedreven wapens toegestaan
  * We weten dat grenzen van regels opzoeken leuk is. We willen je vragen in deze klasse in de geest van de [[battlebots_regels|regels]] mee te doen. Als je dit niet doet kun je geweigerd of gediskwalificeerd worden. Neem vooraf [contact](mailto:boeliebots@maakplek.nl) op als je niet zeker weet of jouw robot aan de bovenstaande definitie voldoet.

### Ant klasse
In deze vrije ant klasse mag je zelf kiezen welke materialen en electronica je gebruikt.

  * maximaal 10x10x10cm, groter uitvouwen mag als dat via de zender kan worden gestuurd.
  * maximaal 150 gram voor een rijdende robot, 225 gram als je op een andere manier beweegt
  * de robot en wapen moeten veilig en zonder gereedschap uit te zetten zijn in geval van nood
  * [[https://www.youtube.com/watch?v=4DGZOaQOzJU|Failsafe functie]] van ontvanger moet ingesteld zijn en alle motoren en servo's stoppen.

  * __Niet toegestane wapens volgens standaard antweight reglement:__ 
    * Lijm of kleef  wapens
    * vloeistof wapens (sproeiers, etc.)
    * draden of netten om te verstrikken
    * wapens met vuur
    * electriciteit als wapen (tesla coil etc.) 
    * explosieve wapens 
    * ronddraaiende wapens die bedoeld zijn uit elkaar te spatten
    * Magnetische / inductieve systemen 
  * Boeliebot specifiek worden er geen Gas of vloeistof aangedreven wapens toegestaan
  * We weten dat grenzen van regels opzoeken leuk is. We willen je vragen in deze klasse in de geest van de [[battlebots_regels|regels]] mee te doen. Als je dit niet doet kun je geweigerd of gediskwalificeerd worden. Neem vooraf [contact](mailto:boeliebots@maakplek.nl) op als je niet zeker weet of jouw robot aan de bovenstaande definitie voldoet.

**Internationaal zijn er diverse klassen. Wij gebruiken als basis de Ant weight klasse zoals deze in Europa en Australië gebruikt wordt. De VS hebben een andere standaard voor Ant weight, die is zwaarder. Let hier dus op als je online naar inspiratie gaat zoeken.**

## De Arena
De arena is 1x1x1 meter met een houten MDF bodem en lexaan omkisting. In een van de vier hoeken van de bodem is een hoek weggehaald, dit is de pit waarin je een tegenstander kunt duwen om hem uit te schakelen. 