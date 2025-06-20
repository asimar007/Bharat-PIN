# 🇮🇳 Bharat PIN

![Thumbnail](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/Bharat%20PIN.png?raw=true)

## 🌐 Live

🔗 https://bharat-pin.asimsk.online/

## 📌 Project Description

**Bharat-Pin** is an open-source, geo-coded addressing system built to provide a scalable and standardized digital address layer for India. Inspired by the Government of India's DIGIPIN initiative, this project divides India's geography into uniform 4m x 4m grids, assigning each a **unique 10-character** alphanumeric code based on **latitude and longitude.** It bridges the gap between physical locations and their digital representations and powers `"Address as a Service" `**(AaaS)** for seamless **public and private service delivery.**

---

## 🧭 Table of Contents

- [🔍 Project Overview](#project-overview)
- [💡 Features](#features)
- [🧱 Tech Stack](#tech-stack)
- [🔧 How It Works](#how-it-works)
- [🚀 Use Cases](#use-cases)
- [📘 What I Learned](#what-i-learned)
- [📦 Installation](#installation)

---

## Project Overview

Bharat-Pin provides a logical and precise address reference system by

- Encoding latitude and longitude into a unique 10-character code.
- Enabling easy integration with GIS systems.
- Offering a lightweight, fast, and privacy-respecting address format.

---

## Features

- 🔢 Generates unique 10-digit alphanumeric **DIGIPIN-like codes**.
- 🗺️ Uses **Leaflet.js** to render interactive maps and grids.
- 📍 Click on any location to get the Bharat PIN for that spot.
- 🌐 Converts between **coordinates ↔ code** in real-time.
- ⚙️ Offline usable logic for encoding and decoding.

---

## Tech Stack

| Technology         | Purpose                                                                                                       |
| :----------------- | :------------------------------------------------------------------------------------------------------------ |
| **React.js**       | Frontend framework for building the user interface                                                            |
| **Tailwind CSS**   | Utility-first CSS framework for rapid and consistent styling                                                  |
| **Shadcn UI**      | Component library built with Tailwind CSS for rapid, consistent, and accessible UI design                     |
| **Leaflet.js**     | JavaScript library for interactive map rendering                                                              |
| **TanStack Query** | Powerful data fetching and caching library for managing API interactions                                      |
| **GeoJSON**        | Standard format for encoding various geographic data structures                                               |
| **JavaScript**     | Core programming language for implementing grid encoding/decoding logic and overall application functionality |

---

## How It Works

- India's territory is divided into a bounding box from **63.5°E – 99.5°E** and **2.5°N – 38.5°N**.
- The area is split hierarchically into **4x4 grids** for 10 levels (over 1 trillion cells).
- Each cell is encoded using 16 specific alphanumeric characters.
- The resulting **10-character code** represents a specific 4m x 4m location.
- The application allows users to generate and decode this code via a visual map interface.

---

## Use Cases

- 🏥 **Emergency Response** – Share exact location using a 10-digit code.
- 📦 **Delivery Services** – Avoid address errors and improve last-mile delivery.
- 🧭 **Navigation Systems** – Pinpoint destinations more accurately than traditional addresses.
- 🏙️ **Urban Planning** – Use structured, standardized location identifiers.

## What I Learned

- 🌍 Gained a deep understanding of geo-gridding systems and how to convert coordinates into fixed address codes.
- ⚙️ Practiced integrating complex algorithms with frontend tools like React and Leaflet, and improved skills in state management using TanStack Query.

---

## Installation

```bash
git clone https://github.com/asimar007/Bharat-PIN.git
cd Bharat-PIN
npm install
npm run dev
```
