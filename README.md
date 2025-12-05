# Stranger Things Light Wall

An immersive, 3D interactive web experience inspired by *Stranger Things*. Send messages from the Upside Down using a virtual version of Joyce Byers' living room wall.

<div align="center">
  <img src="https://github.com/user-attachments/assets/d58bba2f-d3dd-4125-9bcd-be45d280719b" alt="Creator Interface" width="100%" />
</div>

## ✨ Features

* **3D Interactive Scene:** A fully navigable 3D environment built with **React Three Fiber** and Blender.
* **Real-time Lighting:** Custom 3D bulbs that cast real shadows and use post-processing bloom effects to create a neon glow.
* **Retro Synth Audio:** A custom Web Audio API synthesizer that generates analog 80s-style sounds on the fly (no MP3 files required).
* **Shareable Messages:** Create a message, generate a unique link, and send it to friends.
* **The Sequencer:** When a friend opens the link, the wall automatically takes over and spells out your message using the light code.
## 🛠 Tech Stack

**Frontend:**
* React (Vite)
* TypeScript
* React Three Fiber (Three.js)
* Tailwind CSS
* React Router DOM
* Postprocessing

**Backend:**
* Node.js (Express)
* MongoDB (Mongoose)

## 🎮 How to Use

### 📡 Sending a Message (Creator Mode)
1.  **Compose Your Signal:**
    * **Interactive 3D:** Click the individual bulbs or floating letters directly on the 3D wall.
    * **Keyboard Support:** Simply type on your physical keyboard to light up the wall in real-time.
2.  **Preview:** As you type, the corresponding bulbs will flash with specific colors (Yellow, Red, Green, Blue) and play unique synth notes.
3.  **Transmit:**
    * Click the **"Share Message"** button at the bottom of the screen.
    * A unique, encrypted link will be generated (e.g., `localhost:5173.com/8f2a9`).
    * Copy the link and send it to a friend.

### 🔦 Receiving a Message (Player Mode)
1.  **Incoming Transmission:** When a user opens a shared link, the app enters **"Player Mode"**.
2.  **Auto-Play:** The 3D scene loads, and the message automatically plays back, lighting up the bulbs in the correct sequence to spell out the hidden text.
3.  **Controls:**
    * **Replay Signal:** Watch the sequence again.
    * **Send New Signal:** Redirects to the home page to compose a reply.


<img width="1908" height="907" alt="image" src="https://github.com/user-attachments/assets/2fe40772-f0fd-4b28-9db2-b993d23fddf0" />

