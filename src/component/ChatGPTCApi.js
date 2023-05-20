import React, { useState } from 'react';
import axios from 'axios';
import'./ChatGPT.css'

function ChatGPTCApi() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: inputText },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`,
          },
        }
      );

      const reply = response.data.choices[0].message.content;
      setResponse(reply);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chat-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className="chat-submit">Send</button>
      </form>
      <div className="chat-bubble">
        <p className="user-message">{inputText}</p>
      </div>
      <div className="chat-bubble">
        <p className="assistant-message">{response}</p>
      </div>
    </div>
  );
  
}

export default ChatGPTCApi;
