const Tabs = (props) => {
  const { todos, setSelectedTab, selectedTab } = props;

  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="navbar">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length
        return (
          <button 
          onClick={()=> setSelectedTab(tab)}
          key={tabIndex} className={"navbarbtn" + (tab ===selectedTab ? ' tab-selected': '')}>
            <h2>
              {tab}
              <span className="">({numOfTasks})</span>
            </h2>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
