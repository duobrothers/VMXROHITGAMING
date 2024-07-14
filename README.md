# VMXROHITGAMING

![My channel interface](./Screenshot_2024-07-14-07-18-34-07_f9ee0578fe1cc94de7482bd41accb329.jpg)

# My YouTube Channel Website

Welcome to my YouTube channel's website! This site provides viewers with additional content, resources, and a way to interact with the community.

## Features

- **Video Archive:** Watch all my YouTube videos directly on the site.
- **Blog:** Read my latest thoughts, tutorials, and updates.
- **Chat:** Interact with other viewers and participate in discussions
# My YouTube Channel website

## Installation
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Channel Website</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .chat-container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; }
        .chat-messages { border: 1px solid #ddd; padding: 10px; height: 300px; overflow-y: scroll; }
        .chat-input { width: calc(100% - 80px); padding: 10px; }
        .chat-button { width: 60px; padding: 10px; }
        .link { margin-top: 20px; text-align: center; }
    </style>
</head>
<body>

    <div class="chat-container">
        <h1>Welcome to the Chat!</h1>
        <div class="chat-messages" id="chatMessages"></div>
        <input type="text" id="chatInput" class="chat-input" placeholder="Type a message...">
        <button class="chat-button" onclick="sendMessage()">Send</button>
    </div>
    
    <div class="link">
        <a href="https://github.com/duobtothers/VMXROHITGAMING/blob/main/README.md" target="_blank">View README.md</a>
    </div>

    <script>
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            if (message) {
                const chatMessages = document.getElementById('chatMessages');
                const messageElement = document.createElement('div');
                messageElement.textContent = message;
                chatMessages.appendChild(messageElement);
                input.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    </script>

</body>
</html>

##License
  
  This project is licensed under the MIT License. See the LICENSE file for details.

##Contact

YouTube Channel- VMXROHITGAMEING

Instagram 

Email
