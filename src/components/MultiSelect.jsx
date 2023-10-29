import React from "react";
import { useState, useEffect } from "react";
import { StyledSelect, StytledLabel } from "./styledForm.style";
export default function MultiSelect({ item, FormData, setFormData }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const formDropDownData = () => {
    let dropdowndata = [];
    item.options.map((value, index) => {
      dropdowndata.push({
        id: `checkbox-${index}`,
        value: value,
      });
    });
    return dropdowndata;
  };

  useEffect(() => {
    var formData = { ...FormData };
    formData[item.keyword] = selectedItems.map((items) => {
      return items.value;
    });
    setFormData(formData);
  }, [selectedItems]);

  const [dropDownData, setDropDownData] = useState(formDropDownData());

  const canBeChecked = (id) => {
    return selectedItems.some((item) => item.id === id);
  };

  const handleSelectedValues = (e) => {
    var selectedId = selectedItems ? selectedItems.map((tag) => tag.id) : [];
    if (e.target.checked) {
      selectedId.push(e.target.id);
    } else {
      selectedId = selectedId.filter((value) => value !== e.target.id);
    }
    setSelectedItems(
      formDropDownData().filter((value) => selectedId.includes(value.id))
    );
  };

  const searchItems = (e) => {
    setDropDownData(
      formDropDownData().filter((value) => {
        return value.value.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  const clearSelectedValues = (e) => {
    setSelectedItems([]);
  };

  const handleOutsideClick = (e) => {
    if (e.target.closest(".customizedSelectWrapper")) {
      return;
    }
    setShowDropdown(false);
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);

  return (
    <StyledSelect itemsselected={selectedItems.length > 0}>
      <StytledLabel>{item.label}</StytledLabel>
      <div className="customizedSelectWrapper">
        <span
          className={selectedItems.length > 0 ? "showSelected" : "unSelected"}
          onClick={(e) => {
            setShowDropdown(!showDropdown);
          }}
        >
          {selectedItems.length > 0
            ? selectedItems.map((items) => {
                return <span>{items.value}</span>;
              })
            : "Nothing Selected"}
        </span>

        {showDropdown && (
          <div className="values">
            <div className="search">
              <input placeholder="Search" onChange={searchItems} />
              {selectedItems && selectedItems.length > 0 && (
                <span onClick={clearSelectedValues} className="clear">
                  Clear
                </span>
              )}
            </div>
            <div className="dropdown-wrapper">
              {dropDownData.length > 0 ? (
                dropDownData.map(({ value, id }, index) => {
                  return (
                    <label className="dropdown-label" htmlFor={id}>
                      <input
                        id={id}
                        onChange={(e) => {
                          handleSelectedValues(e);
                        }}
                        type="checkbox"
                        checked={canBeChecked(id)}
                      />
                      <span>{value}</span>
                    </label>
                  );
                })
              ) : (
                <span>No items to display</span>
              )}
            </div>
          </div>
        )}
      </div>
    </StyledSelect>
  );
}
