import "../styles/Character.css";

const Scene = () => {
  return (
    <>
      <div className="character-container">
        <div className="character-model character-loaded">
          <div className="character-rim"></div>
          <div className="character-avatar-wrap">
            <img
              src="/images/aakash_hero.png"
              alt="Aakash - AI Automation & Growth Engineer"
              className="character-avatar-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Scene;
