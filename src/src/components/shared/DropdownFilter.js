// DropdownFilter component
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FilterSection {
  title: string;
  options: string[];
}

interface DropdownFilterProps {
  sections: FilterSection[];
  selectedOptions: {
    status: string[];
    audience: string[];
    period: string[];
  };
  onChange: (section: string, option: string) => void;
}

const DropdownFilter = ({
  sections,
  selectedOptions,
  onChange,
}: DropdownFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filters
          {isOpen ? (
            <FaChevronUp className="ml-2 h-5 w-5" />
          ) : (
            <FaChevronDown className="ml-2 h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {sections.map((section) => (
              <div key={section.title} className="px-4 py-2">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {section.title}
                </h3>
                {section.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center mb-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      checked={selectedOptions[
                        section.title.toLowerCase() as keyof typeof selectedOptions
                      ].includes(option)}
                      onChange={() => onChange(section.title, option)}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
