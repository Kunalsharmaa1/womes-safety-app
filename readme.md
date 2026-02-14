Women Safety Alert Application
Abstract
This project proposes a community-based emergency alert system designed to enhance women safety. The system allows a user to send an emergency SOS alert 
along with real-time location to nearby registered users and police authorities.

Problem Statement
Women often face unsafe situations where immediate help is required. In panic situations, it may not be possible to make a phone call or share location manually. 
There is a need for a fast and automated emergency alert system.

Proposed Solution
The proposed system is a mobile-based application with an SOS button. When the user presses the SOS button:

The app captures the user’s current GPS location.

An emergency alert message is generated automatically.

The alert is sent to:

Nearby registered users (within a fixed radius)

Police / emergency authorities

Nearby users receive notification and can respond quickly.

System Architecture
User Mobile App
↓
Server / Cloud Backend
↓
Database
↓
Nearby Users + Police Notification System

Working Flow
User registers in the app.

Location access permission is granted.

In emergency, user presses SOS.

System fetches live GPS coordinates.

Server checks database for nearby users.

Alert notification is sent.

Nearby users receive location and respond.

Technologies (Proposed)
Android Application

GPS Location Services

Firebase Backend

Cloud Database

Push Notification System

Google Maps API

Project Status
Currently in design and conceptual phase as part of PBL submission.

Future Scope
Voice-activated SOS

Smartwatch integration

AI-based unsafe zone detection

Live tracking until help arrives

Conclusion
This system aims to improve women safety through technology by enabling fast emergency alerts and community-based response.
