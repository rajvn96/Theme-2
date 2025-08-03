const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {Array(8).fill("").map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img shimmer"></div>
            <div className="shimmer-line shimmer"></div>
            <div className="shimmer-line shimmer short"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  