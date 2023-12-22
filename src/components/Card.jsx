import star from "/assets/Star.png";
export default function Card(props) {
  let badgeText = ""
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT";
  }else if(props.item.location === "online"){
    badgeText = "Online";
  }

  return (
    <div className="card">
        {badgeText != "" && <div className="card-badge">{badgeText}</div>}
      <img className="profile" src={`/assets/${props.item.img}`} />
      <div className="card-status">
        <img className="profile-star" src={star} alt="" />
        <p className="profile-status">
          {props.rating} ({props.item.reviewCount}) {props.item.location}
        </p>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <b>From ${props.item.price} /</b> person
      </p>
    </div>
  );
}

//
