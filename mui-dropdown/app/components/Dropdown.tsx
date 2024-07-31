"use client"

import React, { useState, ReactNode } from 'react';
import { MenuItem, Select, Checkbox, ListItemText, SelectChangeEvent } from '@mui/material';
import styles from './Dropdown.module.css';

interface DropdownProps {
    options: Array<string | ReactNode>;
    multiple?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, multiple = false }) => {
    const [selectedOptions, setSelectedOptions] = useState<string | string[]>(multiple ? [] : '');

    const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
        setSelectedOptions(event.target.value as string | string[]);
    };

    return (
        <div className={styles.dropdown}>
            <Select
                multiple={multiple}
                value={selectedOptions}
                onChange={handleChange}
                renderValue={(selected) => multiple && Array.isArray(selected) ? selected.join(', ') : selected}
                className={styles.select}
            >
                {options.map((option, index) => (
                    <MenuItem key={index} value={option as string} className={styles.menuItem}>
                        {multiple && <Checkbox checked={(selectedOptions as string[]).includes(option as string)} className={styles.checkbox} />}
                        <ListItemText primary={option} />
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default Dropdown;
