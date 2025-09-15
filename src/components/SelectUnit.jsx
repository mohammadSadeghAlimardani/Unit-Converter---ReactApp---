import { useState } from "react";
import { data } from "../data";
import { nanoid } from "nanoid";

const SelectUnit = (props) => {
    const { handleSelectUnit } = props;

    const [units, setUnits] = useState(data);
    return (
        <div className="select-units">
            {units.map((unit) => {
                const { unitName, unitIcon } = unit;
                return (
                    <article
                        onClick={() => handleSelectUnit(unitName)}
                        key={nanoid()}
                    >
                        {unitIcon}
                        {unitName}
                    </article>
                );
            })}
        </div>
    );
};

export default SelectUnit;
