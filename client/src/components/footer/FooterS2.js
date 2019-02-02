import React, { Component } from "react";

class FooterS2 extends Component {
  render() {
    return (
      <div>
        <h2>
          Astro News
        </h2>

        <div class="field">
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="youremail@astroworld.com"
            />
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />  I agree to the terms and conditions
                </label>
              </div>
            </div>

            <button style={{ marginTop: "20px" }} className="button is-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterS2;
