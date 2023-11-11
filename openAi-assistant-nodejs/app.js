const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI } = require("openai");
require("dotenv").config();
const cors = require('cors');

const app = express();
const port = 3001;

// Create an OpenAI connection
const secretKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
        apiKey: secretKey,
});
      
// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());

// Route to handle user questions
app.post('/ask-question', async (req, res) => {
  try {
    const { question } = req.body;

    const assistant = process.env.ASSISTANT_KEY;
    // Create a thread
    const thread = await openai.beta.threads.create();

    // Pass in the user question into the existing thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: question,
    });

    // Use runs to wait for the assistant response and then retrieve it
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant,
    });

    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    let runComplete = false;

    while (!runComplete) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      runComplete = runStatus.status === "completed" || runStatus.status === "failed";     
      
      if (runStatus.status === "requires_action") {
        const toolCall = runStatus.required_action.submit_tool_outputs.tool_calls[0];
        console.log('toolCall, ', toolCall)
        const value = eval(`${toolCall.function.name}(${toolCall.function.arguments})`)
        const id = toolCall.id;
  
        await openai.beta.threads.runs.submitToolOutputs(thread.id, run.id, {
          tool_outputs: [{ tool_call_id: id, output: value }],
        });
      }
    }

    // Get the last assistant message from the messages array
    const messages = await openai.beta.threads.messages.list(thread.id);

    console.log('messages:', messages)
    // Find the last message for the current run
    const lastMessageForRun = messages.data
      .filter(
        (message) => message.run_id === run.id && message.role === "assistant"
      )
      .pop();

    // If an assistant message is found, send it as the response
    if (lastMessageForRun) {
      res.json({ response: lastMessageForRun.content[0].text.value });
    } else {
      res.json({ response: "No response from the assistant." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error : " + error.message, });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
