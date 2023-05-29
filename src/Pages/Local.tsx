function Local() {
  let list = (
    <div>
      <div className="text-white">
        {JSON.stringify(localStorage.getItem("Results" || "[]"))?.substring(0, 100)}
      </div>
      <div className="text-white">
        {JSON.stringify(localStorage.getItem("stat" || "[]"))?.substring(0, 90)}
      </div>
    </div>
  );
  return <section className="w-[90%] mx-auto text-white">{list}</section>;
}

export default Local;
