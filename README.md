DESCRIPTION OF THE TASK:

This project is a real-time chat application built using React.js for the front end and WebSockets for real-time communication. The main objective was to create a responsive, browser-based chat interface where users can send and receive messages instantly, reflecting the growing importance of real-time communication in modern web applications.

Project Overview
The application simulates a basic one-to-one chat experience. Users can open the application in two browser tabs or separate devices, enter a name, and start chatting. Once a message is sent, it immediately appears in both user interfaces, showcasing real-time message delivery without page refreshes. This is made possible by WebSocket technology, which establishes a continuous connection between the client and the server, enabling low-latency communication.

While the application is kept intentionally simple to maintain focus on functionality, it fully demonstrates the foundational structure and workflow behind live messaging systems, such as those used in WhatsApp, Slack, or Microsoft Teams.

Tools and Technologies Used
React.js
React.js is a popular JavaScript library used for building dynamic user interfaces. In this project, React was used to create components like the message input field, chat history display, and message sender information. React’s useState and useEffect hooks helped manage the application state and handle real-time data updates efficiently.

WebSockets (ws Node Package)
WebSockets allow for two-way communication between a client and a server over a single long-lived connection. Unlike traditional HTTP requests, WebSockets keep the connection open, so data can be sent and received at any time. We used the Node.js ws package to create a lightweight WebSocket server, responsible for broadcasting incoming messages to all connected users in real time.

Vite
Instead of using the traditional Create React App (CRA) setup, we chose Vite as our build tool. Vite is faster, lightweight, and better optimized for modern front-end development. It provides hot module replacement (HMR), meaning any code change reflects instantly in the browser, which greatly improved development speed.

Visual Studio Code (VS Code)
VS Code was used as the primary code editor due to its smart IntelliSense, extension support, and integrated terminal, making the development process smooth and productive.

Features
Real-Time Messaging: Messages appear instantly on both sender and receiver screens.

User Identification: On load, users are prompted to enter their name, which is used to label messages accordingly.

Simple Message History: Messages sent during the session are stored in-memory and displayed in order, giving users a visual chat history.

Responsive UI: The layout adapts to different screen sizes, ensuring it works well on laptops and mobile devices.

Minimal Design: A clean, distraction-free interface keeps the focus on the chat functionality.

Learning Outcomes
Through this project, we explored the real-world application of WebSockets in a front-end environment. We also learned to structure a React application from scratch using Vite, manage components and state efficiently, and implement a fully functional client-server WebSocket connection.

Conclusion
This real-time chat application meets the requirement of using a front-end framework (React.js) and WebSockets to build a responsive messaging interface with message history. It’s a solid representation of how modern communication tools function at a fundamental level. Though currently built for two participants, the architecture can be scaled for group chats, emojis, or even message persistence using databases.

This project was built with front-end focus in mind, yet it successfully showcases how front-end developers can incorporate real-time data and socket communication into modern web apps.

OUTPUT:

<img width="1913" height="1018" alt="Image" src="https://github.com/user-attachments/assets/850354ca-696f-41bb-9a66-9ba2ca14b336" />

<img width="1919" height="1017" alt="Image" src="https://github.com/user-attachments/assets/e0d28753-e2f5-44f6-a3c6-4fe257b00924" />

