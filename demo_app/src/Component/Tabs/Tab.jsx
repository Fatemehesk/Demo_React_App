/* eslint-disable react/prop-types */

const Tab = ( {tabs, onChange} ) => {
  return (
    <div>
      {tabs.map((items) => {
        return (
          <h3 key={items.key} onClick={()=>onChange(items.label)}>
            {items.label}
          </h3>
        );
      })}
    </div>
  );
};
export default Tab;
