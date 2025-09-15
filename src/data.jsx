import { TbRulerMeasure2 } from "react-icons/tb";
import { GiKitchenScale } from "react-icons/gi";
import { IoMdCube } from "react-icons/io";
import { BiSolidArea } from "react-icons/bi";

const data = [
    {
        unitName: "length",
        unitIcon: <TbRulerMeasure2 />,
        converts: {
            "mile-kilometer": 1.609,
            "kilometer-meter": 1000,
            "meter-yard": 1.0936133,
            "yard-foot": 3,
            "foot-inch": 12,
            "inch-centiMeter": 2.54,
            "centiMeter-miliMeter": 10,
            "miliMeter-miliMeter": 1,
        },
    },
    {
        unitName: "weight",
        unitIcon: <GiKitchenScale />,
        converts: {
            "tone-kilogram": 1000,
            "kilogram-pound": 2.2046226218,
            "pound-ounce": 16,
            "ounce-gram": 28.34952,
            "gram-gram": 1,
        },
    },
    {
        unitName: "volume",
        unitIcon: <IoMdCube />,
        converts: {
            "cubicMeter-gallon": 264.172052358148,
            "gallon-liter": 3.785411784,
            "liter-cubicCentiMeter": 1000,
            "cubicCentiMeter-cubicCentiMeter": 1,
        },
    },
    {
        unitName: "area",
        unitIcon: <BiSolidArea />,
        converts: {
            "hectar-squareMeter": 10000,
            "squareMeter-squareFoot": 10.76391041671,
            "squareFoot-squareFoot": 1,
        },
    },
];
export { data };
