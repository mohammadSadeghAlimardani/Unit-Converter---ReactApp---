import { useState } from "react";
import "./App.css";
import { data } from "./data";
import { toast, ToastContainer } from "react-toastify";
import SelectUnit from "./components/SelectUnit";
import ConvertForm from "./components/ConvertForm";
import Converted from "./components/Converted";

const App = () => {
    const [unitsArray, setUnitsArray] = useState([]);
    const [valuesArray, setValuesArray] = useState([]);

    const [fromUnit, setFromUnit] = useState("");
    const [toUnit, setToUnit] = useState("");
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleSelectUnit = (unitName) => {
        const unit = data.find((unit) => unit.unitName === unitName);

        const tmep_unitsArray = [];
        Object.keys(unit.converts).map((key) => {
            tmep_unitsArray.push(key.split("-")[0]);
        });
        setUnitsArray(tmep_unitsArray);

        const temp_valuesArray = [];
        Object.values(unit.converts).map((value) => {
            temp_valuesArray.push(value);
        });
        setValuesArray(temp_valuesArray);
    };

    const handleConvert = (event) => {
        event.preventDefault();
        if (fromUnit === toUnit) {
            toast.error("you must provide different units");
            return;
        }
        const fromIndex = unitsArray.indexOf(fromUnit);
        const toIndex = unitsArray.indexOf(toUnit);
        let result = 1;
        if (fromIndex < toIndex) {
            valuesArray.slice(fromIndex, toIndex).map((item) => {
                result = result * item;
            });
            setConvertedAmount(result * amount);
        } else if (fromIndex > toIndex) {
            valuesArray.slice(toIndex, fromIndex).map((item) => {
                result = result * item;
            });
            setConvertedAmount(1 / (result * amount));
        }
    };

    return (
        <>
            <ToastContainer position="top-center" />
            <div className="unit-converter">
                <div className="section-center unit-converter-center">
                    <h3 className="title">plase select your unit</h3>
                    <div className="alert alert-warning">
                        <p>
                            for see correct result, click on convert button at
                            the end of every convert
                        </p>
                    </div>
                    <SelectUnit handleSelectUnit={handleSelectUnit} />
                    {unitsArray.length > 0 || valuesArray.length > 0 ? (
                        <section>
                            <ConvertForm
                                handleConvert={handleConvert}
                                amount={amount}
                                setAmount={setAmount}
                                fromUnit={fromUnit}
                                setFromUnit={setFromUnit}
                                toUnit={toUnit}
                                setToUnit={setToUnit}
                                unitsArray={unitsArray}
                            />
                            <Converted
                                convertedAmount={convertedAmount}
                                amount={amount}
                                fromUnit={fromUnit}
                                toUnit={toUnit}
                            />
                        </section>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

export default App;
