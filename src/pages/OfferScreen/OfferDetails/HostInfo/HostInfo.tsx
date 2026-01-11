type HostInfoProps = {
  name: string;
  isPro: boolean;
  avatarUrl: string;
  description: string[];
};

export const HostInfo = ({
  name,
  isPro,
  avatarUrl,
  description,
}: HostInfoProps) => (
  <div className="offer__host">
    <h2 className="offer__host-title">Meet the host</h2>
    <div className="offer__host-user user">
      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
        <img
          className="offer__avatar user__avatar"
          src={avatarUrl}
          width="74"
          height="74"
          alt="Host avatar"
        />
      </div>
      <span className="offer__user-name">{name}</span>
      {isPro && <span className="offer__user-status">Pro</span>}
    </div>
    <div className="offer__description">
      {description.map((text) => (
        <p key={text} className="offer__text">
          {text}
        </p>
      ))}
    </div>
  </div>
);
