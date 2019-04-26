# 3D im Browser – eine Einführung in babylon.js

Repository for the babylon.JS introduction workshop at [Spartakiade 2019](https://spartakiade.org/)

View the slides here: [Slides] (link to be added - sorry)

Workshop was given together by Christina Zenzes and Anna Backs.<br/>
Find Christina on twitter: [merelyChristina](https://twitter.com/merelyChristina)<br/>
Find Anna on twitter: [merelyAnna](https://twitter.com/merelyAnna)<br/>

The rest of the text here is German only. Sorry. Please ping Christina or Anna if you want an English version.

### Description:
Wer hat nicht schon mal davon geträumt, etwas in 3D zu bauen. Oder noch besser: Eine 3D-Anwendung die im Browser läuft?! In diesem Workshop wollen wir dir helfen, diesen Traum zu erfüllen. Wir werden dazu das JavaScript-Framework babylon.js benutzen, welches als 3D-Gameengine im Browser fungiert, jedoch für wesentlich mehr als nur Spieleentwicklung genutzt werden kann.
Vormittags werden wir zunächst über die Grundlagen sprechen und anfangen, eine kleine Welt aufzubauen, mit welcher der Anwender interagieren kann. Nach diesen Grundlagen werden wir auf weitere Leistungsmerkmale und Funktionalitäten eingehen und Effekte wie z. B. Regen und Schwerkraft integrieren. Am Ende des Tages wirst du eine nach deinen Vorstellungen aufgebaute 3D-Anwendung selbstständig erstellt haben, die in aktuellen Browsern läuft. Du hast gleichzeitig einen guten Überblick über die wichtigsten Funktionalitäten von babylon.js.
Wenn du teilnehmen möchtest, wäre es super, wenn du bereits ein wenig Erfahrung mit JavaScript gewonnen hast oder dich zumindest nicht vor Erstkontakt mit JavaScript scheust :).

Find out more about babylon.JS over here: [https://www.babylonjs.com/](https://www.babylonjs.com/)

### Getting started

#### Node installieren:

Windows: https://nodejs.org/en/download/

MAC: https://nodejs.org/en/download/package-manager/#macos (über brew)

Linux: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions (über apt-get)

#### Node-Modules installieren

Auf der Bash/Command-Line in das Verzeichnis navigieren, in welchem dieses Projekt liegt. Dort folgenden Befehl ausführen:

```javascript
npm install
```

#### Dev-Server starten

Der Dev-Server, auf welchem die Seite inklusive Java-Script ausgeführt wird, kann mit dem folgenden Befehl auf der 
Bash/CMD im Projekt-Verzeichnis gestartet werden:

```javascript
npm start
```

Der Server ist nun im Default-Zustand unter [http://localhost:8080](http://localhost:8080) erreichbar.