import React from "react";

function MegaMenu({ data }) {
  return (
    <div className="bg-white shadow-lg border border-pink-400 rounded-lg p-6 min-w-[600px] flex gap-12 z-50">
      {Object.entries(data).map(([section, items]) => (
        <div key={section} className="min-w-[140px]">
          <div className="font-bold text-pink-500 mb-2">{section}</div>
          {items.map(item => (
            <div key={item} className="font-medium py-1 text-sm cursor-pointer hover:text-pink-400">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MegaMenu;
