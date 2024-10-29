const Shimmer = () => {
  return (
    <>
      <div className="restaurant-List">
        {Array(50)
          .fill("")
          .map((e, index) => (
            <div  key={index} className="shimmer-card"></div>
          ))}
      </div>

      <h1>Loading............</h1>
    </>
  );
};

export default Shimmer;
