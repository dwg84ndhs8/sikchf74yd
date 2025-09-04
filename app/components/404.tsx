const NotFound = () => {
  return (
    <div className="max-w-4xl" id="container">
      <div className="p-4 mb-4">
        {/* <img src="images/not_found.png" alt="Domain not found" /> */}
        <h1 className="text-xl">This site has been blocked</h1>
        <h2 className="text-lg">The content of this site is in violation of our terms of service.</h2>
        {/* <p>please contact abuse@namecheap.com for more info</p> */}
      </div>
    </div>
  );
};

export default NotFound;