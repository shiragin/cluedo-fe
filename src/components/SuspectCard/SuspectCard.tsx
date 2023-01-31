import React from 'react';

// interface Props {
//   name: string;
//   type: string;
//   color: string;
//   image: string;
// }

// const SuspectCard: React.FC<Props> = ({ name, type, color, image }) => {
  const SuspectCard: React.FC = () => {
  const name = 'Yonatan Salmon';
  const type = 'Suspect';
  const img = "https://res.cloudinary.com/dmy0f63gx/image/upload/v1675146408/T041TFU6DE1-U041J6GTJS3-4690e5465a74-512_f1aqiq.jpg"

    return (
      <div className="suspect-card" style={{ backgroundColor: "red" }}>
        <h3 className="suspect-card-name">{name}</h3>
        <p className="suspect-card-type">Type: {type}</p>
        <img className="suspect-card-image" src={img} alt={name} />
      </div>
    );
  };

export default SuspectCard;