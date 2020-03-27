# my co:radar

my co:radar - anonym. solidarisch. sicher.

<img src="https://github.com/generaliinformatik/mycoradar/raw/master/docs/images/logo_small.png" alt="logo_small" width="100%"/>

Eine innovative Lösung für den solidarischen Schutz unserer Gemeinschaft. Anonyme Nutzung sichergestellt und sicher für Deine Gesundheit.

## Entwicklungsstand (development status)

Prototyp, Alpha

## Zweck

Es wurde im Rahmen des Hackathon #WirVsVirus in 2020 eine Lösung entwickelt, die bei der Eindämmung der Krankheit COVID-19 unterstützt.

Die Lösung unterstützt Anwender dabei, ihre physischen Kontakte im Blick zu behalten und bei einer Infektion mit COVID-19 sich und andere rechtzeitig zu informieren. Ziel ist die frühzeitige Unterbrechung der Infektionskette und die Eindämmung der Verbreitung von SARS-CoV-2, damit unser Gesundheitssystem den Kollaps übersteht. Der Einsatz erfolgt dabei konform unter den Aspekten des Datenschutzes (GDPR/EU-DSGVO).

## Unsere Idee

Unsere Lösung ermittelt über eindeutige Kennungen von Smartphones, ob sich ein Anwender gemäß den Richtwerten des [Robert-Koch-Instituts (RKI)](https://www.rki.de/) zu lange und zu dicht bei einer mit SARS-CoV-2 infizierten Person aufgehalten hat.

Hierzu prüft die Lösung gemäß der Empfehlung folgende Bedingungen:

- mindestens zwei Meter Abstand zu anderen Personen halten und
- nicht länger als 15 Minuten in der Nähe von infizierten Personen aufhalten.

Ansonsten könnte die Möglichkeit einer Ansteckung für den Anwender bestehen.

Hinweis: Sollte ein zuvor positiv getesteter Anwender wieder genesen, kann der Status durch den Benutzer wieder zurückgesetzt werden, so dass keine fehlerhafte Benachrichtigung zu späteren Zeitpunkten erfolgt.

![risk](docs/images/contactrisk.png)

## Technische Umsetzung

Mit der von uns vorgesehenen Lösung werden von dem eigenen Gerät alle Geräte in der Umgebung protokolliert. Die IDs werden über Bluetooth ermittelt und als anonyme Kennzeichnung lokal gespeichert.

Von einem zentralen Server-Dienst werden Geräte-IDs von positiv getesteten Nutzern gelesen und der Anwender wird vor einer potentiellen Ansteckung gewarnt, um so die Infektionskette zu unterbrechen.

Wird eine ID erst zu einem späteren Zeitpunkt als infektiös markiert, werden alle früher mit dieser ID in Kontakt stehenden Anwender informiert. Diese Information erfolgt durch eine client-seitige Synchronisierung der Liste mit der als infektiös bekannten IDs.

![Architektur](docs/images/architecture.png)

Meldet ein Anwender sich selber als infektiös, wird seine ID an den Server übertragen und alle mit ihm in Kontakt gestandenen Anwender über den zuvor beschriebenen Mechanismus informiert.

## Implementierte Features

- Erfassung einer eindeutigen anonymen ID des Geräts
- keine Erfassung von personengebundenen Informationen
- Übertragung der Informationen über verschlüsselte Protokolle (in Arbeit)
- ...

(Noch nicht implementierte Features werden im Abschnitt "Ausblick" für weitere Ausbaustufen nach dem Hackathon beschrieben)

## Technische Voraussetzung

### Komponenten

#### Client

- mindestens zwei **Smartphones** (derzeit [Android](https://www.android.com/))
- **Einsatz der Anwendung "my co:radar"** auf den betroffenen Endgeräten (eine Erfassung der Geräte-IDs ist mit einem Endgerät möglich, jedoch ist die Erfassung und Auswertung einer Statusänderung nur mit einem zweiten Gerät sinnvoll - ohne in die Datenhaltung eingreifen zu müssen).

#### Server

- Server per Internet erreichbar
- [Docker](https://www.docker.com)
- Einsatz der **Backend-Komponente** für den Austausch der als infektiös identifizierten Anwender (Docker Image)
- **Internet-Verbindung** zur Datensynchronisierung

#### Programmiersprachen, Frameworks etc.

- [Angular](https://angular.io)
- [Springboot](https://spring.io/)
- REST
- [JSON](https://www.json.org/)
- [Docker](https://www.docker.com)

## Datenschutz

Die Lösung ermittelt eine eindeutige ID des Geräts, **anonymisiert** diese und nutzt diese anonymisierte Information zum Abgleich der Daten von anderen Geräten.

Die Verarbeitung der Daten erfolgt vorrangig auf dem **lokalen Endgerät** des Benutzers. Alle im Umfeld des Benutzers identifizierten Geräte-IDs, **die den Bedingungen für eine potentielle Infektion entsprechen(!!!)**, werden **anonymisiert verarbeitet und lokal gespeichert**.

In regelmäßigen Abständen erfolgt eine Synchronisierung mit der Server-Komponente, um eine Liste mit (ebenfalls anonymisierten) Geräte-IDs zu ermitteln. Bei den IDs handelt es sich um Kennungen von Geräten, deren Benutzer positiv getestet worden sind. Kann zwischen dieser Liste und den lokal gespeicherten Daten eine **Übereinstimmung gefunden werden, wird dem Anwender eine Hinweismeldung mit Handlungsempfehlungen angezeigt**. Es erfolgt **keine Anzeige von Geräten-IDs oder dem Standort von Geräten Dritter!**

Die Speicherung von Geräte-IDs auf dem lokalen Gerät ist auf **maximal 20 Tage** (angenommene Inkubationszeit plus Karenz) begrenzt. Eine erneute Begegnung unter den Bedingungen setzt den Zeitstempel auf das aktuelle Begegnungsdatum zurück.

Wird der Status eines anderen Anwenders von vormals "infektiös" auf "genesen" (nicht mehr infektiös) geändert, wird der **Eintrag in der zentralen Datenhaltung bei der nächsten Synchronisierung entfernt**. Dieser Status wird beim nächsten Abgleich der Geräte lokal aktualisiert, eine erneute Benachrichtigung wird damit unterbunden.

Durch die Verarbeitung der Geräte-IDs in anonymisierter Form kann weder der Anwender noch der Server-Betreiber eine Verbindung zwischen Gerät (entspricht in vielen Fällen dem Nutzer) und der verarbeiteten Kennung herstellen. Hinweis: Für einen produktiven Einsatz ist das Verschlüsselungsverfahren und die Verarbeitung zu prüfen und durch den Datenschutzbeauftragten zu bestätigen!

## Ausblick

Die Anwendung ist als Prototyp im Rahmen des Hackathon entstanden und unter einer freien Lizenz veröffentlicht. Die Idee bzw. der technische Implementierungsansatz kann beliebig verwendet werden. Eine Weiterentwicklung nach dem Hackathon ist im Rahmen des privaten Engagements der Teilnehmer beabsichtigt. Eine Mitwirkung durch Dritte ist willkommen. Wir freuen uns über Forks und Weiterentwicklungen im Rahmen von Pull Requests.

## nicht implementierte Funktionen

- Löschen von Kennungen inklusive Synchronisiation umsetzen
- Prüfung der Verschlüsselung und der Verarbeitung durch den Datenschutzbeauftragten
- ...

## Deine Mitwirkung

Bitte lese [CONTRIBUTING.md](CONTRIBUTING.md) für Einzelheiten über unseren Verhaltenskodex und das Verfahren zur Einreichung von Pull-Anfragen an uns.

## Versionierung

Wir nutzen [SemVer](http://semver.org/) für die Vergabe von Versionsnummern. Für die verfügbaren Versionen schaue bitte [Tags für dieses Repository](https://github.com/generaliinformatik/mycoradar/tags).

## Autoren

- **Sarah** - *Orga, Marketing, Video, Landingpage* - tba
- **Desiree** - *Frontend* - [DeSy96](https://github.com/DeSy96)
- **Marianne** - *Backend* - tba
- **Iris** - *Konzeption, Test* - tba
- **Anna** - *UX, Marketing, Landingpage* - tba
- **René** - *Github Admin, Video, Kommunikations-Host* - [rfuehrer](https://github.com/rfuehrfer)
- **Michael** - *Frontend* - [workminimizer-michael](https://github.com/workminimizer-michael)
- **Niko** - *Backend* - [nikomall34](https://github.com/nikomall34)
- **Oliver** - *Backend* - tba
- **Claus** - *Konzeption, Feedback* - tba
- **Stephan** - *Konzeption, Marketing, Feedback* - tba
- **Stefan** - *Konzeption, Pitch, Feedback* - tba
- **Björn** - *Konzeption, Feedback* - [BjoernSchotte](https://github.com/BjoernSchotte)

Schaue auch gerne auf die Liste der [Mitwirkenden](https://github.com/generaliinformatik/mycoradar/contributors), die an dem Projekt bisher mitgewirkt haben.

## Lizenz

Dieses Projekt ist unter MIT Lizenz lizensiert - schaue bitte in die [LICENSE.md](LICENSE.md) für mehr Details.

Bemerkung: Für uns steht es außer Frage, dass wir das Ergebnis eines Hackathons unter einer Open Source-Lizenz MIT veröffentlichen. Wir möchten mit der Bereitstellung helfen, diese Pandemie als Menschheit **gemeinsam** zu bekämpfen. Eine gemeinsame Entwicklung von geeigneten Mitteln darf nicht in der Hand einzelner oder weniger liegen. Bitte **unterstützt dieses Projekt** und beteiligt Euch an einer Weiterentwicklung.

Eine Unterstützung kann als eigene Entwicklung erfolgen, dennoch bitten wir um eine Entwicklung über einen Fork mittels Branches und Pull Requests in diesen Upstream.

## Bemerkungen

tba...
