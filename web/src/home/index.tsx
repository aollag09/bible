import React from 'react';
import { Splash } from './component/Splash';
import splashRead from './resources/image/splash-read.png'
import splashSearch from './resources/image/splash-search.png'
import splashExplore from './resources/image/splash-explore.png'
import splashPeople from './resources/image/splash-people.png'
import splashMap from './resources/image/splash-map.png'

export class Home extends React.Component {

  render() {
    return (
      <div className="home">

        <div className="bottom">
          <p> Explore & Analyse the Bible with:</p>
          <ul>

            <li>
              <Splash
                link="/read"
                image={splashRead}
                title="Read"
                subtitle="Read and Tag the Bible" />
            </li>

            <li>
              <Splash
                link="/search"
                image={splashSearch}
                title="Search"
                subtitle="Search in Scriptures" />
            </li>

            <li>
              <Splash
                link="/explore"
                image={splashExplore}
                title="Explore"
                subtitle="Explore Bible Stories" />
            </li>

            <li>
              <Splash
                link="/people"
                image={splashPeople}
                title="People"
                subtitle="People in the Bible" />
            </li>

            <li>
              <Splash
                link="/map"
                image={splashMap}
                title="Location"
                subtitle="Locations of Bible Events" />
            </li>

          </ul>

        </div>
      </div>
    );
  }

}
