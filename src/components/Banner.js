import React from 'react'
import horizontal from '.././Images/Gray_landscape.jpg'

const Banner=()=>  {
  return (
    
      <div
        className="banner"
        style={{
          "background-image": `url(${horizontal})`,
          "background-position": "center center",
        }}
      >
        <div className="banner_contents">
          <div className="banner_title"> The Gray Man</div>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <div className="banner_description">
            <h1>
              When the CIA's most skilled operative-whose true identity is known
              to none-accidentally uncovers dark agency secrets, a psychopathic
              former colleague puts a bounty on his head,...
            </h1>
          </div>
        </div>
        <div className="banner_fadebottom"></div>
      </div>
    
  );
}

export default Banner;
