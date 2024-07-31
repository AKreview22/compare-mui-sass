"use client";

import React, { useState, ReactNode } from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
    options: Array<string | ReactNode>;
    multiple?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, multiple = false }) => {
    const [selectedOptions, setSelectedOptions] = useState<string | string[]>(
        multiple ? [] : ""
    );
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: string) => {
        if (multiple) {
            const selectedArray = selectedOptions as string[];
            setSelectedOptions(
                selectedArray.includes(option)
                    ? selectedArray.filter((item) => item !== option)
                    : [...selectedArray, option]
            );
        } else {
            setSelectedOptions(option);
            setIsOpen(false);
        }
    };

    const isSelected = (option: string) =>
        multiple
            ? (selectedOptions as string[]).includes(option)
            : selectedOptions === option;

    const displayValue = multiple
        ? (selectedOptions as string[]).join(", ") || "Select options"
        : selectedOptions || "Select an option";

    return (
        <div className={styles.dropdown}>
            <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
                {displayValue}
            </div>
            {isOpen && (
                <div className={styles.menu}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`${styles.menuItem} ${isSelected(option as string) ? styles.selected : ""
                                }`}
                            onClick={() => handleSelect(option as string)}
                        >
                            {multiple && (
                                <input
                                    type="checkbox"
                                    checked={isSelected(option as string)}
                                    readOnly
                                />
                            )}
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
