import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>If you haven’t yet heard of the transformational potential of GPT-3, you are about to have your mind blown.<br/>GPT-3 is essentially the first artificial intelligence that can pass the Turing Test and write copy that is highly convincing as human.<br/>The best way to think about it is that GPT-3 is essentially a professional-level copywriter that has the collective knowledge of the entire Internet. </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt=""/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt=""/>
    </div>
  </div>
);

export default Header;