import React from "react";
import TeamPhoto from "../../../static/q.jpeg";
export default () => {
  return (
    <div className="team-member">
      <div className="team-member__info">
        <img src={TeamPhoto} alt="Photo" className="team-member__photo" />

        <p className="team-member__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsam
        </p>
      </div>
      <div className="team-member__info">
        <img src={TeamPhoto} alt="Photo" className="team-member__photo" />

        <p className="team-member__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsam
        </p>
      </div>
      <div className="team-member__info">
        <img src={TeamPhoto} alt="Photo" className="team-member__photo" />

        <p className="team-member__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsam
        </p>
      </div>
      {/* <div className="team-member__info">
        <img src={TeamPhoto} alt="Photo" className="team-member__photo" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsam
          placeat labore perferendis, ab, cum, magni repudiandae hic animi
          temporibus magnam officia. Excepturi inventore aliquam error
          doloremque aspernatur ea iste!
        </p>
      </div> */}
    </div>
  );
};
