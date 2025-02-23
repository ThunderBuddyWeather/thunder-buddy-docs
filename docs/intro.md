---
sidebar_position: 1
---
# Thunder Buddy

## Overview

A real-time weather and disaster alert system that provides timely and localized severe weather notifications. This system integrates weather data from Weatherbit, push notifications via OneSignal, interactive maps with Google Maps & Geolocation APIs, and robust analytics powered by Pandas. The mobile app is built using React Native with NativeWind CSS and deployed for demos via the Expo Go app.

Thunder Buddy is designed to:

- Fetch and process severe weather data in real time using the Weatherbit API.
- Deliver instant push notifications using OneSignal.
- Provide an interactive map interface with Google Maps & Geolocation APIs for hyper-localized alerts.
- Allow users to share alerts with friends and family.
- Process engagement data using Pandas for analytical insights.

## Tech Stack

- **Frontend Framework:** React Native with NativeWind CSS (for streamlined styling)
- **Backend Technology:** Flask (Python)
- **Database:** PostgreSQL
- **APIs & Integrations:**
  - Weatherbit API (for severe weather data)
  - Google Maps & Geolocation APIs (for interactive maps and location detection)
  - OneSignal (for push notification delivery)
- **Analytics & Data Processing:** Pandas (Python)
- **Testing & Quality Assurance:**
  - pytest (for API, unit, and integration tests)
  - Detox (for end-to-end mobile app testing)
- **Deployment:**
  - Frontend: Demo deployment via Expo Go app
  - Backend: Flask application on EC2 instance
- **CI/CD:** GitHub Actions
- **Testing:** pytest, Detox

## Architecture Diagram

Below is a simplified diagram showing how different components of the system interact:

![Architecture Diagram](/img/architecture-diagram.svg)
