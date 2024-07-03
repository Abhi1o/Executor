export const getSuggestions = async (chatHistory:any) => {
  const chatModel = localStorage.getItem('chatModel');
  const chatModelProvider = localStorage.getItem('chatModelProvider');
console.log(process.env.NEXT_PUBLIC_API_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/suggestions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_history: chatHistory,
      chat_model: chatModel,
      chat_model_provider: chatModelProvider,
    }),
  });

  const data = await res.json();

  return data.suggestions;
};
