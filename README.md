# my co:radar

anonymous. solidary. safe.

<img src="https://github.com/generaliinformatik/mycoradar/raw/master/docs/images/logo_small.png" alt="logo_small" width="100%"/>

[Deutsch](README_de.md)

An innovative solution for the solidary protection of our community from COVID-19. Anonymous use guaranteed and safe for your health.

## Development status

Prototype, Alpha

## Purpose

As part of the Hackathon [#WirVsVirus](https://wirvsvirushackathon.org) in 2020, this solution was developed to help control the disease COVID-19.

The solution helps users to keep track of their physical contacts and to inform themselves and others in time in case of an infection with COVID-19. The goal is to interrupt the chain of infection at an early stage and reduce the spread of SARS-CoV-2 so that the healthcare systems can withstand the collapse. The use of this solution complies with the aspects of European data protection (GDPR/EU-DSGVO).

## Our idea

Our solution uses unique identifiers from smartphones to determine whether a user has spent too long and too close to a person infected with SARS-CoV-2 according to the guidelines of the [Robert Koch Institute (RKI)](https://www.rki.de/).

For this purpose, the solution checks the following conditions according to the recommendation:

- keep a distance of **at least two metres** to other people    and
- do not stay near infected persons for more than **15 minutes**.

Otherwise there is a possibility of infection for the user.

Note: If a previously positive tested user recovers, the status can be reset by the user, so that no incorrect notification is sent at a later time.

![risk](docs/images/contactrisk.png)

## Technical implementation

With the solution we provide, all devices in the environment are logged by your own device. The IDs are determined via Bluetooth and stored locally as anonymous identification.

From a central server, device IDs of positively tested users are read and the user is warned of a potential infection, thus breaking the chain of infection.

If an ID is only marked as infectious at a later date, all users previously in contact with this ID are informed. This information is provided by client-side synchronization of the list with the IDs known to be infectious.

[Architecture](docs/images/architecture.png)

If a user reports himself as infectious, his ID (only this information!) is transmitted to the server and all users in contact with him are informed via the mechanism described above.

## Implemented features

- Acquisition of a unique anonymous ID of the device
- No collection of personal information
- Transmission of information via encrypted protocols (in progress)
- ...

(Features not yet implemented will be described in the "Perspectives" section for further expansion stages after the hackathon)

## Technical requirements

### Components

#### Client

- at least two **smartphones** (currently [Android](https://www.android.com/))
- **Use of the "my co:radar "** application on the affected devices (recording of device IDs is possible with one device, but recording and evaluation of a status change only makes sense with a second device - without having to intervene in the data management)
- **activated Bluetooth** (on all devices)

#### Server

- Server accessible via Internet
- [Docker](https://www.docker.com)
- Use of the **backend component** for the exchange of users identified as infectious (see Docker mage)
- **Internet connection** for data synchronization

#### Programming languages, frameworks etc.

- [Angular](https://angular.io)
- [Springboat](https://spring.io/)
- REST
- [JSON](https://www.json.org/)
- [Docker](https://www.docker.com)

## Privacy

The solution determines a unique ID of the device via Bluetooth (BLE), **anonymizes** it and uses this anonymized information to match data from other devices.

The data is processed primarily on the user's **local device**. All device IDs identified in the user's environment, which meet the conditions for a **potential infection**, are processed **anonymized and stored locally**.

A synchronization with the server component takes place at regular intervals to determine a list of (also anonymized) device IDs. The IDs are identifiers of devices whose users have tested positive. If a **match can be found between this list and the locally stored data, the user is shown a message with recommendations for action**. There is **no display of device IDs or the location of third-party devices!

The storage of device IDs on the local device is limited to a **maximum of 20 days** (assumed incubation period plus grace period). A new encounter under these conditions resets the time stamp to the current encounter date.

If the status of another user is changed from previously "infectious" to "recovered" (aka no longer infectious), the **entry in the central data storage is removed during the next synchronization**. This status will be updated locally the next time the devices are synchronized, thus preventing a new notification.

By processing the device IDs in anonymous form, neither the user nor the server operator can establish a connection between the device (in many cases corresponds to the user) and the processed ID. Note: For productive use, the encryption procedure and processing must be checked and confirmed by the data protection officer!

## Perspectives

The application was developed as a **prototype** within the Hackathon and published under a free license. The idea or the technical implementation approach can be used as desired. A further development after the Hackathon is intended in the context of the private commitment of the participants. Participation by third parties is welcome. We gladly accept your contributions / pull requests.

## Not implemented features

Have a look at our issue board: [is:issue is:open label:feature](https://github.com/generaliinformatik/mycoradar/issues?q=is%3Aissue+is%3Aclosed++label%3Afeature)

## Your contribution

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details about our Code of Conduct and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for the assignment of version numbers. For the available versions please see [Tags for this repository](https://github.com/generaliinformatik/mycoradar/tags).

## Authors

- **Sarah** - *Orga, marketing, video, landing page* - tba
- **Desiree** - **Frontend* - tba
- **Marianne** - *Backend* - tba
- **Iris** - *Conception, Test* - tba
- **Anna** - *UX, Marketing, Landingpage* - tba
- **René** - *Github Admin, Video, Communications Host* - [rfuehrer](https://github.com/rfuehrfer)
- **Michael** - *Frontend* - tba
- **Niko** - *Backend* - tba
- **Oliver** - *Backend* - tba
- **Claus** - *Conception, feedback* - tba
- **Stephan** - *Conception, Marketing, Feedback* - tba
- **Stefan** - *Conception, pitch, feedback* - tba
- **Björn** - *Conception, feedback* - tba

See also the list of [contributors](https://github.com/generaliinformatik/mycoradar/contributors) who have been involved in the project so far.

## License

This project is licensed under a WITH license - please see [LICENSE.md](LICENSE.md) for more details.

Note: We want to help fight this pandemic as humanity **together** by making it available. Joint development of appropriate means must not be in the hands of individuals or less. Please **support this project** and participate in its further development.

## Remarks


tba