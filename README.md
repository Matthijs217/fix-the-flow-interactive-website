# Fix the flow

# Drop en Heal | Sprint 5
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Drop en heal is een website die de rouwverwerking van de mensen tussen 18-26 jaar gaat verbeteren. Deze sprint is er gekeken naar 2 interacties op de website naar aanleiding van vorige sprint is er ook gekeken naar wat interacties en wat responsive problemen.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
De website kent heel wat pagina's gemaakt met HMTL, CSS en een klein beetje JavaScript. 
![image](https://github.com/user-attachments/assets/21b4cf29-7c64-4545-903e-550ceecebbd9)

Als je wilt wisselen van rouwtaak kan dat bij het pijltje rechtsbovenin. Ik heb ervoor gekomen om er geen label bij te zetten om dat ik dat er mooier uit vond zien en de gebruikers in de "onboarding" al uitleg kregen wat de verschillende rouwtaken zijn. Ik heb er voor gezorgd dat het pijltje uitklapbaar is als feedback voor de gebruiker. Hij klapt 180graden uit om te laten zien dat je de header hebt geopend. 
![image](https://github.com/user-attachments/assets/aaf209ce-29a6-4bbd-9790-a531706a62c5)

Daarnaast heb ik nog een popup gemaakt voor de **Community Drops**. Dat is een kopje wat mensen kunnen openen om een soort review achter te laten hoe ze deze specifieke opdracht hebben ervaren. Hiermee kan de gebruiker op dit moment dus eerder overgehaald worden om de opdracht toch te doen als hij/zij er tegen op keek. Je ziet dat als je er over heen hoverd dat je dan een cursor krijgt en dat de kleur veranderd. Dit laat zien dat je er op kan klikken. Als je geklikt hebt zal de popup in beeld verschijnen en vult het scherm zich met de content. De achtergrond blijft wazig en zwart. Als je weer terug wilt druk je op het pijltje linksboven om terug te gaan:
![image](https://github.com/user-attachments/assets/03e4796b-d29c-4478-a9cc-6c87506f2239)
![image](https://github.com/user-attachments/assets/f432c4df-98ee-498c-ba5e-55552a17ef20)

Hier kan je de website zelf bekijken: https://matthijs217.github.io/look-and-feel-corporate-identity/main-page/main-page-een.html

## Kenmerken

**CSS**

- Ik heb gebruik gemaakt van een viewtransition API, geleerd bij de css challenges.
https://github.com/Matthijs217/fix-the-flow-interactive-website/blob/main/styles/main-page.css#L12-L40C1

- (weinig) Gebruik gemaakt van nesting in CSS en van hover states
https://github.com/Matthijs217/fix-the-flow-interactive-website/blob/main/styles/main-page.css#L433-L453

- Mijn popup word flex als hij tevoorschijnt komt, dit word daarna via javascript geregeld
https://github.com/Matthijs217/fix-the-flow-interactive-website/blob/main/styles/main-page.css#L329-L346
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De kenmerken van de website bestaan uit HTML, CSS en JavaScript. Ik heb de 2e header die tervoorschijn komt als je op het pijltje klikt gemaakt met een nieuwe class. Javascript veranderd de header class die er nu staan en vervangt hem zodat hij word "uitgeklapt". Als je weer terug gaat verwijderd hij hem weer.

**JavaScript**

- Bij de popup heb ik ervoor gekozen om alles op hidden te zetten. Als hij word geopend dan zal het een nieuwe display flex krijgen.
https://github.com/Matthijs217/fix-the-flow-interactive-website/blob/main/scripts/main-page.js#L44-L46

- Daarnaast heb ik met javascript ook nog geleerd om een viewtransition toe te voegen op beide interacties wat feedback was vanuit de opdrachtgever en vanuit medestudenten en docenten. Ik heb dit dus mooi kunnen oplossen met de viewtransition API die ik net had geleerd. Hierdoor fade de animatie in, ipv dat hij heel snel tevoorschijn komt.
https://github.com/Matthijs217/fix-the-flow-interactive-website/blob/main/scripts/main-page.js#L35-L38

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
