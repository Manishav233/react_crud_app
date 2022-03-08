import React from "react";

//This page is to show details of company
export default function About() {
  return (
    <div class="card" style={{ width: "30rem" }}>
      <img
        src="https://static01.nyt.com/images/2019/02/19/pageoneplus/19ITT/merlin_147156831_d007a1d4-c4e5-446d-8fdf-11c697363904-videoSixteenByNine3000.jpg?year=2019&h=1688&w=3000&sig=0x4a2fd2226f3d1cdca231db5fb6b06cdb&tw=1"
        class="card-img-top"
        alt="company logo"
      />
      <div class="card-body">
        <h5 class="card-title">We unite companies</h5>
        <p class="card-text">
          In our Company, we pride ourselves on working together well, which
          isn't surprising considering that uniting companies is what we strive
          for in our every day business. We make an app for people at work —
          whether they're sitting at a desk, on the factory floor, or out on the
          road. If our mission inspires you, join us! We are constantly looking
          for team players and community builders in all of our offices
          worldwide.
        </p>
      </div>
    </div>
  );
}
