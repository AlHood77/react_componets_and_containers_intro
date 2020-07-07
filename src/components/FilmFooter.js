import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="film-footer">
        
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.imdb.com/calendar/?region=gb"
        >
                View more upcomming releases >>
         </a>
      </div>
    );
  }
}