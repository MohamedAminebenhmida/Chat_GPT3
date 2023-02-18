import Feature from '../../components/feature/Feature'
import './whatGPT3.css'
const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is an AI language model developed by OpenAI. The model uses a revolutionary architecture called a “Transformer.” Transformer models are relatively simple, but what makes them powerful is that their skill and accuracy is directly related to the amount of data they were trained on and the length of that training. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Such technology can be very helpful for business growth, allowing you to remove language barriers with people from other countries." />
      <Feature title="Knowledge Base" text="No more static knowledge Base ! Say hello to updates and retrainings. A base beyound clouds!" />
      <Feature title="Education" text="It is time that institutions harness the power of AI, of new technologies to create better learning environments that are inclusive, flexible, and responsive to each and every student. " />
    </div>
  </div>
);

export default WhatGPT3;