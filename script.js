async function getAnswer() {
    const question = document.getElementById('question').value;
    const apiKey = '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';
    const model = 'text-davinci-002';
    const prompt = `${question}`;
    const temperature = 0.5;
  
    const response = await fetch(`https://api.openai.com/v1/models/${model}/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt,
        temperature
      })
    });
  
    const data = await response.json();
    const answer = data.choices[0].text;
  
    document.getElementById('answer').innerHTML = answer;
  }
  